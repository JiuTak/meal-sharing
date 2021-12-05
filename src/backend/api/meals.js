const express = require("express");
const router = express.Router();
const knex = require("../database");

//************ Return all meals ************
router.get("/", async (request, response) => {
  try {
    const { maxPrice, title, createdAfter, limit, ...misspelled } =
      request.query;

    let knexQuery = knex("meals");

    if (misspelled && Object.keys(misspelled).length === 0) {
      // Get meals that has a price smaller than maxPrice
      if (maxPrice) {
        knexQuery.where("price", "<=", maxPrice);
      }

      // Get meals that partially match a title.
      if (title) {
        knexQuery.where("title", "like", `%${title}%`);
      }

      // Get meals that has been created after the date
      if (createdAfter) {
        knexQuery.where("created_date", ">", createdAfter);
      }

      // 	Only specific number of meals
      if (limit) {
        knexQuery.limit(limit);
      }

      // Correct queries but no data to return
      if (knexQuery < 1) {
        return response.status(404).send("Product dose not exist");
      }

      const results = await knexQuery;

      response.json(results).status(200);
    } else {
      response.send("Please put correct query").status(500);
    }
  } catch (error) {
    response.status(500).json({ error: "Failed to fech data" });
    throw error;
  }
});

//************ Add new meal ************
router.post("/", async (request, response) => {
  try {
    const insertMeal = await knex("meals").insert(request.body);
    response.json(insertMeal);
  } catch (error) {
    throw error;
  }
});

//************ Returns meal by id ************
router.get("/:id", async (request, response) => {
  try {
    const mealsId = Number(request.params.id);
    const matchingMeals = await knex("meals").select("*").where("id", mealsId);
    response.json(matchingMeals);
  } catch (error) {
    throw error;
  }
});

//************ Updates the meal by id ************
router.put("/:id", async (request, response) => {
  try {
    const mealsId = Number(request.params.id);
    const updatingMeals = await knex("meals")
      .where("id", mealsId)
      .update(request.body);
    response.json(updatingMeals);
  } catch (error) {
    throw error;
  }
});

//************ Deletes the meal by id ************
router.delete("/:id", async (request, response) => {
  try {
    const mealsId = Number(request.params.id);
    const updatingMeals = await knex("meals").where("id", mealsId).delete();
    response.json(updatingMeals);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
