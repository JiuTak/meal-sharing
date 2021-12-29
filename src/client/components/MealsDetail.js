import React, { useState, useEffect, useContext } from "react";
import Meals from "../../pages/Meals";
import { useMeals } from "../contexts/MealsContext";
import MenuMeal from "./MenuMeal";
import ReservationForm from "./ReservationForm";

function MealsDetail({ match }) {
  const [meal, setMeal] = useState({});
  const [showReservation, setShowReservation] = useState(false);

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
    <div style={{ padding: "3rem" }}>
      <div className="individual-meal">
        <MenuMeal meal={meal} />
        <button
          className="add-meal-reservation"
          onClick={() => {
            setShowReservation(true);
          }}
        >
          Book this meal
        </button>
        {showReservation && <ReservationForm meal_id={match.params.id} />}
      </div>
    </div>
  );
}

export default MealsDetail;
