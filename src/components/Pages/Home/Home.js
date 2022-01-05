import React, { useEffect } from "react";
import Career from "../Career/Career";

const Home = () => {
  //Dynamic Title
  useEffect(() => {
    document.title = "Home | Hopewell Hospital";
  }, []);

  return (
    <div>
      
      <Career/>
    </div>
  );
};

export default Home;
