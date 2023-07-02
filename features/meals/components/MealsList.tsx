import { ConvertCalendarMealsToMeal, getMeals, getMealsByDate } from "#root/features/meals/api";
import useDate from "#root/features/calendar/hooks/useDate";
import { Filter, Meal, MealTimeFilter } from "#root/features/meals/types";
import { useQuery } from "react-query";
import { MealCard } from "./MealCard";
import { MealsEmpty } from "./MealsEmpty";
import "./MealsList.scss";
import { Fragment, useState } from "react";

export { MealsList };

function MealsList({ filter }: { filter: Filter }) {
  const [mealTimeFilter, setMealTimeFilter] = useState<string>(Object.keys(MealTimeFilter)[0]);

  const { dayReadable } = useDate();

  const queries: {
    [key: string]: {
      queryKey: string[];
      queryFn: () => Promise<Meal[]>;
      enabled?: boolean;
      refetchOnWindowFocus?: boolean
    };
  } = {
    all: {
      queryKey: ["meals"],
      queryFn: () => getMeals(),
    },
    date: {
      queryKey: ["mealsByDate", dayReadable],
      queryFn: async () => {
        const meals = await getMealsByDate(dayReadable);
        return ConvertCalendarMealsToMeal(meals);
      },
      enabled: !!dayReadable,
      refetchOnWindowFocus: true,
    },
  };

  const query = queries[Filter[filter]];
  const {
    data: meals,
    error,
    isLoading,
  } = useQuery({
    ...query,
  });
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
      {meals
        .filter((meal) =>
          mealTimeFilter === "ALL" ? meal : meal.mealTime.toLowerCase() === mealTimeFilter.toLowerCase()
        )
        .map((meal: Meal) => (
          <Fragment key={meal.id}>
            <MealCard meal={meal} />
          </Fragment>
        ))}
    </div>
  );
}
