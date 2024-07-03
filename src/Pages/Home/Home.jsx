import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import ComprehensiveCare from "./Components/ComprehensiveCare";
import Soultions from "./Components/Soultions";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <ComprehensiveCare></ComprehensiveCare>
      <Soultions></Soultions>
    </div>
  );
};

export default Home;
