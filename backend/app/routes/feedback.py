from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models.model_phishingreport import PhishingReport
from app.models.model_spamreport import SpamReport
from app.db import get_db
from app.dto import FeedbackRequest
import logging

feedback_router = APIRouter(tags=["Feedback"])

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@feedback_router.post("/submit_phishing_feedback")
def submit_phishing_feedback(request: FeedbackRequest, db: Session = Depends(get_db)):
    logger.info(f"Received phishing feedback: {request}")
    try:
        feedback = PhishingReport(
            phishingresultID=request.phishingresultID,
            review=request.review
        )
        db.add(feedback)
        db.commit()
        logger.info("Phishing feedback submitted successfully")
        return {"message": "Phishing feedback submitted successfully"}
    except Exception as e:
        logger.error(f"Failed to submit phishing feedback: {e}")
        raise HTTPException(status_code=500, detail="Failed to submit phishing feedback")

@feedback_router.post("/submit_spam_feedback")
def submit_spam_feedback(request: FeedbackRequest, db: Session = Depends(get_db)):
    logger.info(f"Received spam feedback: {request}")
    try:
        feedback = SpamReport(
            spamresultID=request.spamresultID,
            review=request.review
        )
        db.add(feedback)
        db.commit()
        logger.info("Spam feedback submitted successfully")
        return {"message": "Spam feedback submitted successfully"}
    except Exception as e:
        logger.error(f"Failed to submit spam feedback: {e}")
        raise HTTPException(status_code=500, detail="Failed to submit spam feedback")