import React, { useState } from 'react';

const quotes = [
  "I love deadlines. I like the whooshing sound they make as they fly by. – Douglas Adams",
  "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
  "Don’t wait. The time will never be just right. – Napoleon Hill",
  "Success is the sum of small efforts, repeated day-in and day-out. – Robert Collier",
  "Your limitation—it’s only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
//   “Sometimes, things may not go your way, but the effort should be there every single night.” –Michael Jordan,
  "Dream it. Wish it. Do it.",
];

const resources = [
  { text: "How to Beat Procrastination 🔗", link: "https://academicsupport.jhu.edu/resources/study-aids/overcoming-procrastination/" },
  { text: "The Pomodoro Technique 🔗", link: "https://www.forbes.com/sites/bryancollinseurope/2020/03/03/the-pomodoro-technique/" },
  { text: "Why You're A Chronic Procrastinator 🔗", link: "https://www.nytimes.com/2019/03/25/smarter-living/why-you-procrastinate-it-has-nothing-to-do-with-self-control.html" },
  { text: "Eat the Frog (trust us) 🔗", link: "https://asana.com/resources/eat-the-frog" },
];

// Background image style
const backgroundImageStyle = {
  backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/036/223/015/large_2x/ai-generated-universe-galaxy-wallpaper-star-particle-motion-on-black-background-starlight-nebula-in-galaxy-at-universe-space-background-ai-generated-free-photo.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
  width: '100%',
  overflow: 'hidden',
};

const LockIn = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col justify-center items-center" style = {backgroundImageStyle}>
      <h1 className="text-6xl font-bold text-shadow">okay fine, let's lock in.</h1>
      {/* Display a Random Productivity Quote */}
      <div className="bg-gray-800 border-l-8 border-blue p-3 my-8 rounded-lg shadow-lg">
        <blockquote className="text-xl italic text-white text-shadow">
          "{quote}"
        </blockquote>
        <button
          onClick={getNewQuote}
          className="mt-4 px-4 py-2 bg-blue rounded-lg text-white hover:bg-neonBlue transition-all"
        >
          Inspire Me Again!
        </button>
      </div>

      {/* Links to helpful productivity resources */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-xl" >
        <h2 className="text-2xl font-bold mb-4">procrastinate by reading up on procrastination</h2>
        <ul className="space-y-6">
          {resources.map((resource, index) => (
            <li key={index}>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-blue rounded-lg text-white hover:bg-neonBlue transition-all"
              >
                {resource.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LockIn;
