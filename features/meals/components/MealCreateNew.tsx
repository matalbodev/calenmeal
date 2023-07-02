import { postMeal } from "#root/features/meals/api";
import { Button } from "#root/features/commons/components/Button";
import { useIngredientContext } from "#root/features/ingredients/hooks/useIngredient";
import { CalendarMealForQuery } from "#root/features/meals/types";
import { FormatDate } from "#root/utils/date";
import { FC } from "react";

const MealCreateNew: FC<{
  mealState: CalendarMealForQuery;
}> = ({ mealState }) => {
  const { selectedIngredients } = useIngredientContext();
  const handlePostMeal = async () => {
    const meal = mealState.relatedMeal;
    meal.ingredients = selectedIngredients.map((el) => {
      const { _ingredient, ...rest } = el; // eslint-disable-line
      return rest;
    });
    const body: CalendarMealForQuery = {
      ...mealState,
    };
    const res = await postMeal(body);
    if (res.name) {
      window.history.pushState({}, "", `/?date=${FormatDate(mealState.date, "YYYY-MM-DD")}`);
      window.dispatchEvent(new Event("popstate"));
    }
  };
  return (
    <Button markup="button" type="button" color="secondary" onClick={handlePostMeal} isFull>
      Save
    </Button>
  );
};

export { MealCreateNew };
