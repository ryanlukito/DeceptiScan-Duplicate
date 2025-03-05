import { NextResponse } from "next/server";
import dotenv from "dotenv";

dotenv.config();

export const POST = async (req) => {
  const { text } = await req.json();
  const model_url = process.env.BACKEND_HOST;

  try {
    const response = await fetch(`${model_url}/api/predict/predict_spam`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ detail: data.detail || response.statusText }, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error predicting phishing:", error);
    return NextResponse.json({ detail: "Failed to connect to backend service" }, { status: 500 });
  }
};