import React from "react";
import Banner from "../../Components/Modal/Banner";
import Services from "../../Components/Modal/Services";
import Testimonials from "../../Components/Modal/Testimonials";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Banner />
      <Services />
      <Testimonials />
    </div>
  );
};

export default Home;
