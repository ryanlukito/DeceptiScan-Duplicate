from sqlalchemy import Column, Integer, String, Text, ForeignKey
from sqlalchemy.orm import relationship

from app.db import Base

class Article(Base):
    __tablename__ = "article"

    articleID = Column(Integer, primary_key=True, autoincrement=True)
    adminID = Column(Integer, ForeignKey("admin.adminID", ondelete="CASCADE"))
    title = Column(String(255), nullable=False)
    summary = Column(Text)
    link = Column(String(255))
    imageLink = Column(String(255))
    
    admin = relationship("Admin", back_populates="articles")