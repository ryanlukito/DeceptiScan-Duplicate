import React from "react";

const CheckerResponse = ({ result, feedbackSubmitted, handleFeedback }) => {
  return (
    <div className="w-[55.885vw] h-[12.812vw] flex flex-col items-start justify-center text-black mt-[1vw]">
      <div className="w-full h-[6.094vw] border border-black rounded-[0.26vw] p-[1vw] shadow-lg">
        <div className="text-[1.25vw] italic">
          <h1>
            Your message has been identified as{" "}
            {result.details[0][1] > 0.5
              ? `${parseFloat((result.details[0][1] * 100).toFixed(2))}% ${
                  result.prediction
                }`
              : ` ${parseFloat((result.details[0][0] * 100).toFixed(2))}% ${
                  result.prediction
                }`}
            {`\u00A0`}
            based on our AI Analysis
          </h1>
        </div>
      </div>
      <h1 className="text-[1.25vw] mt-[0.5vw]">
        Do you think that our DeceptiScan AI gave you the correct answer?
      </h1>
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
  );
};

export default CheckerResponse;
