from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from pydantic import BaseModel
import joblib
import os

app = FastAPI()
load_dotenv()

web_url = os.getenv("WEB_URL")
print(web_url)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[web_url],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

model_spam = joblib.load("ml_model/svm_model_spam.joblib")
vectorizer_spam = joblib.load("ml_model/svm_vectorizer_spam.joblib")
model_phishing = joblib.load("ml_model/svm_model_phishing.joblib")
vectorizer_phishing = joblib.load("ml_model/svm_vectorizer_phishing.joblib")

class TextRequest(BaseModel):
    text: str

@app.post("/predict_spam")
def predict_spam(request: TextRequest):
    if not [request.text]:
        raise HTTPException(status_code=400, detail="No text provided")
    
    text_vectorized = vectorizer_spam.transform([request.text])

    prediction = model_spam.predict(text_vectorized)

    result = "Spam" if round(prediction[0]) == 1 else "Not Spam"

    return {"prediction": result, "details": prediction.tolist()}

@app.post("/predict_phishing")
def predict_phishing(request: TextRequest):
    if not {request.text}:
        raise HTTPException(status_code=400, detail="No text provided")
    
    text_vectorized = vectorizer_phishing.transform([request.text])

    prediction = model_phishing.predict(text_vectorized)

    result = "Phishing" if prediction[0] == 1 else "Not Phishing"

    return {"prediction": result, "details": prediction.tolist()}

# if __name__ == "__main__":
#     app.run(debug=True)