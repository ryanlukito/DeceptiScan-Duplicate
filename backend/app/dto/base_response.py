from pydantic import BaseModel

class BaseResponseModel(BaseModel):
    code: int


class HealthCheckModel(BaseModel):
    status: str


class HealthCheckResponseModel(BaseResponseModel):
    data: HealthCheckModel


class TokenResponseModel(BaseModel):
    access_token: str
    token_type: str
    username: str
    
class DbTestResponseModel(BaseModel):
    message: str
    result: int = None
    error: str = None