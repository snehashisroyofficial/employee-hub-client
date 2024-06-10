import React from "react";
import Banner from "../../Components/Modal/Banner";
import Services from "../../Components/Modal/Services";
import Testimonials from "../../Components/Modal/Testimonials";
import Portfolio from "../../Components/Modal/Portfolio";
import Faq from "../../Components/Modal/Faq";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-4  ">
      <Helmet>
        <title>Employee Hub - Employee Management Portal</title>
      </Helmet>
      <Banner />
      <Services />
      <Testimonials />
      <Portfolio />
      <Faq />
    </div>
  );
};

export default Home;
