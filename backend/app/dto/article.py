from pydantic import BaseModel
from typing import Optional

class ArticleBase(BaseModel):
    title: str
    summary: Optional[str] = None
    link: Optional[str] = None
    imageLink: Optional[str] = None

class ArticleCreate(ArticleBase):
    adminID: int

class ArticleResponse(ArticleBase):
    articleID: int
    adminID: int
    
    class Config:
        from_attributes = True