from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from app.db import Base

class SpamReport(Base):
    __tablename__ = "spamreport"

    spamreportID = Column(Integer, primary_key=True, autoincrement=True)
    spamresultID = Column(Integer, ForeignKey("spamresult.spamresultID", ondelete="CASCADE"))
    review = Column(String(20), nullable=False)
    
    result = relationship("SpamResult", back_populates="reports")