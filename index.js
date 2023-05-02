import express, { Router } from "express";
import cors from "cors";
import {
  ChefController,
  ChefControllerById,
  FoodController,
  FoodControllerById,
} from "./controllers/controllers.js";
const app = express();
app.use([cors(), express.json()]);
// Routes ===========================
app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: "Server is well",
  });
});
// All Chef router
app.get("/chefs", ChefController);
// All food router
app.get("/foods", FoodController);
// get food by id router
app.get("/foods/:id", FoodControllerById);
// get chef by id router
app.get("/chefs/:id", ChefControllerById);
app.listen(8000, () => {
  console.log("Server is running");
});
