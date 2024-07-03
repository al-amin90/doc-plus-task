import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import ComprehensiveCare from "./Components/ComprehensiveCare";
import Soultions from "./Components/Soultions";
import Service from "./Components/Service";
import Appointment from "./Components/Appointment";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <ComprehensiveCare></ComprehensiveCare>
      <Soultions></Soultions>
      <Service></Service>
      <Appointment></Appointment>
    </div>
  );
};

export default Home;
