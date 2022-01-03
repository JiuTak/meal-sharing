import React from "react";
import MealsList from "../client/components/MealsList";

function Meals() {
  return (
    <div className="main-page">
      <h1 className="meal-page-h1">Expand your recipe</h1>
      <MealsList></MealsList>
    </div>
  );
}

export default Meals;
