// import ButtonGradient from "./assets/svg/ButtonGradient";
// import Benefits from "./components/Benefits";
// import Collaboration from "./components/Collaboration";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Hero from "./src/components/Hero";
// import Pricing from "./components/Pricing";
// import Roadmap from "./components/Roadmap";
// import Services from "./components/Services";
import {Route, Routes} from 'react-router-dom'

import Home from './pages/Home';

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Excuse from './pages/Excuse';
import HistoryPage from './pages/History';
import LockIn from './pages/Lock-In';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/excuse" element={<Excuse />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/lock-in" element = {<LockIn />}/>
      </Routes>
    {/* <Timer initialTime={120} />  */}
    </div>
  )
  // return (
  //   <>
  //     <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
  //       {/* <Header /> */}
  //       {/* <Hero />
  //       <Benefits />
  //       <Collaboration />
  //       <Services />
  //       <Pricing />
  //       <Roadmap />
  //       <Footer /> */}
  //     </div>

  //     <ButtonGradient />
  //   </>
  // );
};

export default App;