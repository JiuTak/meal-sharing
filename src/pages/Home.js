import React from "react";
import { Link } from "react-router-dom";
import mainPic from "../client/assets/images/2021-12-06 20_24_52-Assorted korean pickled food and chopsticks on gray background Stock Photo _ Ado.png";

function Home() {
  return (
    <div className="main-page">
      <h1 className="homeH1">MealSharing</h1>
      <img src={mainPic} />
    </div>
  );
}

export default Home;
