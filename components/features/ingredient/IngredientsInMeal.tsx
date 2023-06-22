import { Ingredient } from "#root/types/meal.types";
import { FC } from "react";

export { IngredientsInMeal };

const IngredientsInMeal: FC<{
  ingredients: Ingredient[];
  addIngredient: ({
    ingredient,
    quantity,
  }: {
    ingredient: Ingredient;
    quantity: number;
  }) => void;
  removeIngredient: (ingredient: Ingredient) => void;
}> = ({ ingredients, addIngredient, removeIngredient }) => {

  return <>
    bonjour ingredients
  </>
};