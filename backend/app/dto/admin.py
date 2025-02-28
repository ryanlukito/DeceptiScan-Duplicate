from pydantic import BaseModel
from .base_response import BaseResponseModel


class CreateAdminRequestModel(BaseModel):
    username: str
    password: str


class AdminCreatedModel(BaseModel):
    admin_id: int


class AdminCreatedResponseModel(BaseResponseModel):
    data: AdminCreatedModel