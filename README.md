# DeceptiScan

## Web Spam and Phishing Detector

**Senior Project Teknologi Informasi - Kelompok B1_03**

### Team Members

- **Ketua Kelompok**: Rizkita Alisha Ramadhani - 22/494942/TK/54347
- **Anggota 1**: Melvin Waluyo - 22/492978/TK/53972
- **Anggota 2**: Ryan Krishandi Lukito - 22/497249/TK/54488

---

## Project Overview

DeceptiScan is a web-based application designed to detect spam and phishing text using a **Support Vector Machine (SVM)** machine learning model. The project consists of:

- **Frontend**: Built with Next.js for an interactive user experience.
- **Backend**: Developed using FastAPI to handle model inference and API requests.
- **Machine Learning Model**: SVM trained to classify text as spam, phishing, or legitimate.

---

## Features

- **Real-time text classification**
- **User-friendly interface**
- **FastAPI-powered backend**
- **Secure API communication**
- **Efficient SVM-based model for accurate detection**

---

## Tech Stack

### Frontend:

- Next.js
- Tailwind CSS (for styling)
- Axios (for API requests)

### Backend:

- FastAPI
- Scikit-learn (for SVM model)
- Uvicorn (for server deployment)

### Database (if applicable):

- MongoDB / PostgreSQL (optional for logging detected spam/phishing cases)

---

## Installation and Setup

### Prerequisites

Ensure you have the following installed:

- **Node.js** (for Next.js frontend)
- **Python 3.8+** (for FastAPI backend)

### Clone the Repository

```bash
git clone https://github.com/your-repo/deceptiscan.git
cd deceptiscan
```

### Setting Up the Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at `http://localhost:3000`

### Setting Up the Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend will run at `http://localhost:8000`

---

## License

This project is licensed under the MIT License.

---

### 🚀 DeceptiScan - Protecting users from spam and phishing! 🚀
