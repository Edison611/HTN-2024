import React, { useState, useEffect } from "react";
import im5 from "../assets/im5.png";
const UrgencySlider = (urgency) => {
    console.log(urgency)
    const [urgencyLevel, setUrgencyLevel] = useState(0); // Default level, e.g., Moderate
    console.log(urgencyLevel)   
    useEffect(() => {
        if (urgency.urgency === "Trivial") {
            setUrgencyLevel(0);
        } else if (urgency.urgency === "Low Priority") {
            setUrgencyLevel(1);
        } else if (urgency.urgency === "Moderate") {
            setUrgencyLevel(2);
        } else if (urgency.urgency === "High Priority") {
            setUrgencyLevel(3);
        } else if (urgency.urgency === "Critical") {
            setUrgencyLevel(4);
        }
    }, [urgency]);
    // Urgency levels and their associated styles
    const urgencyStyles = [
      { label: "Trivial", bgColor: "bg-green-500", img: {} },
      { label: "Low Priority", bgColor: "bg-blue-500", img: {} },
      { label: "Moderate", bgColor: "bg-yellow-500", img: {}},
      { label: "High Priority", bgColor: "bg-orange-500", img: {} },
      { label: "Critical", bgColor: "bg-red-500", img: im5 },
    ];
  
    return (
      <div className="p-6 rounded-lg shadow-xl max-w-lg mx-auto bg-gray-900 text-white">
        {/* Slider */}
        <input
          type="range"
          min="0"
          max="4"
          value={urgencyLevel}
          className={`slider w-full h-2 ${urgencyStyles[urgencyLevel].bgColor} rounded-full appearance-none`}
        />
  
        {/* Urgency indicator */}
        <div
          className={`mt-6 h-16 rounded-lg transition duration-500 ease-in-out ${urgencyStyles[urgencyLevel].bgColor}`}
        />
       <img className="mx-auto" src={urgencyStyles[urgencyLevel].img} alt="" />

      </div>
    );
  };
  

const Form = () => {
  const [task, setTask] = useState("");
//   const [mood, setMood] = useState("");
  let [results, setResults] = useState(null);
  const [type, setType] = useState(""); // State to handle type
  const [loading, setLoading] = useState(false); // State to handle loading

  function submit(e) {
    e.preventDefault(); // Prevent page reload on form submission
    setLoading(true); // Start loading

    fetch("http://localhost:5000/excuse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: task,
        type_of_res: type,
        // mood: mood,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResults(data); // Set API response to results
        setLoading(false); // Stop loading
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
        setLoading(false); // Stop loading on error
      });
  }

//   results = {response: "I'm sorry, I can't do that Dave.", urgency: "Critical"};

  return (
    <div >
      <form 
        className="bg-gray-800 p-10 px-80 rounded-lg shadow-lg space-y-4"
        onSubmit={submit}
      >
        <div className="flex flex-col">
          <label htmlFor="task" className="mb-2 font-bold">Task:</label>
          <input
            type="text"
            id="task"
            placeholder="Enter your task here..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="p-2 rounded bg-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="type" className="mb-2 font-bold">Type:</label>
          {/* <input
            type="text"
            id="mood"
            placeholder="Enter your mood here..."
            value={type}
            onChange={(e) => setMood(e.target.value)}
            className="p-2 rounded bg-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
          /> */}
          <select
          id="type"
          value={type} // Correct the value prop
          onChange={(e) => setType(e.target.value)} // Correct the state setter
          className="p-2 rounded bg-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
        >
          <option className="text-black" value="">Select a type</option>
          <option className="text-black" value="absurd">Absurd</option>
          <option className="text-black" value="scientific">Scientific</option>
          <option className="text-black" value="emotional">Emotional</option>
        </select>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 rounded-lg font-bold text-white hover:bg-indigo-500 transition-all"
        >
          Submit
        </button>
      </form>

      {/* Loading State */}
      {loading && (
        <div className="mt-8 text-lg font-bold animate-pulse">
          Loading...
        </div>
      )}

      {/* Display Results after API call */}
      {results && (
        <div>
        <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
          {/* <h3 className="text-xl font-bold mb-4">Returned Data:</h3> */}
          <p className="text-lg">{results.response}</p>
        </div>
        <p className="mt-10 text-3xl text-center">{results.urgency}</p>
        <UrgencySlider urgency={results.urgency} />
        </div>
      )}
    </div>
  );
};

export default Form;
