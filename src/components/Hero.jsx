import React from 'react';
import GetStartedButton from './Button.jsx';


function Hero() {
  return (

  <section className="relative h-screen flex items-center justify-center text-center">
      <div className="relative z-10">
        <h1 className="text-7xl font-extrabold mb-7 text-white text-shadow"> procrasti-NATION</h1>
        <p className="text-2xl mb-6 text-gray-200 text-shadow">your local hub for laziness</p>
        <GetStartedButton link="#features" text="Get Started"/>
      </div>
    </section>
  );
}

export default Hero;
