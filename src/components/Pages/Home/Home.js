import React, { useEffect } from "react";

import Career from "../Career/Career";

import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "./Carousel/Banner";
import FAQ from "./FAQ/FAQ";
import Feature from "./Feature/Feature";
import Partner from "./Partners/Partners";
import Trends from "./Trends/Trends";


const Home = () => {
  //Dynamic Title
  useEffect(() => {
    document.title = "Home | Hopewell Hospital";
  }, []);

  return (

    <>
      <Navbar />
      <Banner />
      <Feature />
      <FAQ />
      <Trends />
      <Partner />
      <Footer />
    </>

  );
};

export default Home;
