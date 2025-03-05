from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import joblib

# Load models and vectorizers
model_spam = joblib.load("../NLP_MODEL/ml_model/svm_model_spam.joblib")
vectorizer_spam = joblib.load("../NLP_MODEL/ml_model/svm_vectorizer_spam.joblib")
model_phishing = joblib.load("../NLP_MODEL/ml_model/svm_model_phishing.joblib")
vectorizer_phishing = joblib.load("../NLP_MODEL/ml_model/svm_vectorizer_phishing.joblib")

class TextRequest(BaseModel):
    text: str

predict_router = APIRouter(tags=["Predict"])

@predict_router.post("/predict_spam")
def predict_spam(request: TextRequest):
    if not request.text:
        raise HTTPException(status_code=400, detail="No text provided")
    
    text_vectorized = vectorizer_spam.transform([request.text])
    prediction = model_spam.predict(text_vectorized)
    result = "Spam" if round(prediction[0]) == 1 else "Not Spam"
    return {"prediction": result, "details": prediction.tolist()}

@predict_router.post("/predict_phishing")
def predict_phishing(request: TextRequest):
    if not request.text:
        raise HTTPException(status_code=400, detail="No text provided")
    
    text_vectorized = vectorizer_phishing.transform([request.text])
    prediction = model_phishing.predict(text_vectorized)
    result = "Phishing" if prediction[0] == 1 else "Not Phishing"
    return {"prediction": result, "details": prediction.tolist()}