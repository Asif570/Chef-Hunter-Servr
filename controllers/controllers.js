import AllChef from "../data/chef.data.js";
import AllFood from "../data/food.data.js";
export const ChefController = (_req, res) => {
  res.status(200).send(AllChef);
};
export const FoodController = (_req, res) => {
  res.status(200).send(AllFood);
};
export const FoodControllerById = (req, res) => {
  const Id = req.params.id;
  const data = AllFood.find((item) => item.id == Id);
  res.status(200).send(data);
};
export const ChefControllerById = (req, res) => {
  const Id = req.params.id;
  const data = AllChef.find((item) => item.id == Id);
  res.status(200).send(data);
};
