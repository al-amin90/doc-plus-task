import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import ComprehensiveCare from "./Components/ComprehensiveCare";
import Soultions from "./Components/Soultions";
import Service from "./Components/Service";
import Appointment from "./Components/Appointment";
import Faq from "./Components/Faq";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import backgroundImage from "../../assets/back3.png";
import backgroundImage2 from "../../assets/back4.png";

const Home = () => {
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Navbar></Navbar>
        <Banner></Banner>
        <ComprehensiveCare></ComprehensiveCare>
      </div>
      <Soultions></Soultions>
      <Service></Service>
      <Testimonial></Testimonial>
      <div
        className="bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${backgroundImage2})`,
          backgroundPosition: "bottom",
        }}
      >
        <Faq></Faq>
        <Appointment></Appointment>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
