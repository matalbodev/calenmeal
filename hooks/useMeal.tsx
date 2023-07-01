import { CalendarMealForQuery, MealTime } from "#root/types/meal.types";
import { useState } from "react";

export { useMeal };

function useMeal({ day }: { day: Date }) {
  const [mealState, setMealState] = useState<CalendarMealForQuery>({
    date: day,
    relatedMeal: {
      name: "",
      mealTime: MealTime.Breakfast,
      ingredients: [],
    },
  });

  const changeMealTime = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as MealTime;
    setMealState((prevState) => {
      const meal = prevState.relatedMeal;
      meal.mealTime = value;
      return prevState;
    });
  };
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMealState((prevState) => {
      const meal = prevState.relatedMeal;
      meal.name = e.target.value
      return prevState;
    });
  };
  return {
    mealState,
    setMealState,
    changeMealTime,
    changeName,
  };
}
