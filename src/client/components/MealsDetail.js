import React, { useState, useEffect, useContext } from "react";
import Meals from "../../pages/Meals";
import MenuMeal from "./MenuMeal";

function MealsDetail({ match }) {
  const [meal, setMeal] = useState({});
  console.log(meal, "meal");

  useEffect(() => {
    fetchMeal();
  }, []);

  const fetchMeal = async () => {
    const fetchMeal = await fetch(`/api/meals/${match.params.id}`);
    const meal = await fetchMeal.json();
    setMeal(meal[0]);

    console.log(meal);
    console.log(meal.title);
  };

  return (
    <div>
      {/* <h1> Individual meal</h1> */}
      <MenuMeal
        meal={meal}
        className="meals-detail"
        style={{ color: "green" }}
      />
    </div>
  );
}

export default MealsDetail;
