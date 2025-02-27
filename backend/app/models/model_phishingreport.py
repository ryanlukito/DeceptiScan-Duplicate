from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from app.db import Base

class PhishingReport(Base):
    __tablename__ = "phishingreport"

    phishingreportID = Column(Integer, primary_key=True, autoincrement=True)
    phishingresultID = Column(Integer, ForeignKey("phishingresult.phishingresultID", ondelete="CASCADE"))
    review = Column(String(20), nullable=False)
    
    result = relationship("PhishingResult", back_populates="reports")