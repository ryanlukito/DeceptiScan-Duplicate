import { NextResponse } from "next/server";
import dotenv from "dotenv";

dotenv.config();

export const POST = async (req) => {
  const { spamresultID, review } = await req.json();
  const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

  try {
    const response = await fetch(`${backend_url}/api/feedback/submit_spam_feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ spamresultID, review }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ detail: data.detail || response.statusText }, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error submitting spam feedback:", error);
    return NextResponse.json({ detail: "Failed to connect to backend service" }, { status: 500 });
  }
};