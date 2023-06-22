import { Meal, MealTime } from "#root/types/meal.types";
import { useState } from "react";

export { useMeal };

function useMeal({ day }: { day: Date }) {
  const [mealState, setMealState] = useState<Meal>({
    name: "",
    date: day,
    mealTime: MealTime.Breakfast,
    ingredients: [],
  });

  const changeMealTime = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as MealTime;
    setMealState((prevState) => {
      prevState.mealTime = value;
      return prevState;
    });
  };
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMealState((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };
  return {
    mealState,
    setMealState,
    changeMealTime,
    changeName
  };
}
