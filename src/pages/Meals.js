import React from "react";
import { useMeals } from "../client/components/MealsContext";

function Meals() {
  const { meals, error, isLoaded } = useMeals();
  console.log(meals);

  const newMeals = [...meals];

  // newMeals.map( (meal) => {
  //     if (meal.max_number_of_guests > meal.reserved) {

  //     }
  // })
  return (
    <div>
      {isLoaded ? (
        <div>loading...</div>
      ) : error ? (
        <div> {error} </div>
      ) : (
        newMeals.map((meal) => {
          return (
            <div key={meal.id} className="meals-container">
              <h4>{meal.title}</h4>
              <h6>{meal.description}</h6>
              <h6>{meal.max_reservations}</h6>
              <h6>{meal.price}</h6>
              <h6>{meal.when_date.toLocaleString()}</h6>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Meals;
