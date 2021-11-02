const express = require("express");
const router = express.Router();
const knex = require("../database");

//************ Returns all reviews ************
router.get("/", async (request, response) => {
  try {
    const reviewsTitles = await knex("reviews");
    response.json(reviewsTitles);
  } catch (error) {
    throw error;
  }
});

//************ Adds a new review ************
router.post("/", async (request, response) => {
  try {
    const insertReview = await knex("reviews").insert(request.body);
    response.json(insertReview);
  } catch (error) {
    throw error;
  }
});

//************ Returns review by id ************
router.get("/:id", async (request, response) => {
  try {
    const mealsId = Number(request.params.id);
    const matchingReviews = await knex("reviews")
      .select("*")
      .where("id", mealsId);
    response.json(matchingReviews);
  } catch (error) {
    throw error;
  }
});

//************ Updates the review by id ************
router.put("/:id", async (request, response) => {
  try {
    const mealsId = Number(request.params.id);
    const updatingReviews = await knex("reviews")
      .where("id", mealsId)
      .update(request.body);
    response.json(updatingReviews);
  } catch (error) {
    throw error;
  }
});

//************ Deletes the review by id ************
router.delete("/:id", async (request, response) => {
  try {
    const mealsId = Number(request.params.id);
    const updatingReviews = await knex("reviews").where("id", mealsId).delete();
    response.json(updatingReviews);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
