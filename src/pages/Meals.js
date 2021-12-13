import React from "react";
import MealsList from "../client/components/MealsList";

function Meals() {
  return (
    <div className="main-page">
      <h1>Sharing your meal</h1>
      <MealsList></MealsList>
    </div>
  );
}

export default Meals;
