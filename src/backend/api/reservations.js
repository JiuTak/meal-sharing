const express = require("express");
const router = express.Router();
const knex = require("../database");

// let knexQuery = knex("reservations");

//************ Returns all reservations ************

router.get("/", async (request, response) => {
  try {
    const reservations = await knex("reservations").select("*");
    response.json(reservations);
  } catch (error) {
    response.status(500).end();
    throw error;
  }
});

//************ Adds a new reservation ************
router.post("/", async (request, response) => {
  try {
    // need to check if it is available to book

    const checkIfAvailable = await knex("meals")
      .join("reservations", "meals.id", "reservations.meal_id")
      .select(
        "reservations.meal_id",
        "meals.id",
        "meals.title",
        "meals.max_reservations",
        "reservations.number_of_guests"
      )
      .sum("reservations.number_of_guests")
      .groupBy("meals.id")
      .having(
        knex.raw("max_reservations > sum(`reservations`.`number_of_guests`)")
      );
    // .where("meals.id", "reservations.meal_id");
    response.json(checkIfAvailable);

    //inserting reservation without checking max number of quests
    const insertReservation = await knex("reservations").insert(request.body);
    response.json(insertReservation).status(200);
  } catch (error) {
    throw error;
  }
});

//************ Returns reservation by id ************
router.get("/:id", async (request, response) => {
  try {
    const mealsId = Number(request.params.id);
    const matchingReservations = await knex("reservations")
      .select("*")
      .where("id", mealsId);
    response.json(matchingReservations).status(200);
  } catch (error) {
    throw error;
  }
});

//************ Updates the reservation by id ************
router.put("/:id", async (request, response) => {
  try {
    const mealsId = Number(request.params.id);
    const updatingReservations = await knex("reservations")
      .where("id", mealsId)
      .update(request.body);
    response.json(updatingReservations).status(200);
  } catch (error) {
    throw error;
  }
});

//************ Deletes the reservation by id ************
router.delete("/:id", async (request, response) => {
  try {
    const mealsId = Number(request.params.id);
    const updatingReservations = await knex("reservations")
      .where("id", mealsId)
      .delete();
    response.json(updatingReservations).status(200);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
