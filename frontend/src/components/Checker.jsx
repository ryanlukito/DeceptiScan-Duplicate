"use client";

import React, { useState } from "react";

const Checker = ({ predict_api, feedback_api, title, resultId }) => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedbackSubmitted(false); // Reset feedbackSubmitted state

    const response = await fetch(`/api/predict/${predict_api}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();
    setResult(data);
  };

  const handleFeedback = async (review) => {
    const response = await fetch(`/api/feedback/${feedback_api}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ [resultId]: result[resultId], review }),
    });

    const responseData = await response.json();

    if (response.ok) {
      setFeedbackSubmitted(true);
    } else {
      console.error("Failed to submit feedback", response.status, responseData);
    }
  };

  return (
    <div className="px-4">
      <h1 className="text-[45px] font-poppins mt-[2vw]">
        {`Check for ${title} text messages here!`}
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col mt-[2vw]">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          className="w-[1000px] h-[400px] bg-[#DEF4F6] rounded-[5px] mt-3 text-black px-3 py-2"
          placeholder="Paste the text message you got"
        />
        <button
          type="submit"
          className="w-[151px] h-[55px] bg-[#1A929A] text-[32px] mt-2 rounded-[5px] hover:bg-[#146267] hover:transition ease-in"
        >
          Check
        </button>
      </form>
      {result && (
        <div className="mt-4 p-3 bg-gray-200 rounded text-black">
          <h3 className="font-bold">Prediction Result:</h3>
          <p>{result.prediction}</p>
          <h4 className="font-bold mt-2">Details:</h4>
          <pre>{JSON.stringify(result.details, null, 2)}</pre>
          <div className="flex space-x-4 mt-4">
            {!feedbackSubmitted ? (
              <>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 hover:transition ease-in cursor-pointer"
                  onClick={() => handleFeedback("right")}
                >
                  I think the AI is right 👍
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 hover:transition ease-in cursor-pointer"
                  onClick={() => handleFeedback("wrong")}
                >
                  I think the AI is wrong 👎
                </button>
              </>
            ) : (
              <p>Thank you for your feedback</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Checker;
