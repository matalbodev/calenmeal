import { postMeal } from "#root/api/meal";
import { Button } from "#root/components/commons/Button";
import { useIngredientContext } from "#root/hooks/useIngredient";
import { MealForQuery } from "#root/types/meal.types";
import { FC } from "react";

const MealCreateNew: FC<{
  mealState: MealForQuery;
}> = ({ mealState }) => {
  const { selectedIngredients } = useIngredientContext();
  const handlePostMeal = async () => {
    const body: MealForQuery = {
      ...mealState,
      ingredients: selectedIngredients.map((el) => {
        const { _ingredient, ...rest } = el; // eslint-disable-line
        return rest;
      }),
    };
    await postMeal(body);
  };
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Button markup="button" type="button" color="primary" onClick={handlePostMeal}>
        Save
      </Button>
    </div>
  );
};

export { MealCreateNew };
