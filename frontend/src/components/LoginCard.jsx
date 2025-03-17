"use client";
import React, { useState } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

const LoginCard = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.detail || "Login failed");
      }

      // Successful login - redirect to admin dashboard
      router.push("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col bg-[#E7FDFF] shadow-lg rounded-xl p-7 max-w-sm text-center">
      <div className="flex flex-col items-center">
        <img src="/User.png" alt="Admin" className="w-12 h-12 mb-2" />
        <h2 className="text-teal-700 font-bold text-xl mb-4">Admin</h2>
      </div>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          required
          className="w-full border-b-2 p-2 text-gray-700 outline-none"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full border-b-2 p-2 text-gray-700 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="hover:cursor-pointer"
        >
          {isLoading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
};

export default LoginCard;