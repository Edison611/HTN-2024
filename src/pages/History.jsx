import React, { useEffect, useState } from "react";

const backgroundImageStyle = {
  backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/036/223/015/large_2x/ai-generated-universe-galaxy-wallpaper-star-particle-motion-on-black-background-starlight-nebula-in-galaxy-at-universe-space-background-ai-generated-free-photo.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
  width: '100%',
  overflow: 'hidden',
};

const HistoryPage = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the history of prompts and answers for the user
    fetch(`http://localhost:5000/history`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch history data");
        }
        return response.json();
      })
      .then((data) => {
        setHistory(data.history);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-transparent border-purple-500"></div>
        <span className="ml-2 text-white">Loading...</span>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div style = {backgroundImageStyle}>
    <div className=" text-white p-8 text-shadow">
      <h1 className="text-5xl font-bold mt-10 mb-10 text-shadow text-center">user excuse history</h1>

      {history.length === 0 ? (
        <p className="text-center">No history found for this user.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left bg-gray-800 rounded-lg">
            <thead>
              <tr className="bg-blue">
                <th className="px-4 py-2">Task</th>
                <th className="px-4 py-2">Excuse</th>
                <th className="px-4 py-2">Urgency</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {history.map((entry, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="px-4 py-2">{entry.task}</td>
                  <td className="px-4 py-2">{entry.response}</td>
                  <td className="px-4 py-2">{entry.urgency}</td>
                  <td className="px-4 py-2">{entry.date}</td>

                </tr>
              ))}
            </tbody>
          </table>

        </div>
      )}
    </div>
    </div>
  );
};

export default HistoryPage;
