# DeceptiScan Backend

This is the backend server for the DeceptiScan project, a web-based platform for detecting spam and phishing attempts.
Built with [FastAPI](https://fastapi.tiangolo.com/)

## Features

- User authentication and authorization
- Spam detection API
- Phishing URL detection API
- Database management for user data and analysis results

## Requirements

- Python 3.7+
- PostgreSQL database

## Setup

1. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Copy `.env.example` to `.env.development` and configure your environment variables:
   ```bash
   cp .env.example .env.development
   ```
4. Set up the database:
   ```bash
   alembic upgrade head
   ```

## Environment Variables

Create a `.env.development` file with the following variables:

```
PG_CONNECTION="postgresql://username:password@host/database"
SECRET="your_jwt_secret_key"
ALGORITHM="HS256"
ACCESS_TOKEN_EXPIRE_MINUTES=60
```

## Running the Server

To run the development server:

```bash
uvicorn main:app --reload
```

The API will be available at [http://localhost:8000](http://localhost:8000)

## API Documentation

When the server is running, you can access the API documentation at:

- [Swagger UI](http://localhost:8000/docs)
- [ReDoc](http://localhost:8000/redoc)
