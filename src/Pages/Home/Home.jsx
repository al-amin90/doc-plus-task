import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import ComprehensiveCare from "./Components/ComprehensiveCare";
import Soultions from "./Components/Soultions";
import Service from "./Components/Service";
import Appointment from "./Components/Appointment";
import Faq from "./Components/Faq";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <ComprehensiveCare></ComprehensiveCare>
      <Soultions></Soultions>
      <Service></Service>
      <Faq></Faq>
      <Appointment></Appointment>
    </div>
  );
};

export default Home;
