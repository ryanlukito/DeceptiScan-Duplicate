from sqlalchemy import Column, Integer, String, Text, Float
from sqlalchemy.orm import relationship

from app.db import Base

class SpamResult(Base):
    __tablename__ = "spamresult"

    spamresultID = Column(Integer, primary_key=True, autoincrement=True)
    textInput = Column(Text, nullable=False)
    accuracy = Column(Float, nullable=False)
    verdict = Column(String(20), nullable=False)
    
    reports = relationship("SpamReport", back_populates="result", cascade="all, delete-orphan")