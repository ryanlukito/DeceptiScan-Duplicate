from pydantic import BaseModel

class FeedbackRequest(BaseModel):
    phishingresultID: int = None  # Optional field for phishing feedback
    spamresultID: int = None  # Optional field for spam feedback
    review: str