import React from 'react';
import GetStartedButton from './Button';

function Features() {
  return (
    <section id="features" className="py-20 px-10">
      <h2 className="text-4xl font-bold text-center text-white text-shadow" >features for future you</h2>
      <p className="text-md mb-6 text-gray-200 text-center text-shadow">(because you'll probably get to this later)</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-lg shadow-lg bg-blue/70" >
          <h3 className="text-2xl font-semibold mb-2 text-white text-shadow">excuses</h3>
          <p className="text-gray-200 text-shadow mb-4">Let's be honest, sometimes you need a little inspiration to justify 
          why you’re not quite ready to conquer your to-do list. A well-crafted excuse can be just the thing to ease the guilt and get you back on track with renewed motivation.</p>
          <GetStartedButton link = "/excuse" text = "Give Me An Excuse"/>
        </div>
        <div className="p-6 rounded-lg shadow-lg bg-blue/70">
          <h3 className="text-2xl font-semibold mb-2 text-shadow text-white">your insights</h3>
          <p className="text-gray-200 text-shadow mb-10">Reflect on your unique reasons for putting things off and see
           how your procrastination habits have evolved over time. After all, knowing where you’ve been can help you get where you want to go!</p>
          <GetStartedButton link="/history" text="See My History" />
           
        </div>
        <div className="p-6 rounded-lg shadow-lg bg-blue/70">
          <h3 className="text-2xl font-semibold mb-2 text-white text-shadow">lock in.</h3>
          <p className="text-gray-200 text-shadow mb-10">Fed up with turning ‘I’ll do it later’ into an Olympic sport? Our tips to stop procrastinating are your secret weapon for conquering that to-do 
          list without sacrificing your sanity.</p>
          <GetStartedButton link="/lock-in" text="I'll Try" />
        </div>
      </div>
    </section>
  );
}

export default Features;
