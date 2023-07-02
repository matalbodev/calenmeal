import { getIngredients } from "../api";
import {Ingredient, IngredientInMeal, IngredientInMealForQuery} from "#root/features/meals/types";
import {PropsWithChildren, createContext, useContext, useState, SetStateAction} from "react";
import { useQuery } from "react-query";



interface UseIngredientsForMeal {
  ingredients: Ingredient[];
  selectedIngredients: IngredientInMeal[];
  addIngredient: ({ ingredient, quantity }: { ingredient: Ingredient; quantity: number }) => void;
  removeIngredient: (ingredient: Ingredient) => void;
}

const IngredientsForMealContext = createContext<UseIngredientsForMeal>({
  ingredients: [],
  selectedIngredients: [],
  addIngredient: () => console.log("addIngredient"),
  removeIngredient: () => console.log("removeIngredient"),
});

const IngredientsForMealProvider = ({ children }: PropsWithChildren) => {
  const { data : ingredients, error, isLoading } = useQuery("ingredients", getIngredients);
  const [selectedIngredients, setSelectedIngredients] = useState<IngredientInMeal[]>([]);
  const addIngredient = ({ ingredient, quantity }: { ingredient: Ingredient; quantity: number }) => {
    const newIngredient : IngredientInMeal = {
      _ingredient: ingredient,
      relation: `/ingredients/${ingredient.id}`,
      quantity: quantity,
    };
    if (selectedIngredients.find((el) => el._ingredient.id === ingredient.id)) return;
    setSelectedIngredients((prevState: IngredientInMeal[]) => [...prevState, newIngredient]);
  };

  const removeIngredient = (ingredient: Ingredient) => {
    setSelectedIngredients((prevState) =>
      prevState.filter((prevIngredient) => prevIngredient._ingredient.id !== ingredient.id)
    );
  };

  return <IngredientsForMealContext.Provider value={{ ingredients, selectedIngredients, addIngredient, removeIngredient }}>{children}</IngredientsForMealContext.Provider>;
};

const useIngredientContext = () => {
  const context = useContext(IngredientsForMealContext);
  return context;
};


export { IngredientsForMealProvider, useIngredientContext };
