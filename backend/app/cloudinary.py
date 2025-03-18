import cloudinary
import cloudinary.uploader
from fastapi import HTTPException
import os
from typing import Optional

# Initialize Cloudinary with environment variables
cloudinary.config(
    cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"),
    api_key=os.getenv("CLOUDINARY_API_KEY"),
    api_secret=os.getenv("CLOUDINARY_API_SECRET")
)

async def upload_image(image_file, folder="deceptiscan"):
    """
    Upload an image to Cloudinary
    
    Args:
        image_file: The image file to upload
        folder: The folder to upload to in Cloudinary
        
    Returns:
        str: The URL of the uploaded image
    """
    try:
        if not image_file:
            return None
            
        upload_result = cloudinary.uploader.upload(
            image_file,
            folder=folder
        )
        return upload_result.get("secure_url")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to upload image: {str(e)}")

async def delete_image(image_url: Optional[str]):
    """
    Delete an image from Cloudinary using its public ID
    
    Args:
        image_url: The URL of the image to delete
    """
    if not image_url:
        return
        
    try:
        # Extract public ID from URL
        parts = image_url.split('/')
        public_id_with_ext = parts[-1]
        public_id = public_id_with_ext.split('.')[0]
        folder = parts[-2]
        
        # Format: folder/public_id
        full_public_id = f"{folder}/{public_id}"
        
        cloudinary.uploader.destroy(full_public_id)
    except Exception as e:
        # Just log the error but don't raise, as deletion failures shouldn't break the app
        print(f"Failed to delete image from Cloudinary: {str(e)}")