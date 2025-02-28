from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from app.db import Base

class Admin(Base):
    __tablename__ = "admin"

    adminID = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String(255), nullable=False)
    password = Column(String(255), nullable=False)
    
    articles = relationship("Article", back_populates="admin", cascade="all, delete-orphan")