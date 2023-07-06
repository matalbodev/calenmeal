import "../styles/MealsList.scss";
import { Filter, Meal, MealTimeFilter } from "#root/features/meals/types";
import { MealCard } from "./MealCard";
import { MealsEmpty } from "./MealsEmpty";
import { Fragment, useState } from "react";
import { useMealsQuery } from "../queries";

export { MealsList };

function MealsList({ filter }: { filter: Filter }) {
  const [mealTimeFilter, setMealTimeFilter] = useState<string>(Object.keys(MealTimeFilter)[0]);

  const { get } = useMealsQuery(filter);
  const { data: meals, error, isLoading } = get;

  const DisplayMeals = () => {
    if (error) {
      return <p>Error</p>;
    }
    if (isLoading) {
      return <p>Loading</p>;
    }
    if (!meals?.length) {
      return <MealsEmpty />;
    }

    return (
      <>
        {meals
          .filter((meal: Meal) =>
            mealTimeFilter === "ALL" ? meal : meal.mealTime.toLowerCase() === mealTimeFilter.toLowerCase()
          )
          .map((meal: Meal) => (
            <Fragment key={meal.id}>
              <MealCard meal={meal} />
            </Fragment>
          ))}
      </>
    );
  };

  return (
    <div className="meals-list">
      <ul className="meals-list__filter">
        {Object.values(MealTimeFilter).map((filter, key) => (
          <li
            onClick={() => setMealTimeFilter(Object.keys(MealTimeFilter)[key])}
            className={mealTimeFilter === Object.keys(MealTimeFilter)[key] ? "active" : ""}
            key={key}
          >
            {filter}
          </li>
        ))}
      </ul>
      <DisplayMeals />
    </div>
  );
}
