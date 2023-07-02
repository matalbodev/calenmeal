import { TitleBar } from "#root/features/commons/components/TitleBar";
import { IngredientSearch } from "#root/features/ingredients/components/IngredientsSearch";
import { Input } from "#root/features/commons/components/Input";
import { IngredientsForMealProvider } from "#root/features/ingredients/hooks/useIngredient";
import { useMeal } from "#root/features/meals/hooks/useMeal";
import { IngredientsSelected } from "#root/features/ingredients/components/IngredientsSelected";
import { MealCreateNew } from "#root/features/meals/components/MealCreateNew";
import useDate from "#root/features/calendar/hooks/useDate";
import { LayoutDefault as Layout } from "#root/layouts/LayoutDefault";

export { Page };

function Page() {
  const { day, dayReadable } = useDate();
  const { mealState, changeMealTime, changeName } = useMeal({
    day: day,
  });

  return (
    <Layout title="Create a meal" top={<TitleBar title={`Add a new meal on ${dayReadable}`} />}>
      <IngredientsForMealProvider>
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
        <MealCreateNew mealState={mealState} />
      </IngredientsForMealProvider>
    </Layout>
  );
}
