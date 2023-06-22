import { TitleBar } from "#root/components/commons/TitleBar";
import { useDayContext } from "#root/renderer/useDayContext";
import { IngredientSearch } from "#root/components/features/ingredient/IngredientsSearch";
import { Input } from "#root/components/commons/Input";
import { IngredientsForMealProvider } from "#root/hooks/useIngredient";
import { useMeal } from "#root/hooks/useMeal";
import { IngredientsSelected } from "#root/components/features/ingredient/IngredientsSelected";
import { MealCreateNew } from "#root/components/features/meal/MealCreateNew";

export { Page };

function Page() {
  const { day } = useDayContext();
  const { mealState, changeMealTime, changeName } = useMeal({
    day: day.date,
  });

  return (
    <IngredientsForMealProvider>
      <TitleBar title={`Add a new meal on ${day.dayMonth}`} />
      <div id="content">
        <div className="form-wrap">
          <label htmlFor="name">Name</label>
          <Input onChange={changeName} type="text" name="name" id="name" placeholder="name" isFull />
        </div>
        <div className="form-wrap">
          <label>Meal time</label>
          <div className="select-wrap">
            <select className="select" onChange={changeMealTime}>
              {[
                {
                  value: "breakfast",
                  label: "Breakfast",
                },
                {
                  value: "lunch",
                  label: "Lunch",
                },
                {
                  value: "dinner",
                  label: "Dinner",
                },
              ].map((option: { value: string; label: string }) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <IngredientSearch />
        <IngredientsSelected />
      </div>
      <MealCreateNew mealState={mealState} />
    </IngredientsForMealProvider>
  );
}
