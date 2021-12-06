import React from "react";
import { useMeals } from "../contexts/MealsContext";
import { Link } from "react-router-dom";
import MenuMeal from "./MenuMeal";

function MealsList() {
  const { meals, error, isLoaded } = useMeals();
  console.log(meals);

  const newMeals = [...meals];

  return (
    <div>
      {isLoaded ? (
        <div>loading...</div>
      ) : error ? (
        <div> {error} </div>
      ) : (
        newMeals.map((meal) => {
          return (
            <ul
              key={meal.id}
              className="meals-container"
              style={{ listStyle: "none", border: "none" }}
            >
              <li key={meal.id}>
                <Link to={`/meals/${meal.id}`}>
                  <MenuMeal meal={meal} />
                </Link>
              </li>
            </ul>
          );
        })
      )}
    </div>
  );
}

export default MealsList;
