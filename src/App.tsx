

import Navbar from "./components/layouts/Navbar";
import Hero from "./components/layouts/Hero";
import Section1 from "./components/sections/Section1";
import Section2 from "./components/sections/Section2";
import Section3 from "./components/sections/Section3";
import Section4 from "./components/sections/Section4";
import Section5 from "./components/sections/Section5";
import Section6 from "./components/sections/Section6";
import Section7 from "./components/sections/Section7";
import Section8 from "./components/sections/Section8";
import Section9 from "./components/sections/Section9";
import Footer from "./components/layouts/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-black flex justify-center">
      {/* Centered page - black gutters show on zoom-out like Image 2 */}
      <div className="w-[100%] max-w-[1400px] bg-white min-h-screen flex flex-col">
        <Navbar />
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Footer />
      </div>
    </div>
  );
};

export default App