from fastapi import APIRouter, Depends, HTTPException, status, File, UploadFile, Body
from sqlalchemy.orm import Session
from typing import List, Optional
import json

from app.db import get_db
from app.models.model_article import Article
from app.dto import ArticleCreate, ArticleResponse
from app.cloudinary import upload_image, delete_image

article_router = APIRouter(
    prefix="/articles",
    tags=["Articles"]
)

@article_router.post("/", response_model=ArticleResponse, status_code=status.HTTP_201_CREATED)
async def create_article(
    article: ArticleCreate = Body(...),  # Make JSON body required
    db: Session = Depends(get_db)
):
    """
    Create a new article in the database.
    Accepts only JSON body with article data.
    """
    try:
        # Create article in database
        db_article = Article(
            adminID=article.adminID,
            title=article.title,
            summary=article.summary,
            link=article.link,
            imageLink=article.imageLink  # Use the URL provided in JSON
        )
        
        db.add(db_article)
        db.commit()
        db.refresh(db_article)
        return db_article
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error creating article: {str(e)}"
        )

@article_router.post("/upload-image")
async def upload_article_image(image: UploadFile = File(...)):
    """
    Upload an image to Cloudinary and return the URL
    """
    try:
        contents = await image.read()
        image_url = await upload_image(contents)
        return {"imageUrl": image_url}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error uploading image: {str(e)}"
        )

@article_router.get("/", response_model=List[ArticleResponse])
def get_all_articles(db: Session = Depends(get_db)):
    """
    Get all articles from the database
    """
    articles = db.query(Article).all()
    return articles

@article_router.delete("/{article_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_article(article_id: int, db: Session = Depends(get_db)):
    """
    Delete an article from the database
    """
    try:
        # Check if article exists first
        article = db.query(Article).filter(Article.articleID == article_id).first()
        if not article:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Article with ID {article_id} not found"
            )
        
        # Store image link before deleting the article
        image_to_delete = article.imageLink if article.imageLink else None
        
        # Delete from database
        try:
            db.delete(article)
            db.commit()
        except Exception as db_error:
            db.rollback()
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=f"Database error while deleting article: {str(db_error)}"
            )
        
        # Only attempt to delete the image if there was one and DB delete was successful
        if image_to_delete:
            try:
                await delete_image(image_to_delete)
            except Exception as img_error:
                # Log error but don't fail the request since the article was deleted successfully
                print(f"Warning: Failed to delete image from storage: {str(img_error)}")
        
        # Return empty response with 204 status code
        return None
        
    except HTTPException as http_ex:
        # Re-raise HTTP exceptions
        raise http_ex
    except Exception as e:
        db.rollback()
        # Log the full error for debugging
        import traceback
        error_trace = traceback.format_exc()
        print(f"Error deleting article {article_id}: {str(e)}")
        print(error_trace)
        
        # Make sure the error message is returned in the proper format
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail={"message": f"Failed to delete article: {str(e)}", "error_type": type(e).__name__}
        )