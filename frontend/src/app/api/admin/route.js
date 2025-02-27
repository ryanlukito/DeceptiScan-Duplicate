import { NextResponse } from "next/server"
import dotenv from "dotenv"

dotenv.config()

export const POST = async (req) => {
  const adminData = await req.json()
  
  try {
    const res = await fetch(`${process.env.BACKEND_HOST}/api/admin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(adminData)
    })
    
    const data = await res.json()
    
    if (!res.ok) {
      return NextResponse.json({ detail: data.detail || res.statusText }, {status: res.status})
    }
    
    return NextResponse.json(data, {status: 201, statusText: 'Created'})
  } catch (error) {
    console.error("Error creating admin:", error)
    return NextResponse.json({ detail: "Failed to connect to backend service" }, {status: 500})
  }
}