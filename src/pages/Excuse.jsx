import Form from "../components/form.jsx";
import './excuse.css'; // Import the updated CSS for the cute starry background
import React from 'react';


export default function Excuse() {
  return (
    <div style = {backgroundImageStyle} className="cuteBackground min-h-screen flex flex-col items-center justify-center text-white px-4 relative">
      <h1 className="text-6xl font-bold mt-2 mb-10 text-shadow">excuse engine</h1>
      <Form /> {/* Reuse the styled Form component */}
    </div>
    
  );
}

const backgroundImageStyle = {
  backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/036/223/015/large_2x/ai-generated-universe-galaxy-wallpaper-star-particle-motion-on-black-background-starlight-nebula-in-galaxy-at-universe-space-background-ai-generated-free-photo.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
  width: '100%',
  overflow: 'hidden',
};
