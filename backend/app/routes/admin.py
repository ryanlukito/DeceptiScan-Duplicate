import bcrypt
from fastapi import APIRouter, HTTPException, status, Depends
from fastapi.applications import JSONResponse
from sqlalchemy.orm import Session

from app.db import get_db
from app.models import Admin
from app.dto import AdminCreatedResponseModel, CreateAdminRequestModel


admin_router = APIRouter(tags=["Admin"])


def __generate_hash(password: str) -> str:
    b_password = password.encode(encoding='utf8')
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(b_password, salt)
    return str(hashed).split("'")[1]


def __create_admin(admin_data: CreateAdminRequestModel, db: Session) -> int:
    # Remove UUID generation, let the database handle auto-increment
    password = __generate_hash(admin_data.password)
    admin = Admin(
        # Remove adminID assignment since it's auto-incremented
        username = admin_data.username,
        password = password
    )
    db.add(admin)
    db.commit()
    
    # Return the integer ID
    return admin.adminID

# @admin_router.get("/")
# def get_admin(db: Session = Depends(get_db)) -> JSONResponse:
#     admin = db.query(Admin).all()
#     return JSONResponse({"username": admin[0].username, "password": admin[0].password})


@admin_router.post("", response_model=AdminCreatedResponseModel,
             status_code=status.HTTP_201_CREATED)
def create_admin(admin_data: CreateAdminRequestModel, db: Session=Depends(get_db)):
    try:
        # Log the received data (remove in production)
        print(f"Received admin data: {admin_data}")
        
        # Check if username already exists
        existing_admin = db.query(Admin).filter(Admin.username == admin_data.username).first()
        if existing_admin:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="Username already exists"
            )
            
        admin_id = __create_admin(admin_data, db)
        res = AdminCreatedResponseModel(
            code=status.HTTP_201_CREATED,
            data={
                "admin_id": admin_id,
            }
        )
        return res
    except HTTPException as he:
        # Re-raise HTTP exceptions as-is
        raise he
    except Exception as e:
        print(f"Error creating admin: {str(e)}")
        # Add more detailed error information
        import traceback
        traceback.print_exc()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to create admin: {str(e)}"
        )