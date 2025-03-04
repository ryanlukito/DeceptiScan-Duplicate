from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

model_spam = joblib.load("ml_model/svm_model_spam.joblib")
vectorizer_spam = joblib.load("")
model_phishing = joblib.load("ml_model/svm_model_phishing.joblib")
vectorizer_phishing = joblib.load("")

@app.route("/predict_spam", methods=["POST"])
def predict_spam():
    data = request.json
    text = data.get("text", "")

    if not text: 
        return jsonify({"error": "No text provided"}), 400
    
    text_vectorized = vectorizer_spam.transform([text])

    prediction = model_spam.predict(text_vectorized)

    result = "Spam" if prediction[0] == 1 else "Not Spam"

    return jsonify({"prediction": result})

@app.route("/predict_phishing", methods=["POST"])
def predict_phishing():
    data = request.json
    text = data.get("text", "")

    if not text: 
        return jsonify({"error": "No text provided"}), 400
    
    text_vectorized = vectorizer_phishing.transform([text])

    prediction = model_phishing.predict(text_vectorized)

    result = "Phising" if prediction[0] == 1 else "Not Phising"

    return jsonify({"prediction": result})

if __name__ == "__main__":
    app.run(debug=True)