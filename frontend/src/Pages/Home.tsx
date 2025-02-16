import Features from "../Components/Features";
import Footer from "../Components/Footer";

import Navbar from "../Components/Navbar";

import Hero from "../Components/Hero";
import Line from "../Components/Line";

const Home = () => {
  return (
    <div className="bg-black w-screen h-screen overflow-auto text-white">
      <Navbar />
      <Line />
      <Hero />

      <Line />

      <Features />
      <Line />
      <Footer />
    </div>
  );
};
export default Home;
