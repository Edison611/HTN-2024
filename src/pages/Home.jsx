import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';
import star from "../assets/star.png";


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

function Home() {

  return (
    <div style={backgroundImageStyle}>
      <header className="py-6 px-10 flex justify-between items-center">
      </header>
      <main className="flex-grow">
        <Hero />
        <Features />
      </main>
      
      <Footer />
    </div>
  );
}


export default Home;
