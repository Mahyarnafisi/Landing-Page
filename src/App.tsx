import "./App.css";
import HeroSection from "./Hero Section/HeroSection";
import Marquess from "./Layouts/Marquee/Marquess";
import Navbar from "./Layouts/Navbar/Navbar";
import HomeConnecting from "./Pages/Home/Layouts/HomeConnecting/HomeConnecting";
import HomeIntro from "./Pages/Home/Layouts/HomeIntro/HomeIntro";
import PerfectMatch from "./Pages/Home/Layouts/PerfectMatch/PerfectMatch";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <Marquess />
      <HomeIntro />
      <HomeConnecting />
      <PerfectMatch />

      <div className="shapeBg--1">&nbsp;</div>
      <div className="shapeBg--2">&nbsp;</div>
    </div>
  );
}

export default App;
