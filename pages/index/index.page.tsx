import { CalendarStatusBar } from "#root/components/features/calendar/CalendarStatusBar";
import { MealCard } from "#root/components/features/meal/MealCard";
import { Filter, Meal } from "#root/types/meal.types";
import { Button } from "#root/components/commons/Button";
import { LayoutDefault as Layout } from "#root/layouts/LayoutDefault";
import { useQuery } from "react-query";
import { getMealsByDate } from "#root/api/meal";
import useDate from "#root/hooks/useDate";
import { useState } from "react";
import { MealsEmpty } from "#root/components/features/meal/MealsEmpty";
import { TitleBar } from "#root/components/commons/TitleBar";
import { MealsList } from "#root/components/features/meal/MealsList";

export { Page };

enum MealTimeFilter {
  ALL = 'all',
  BREAKFAST = 'breakfast',
  LUNCH = 'lunch',
  DINNER = 'dinner'
}

function Page({ SSRMeals }: { SSRMeals: Meal[] }) {
  const [mealTimeFilter, setMealTimeFilter] = useState<MealTimeFilter>(MealTimeFilter['ALL'])
  const { dayReadable } = useDate();
  return (
    <Layout title="Hello, Mathieu">
      <MealsList SSRMeals={SSRMeals} filter={Filter.date} />
      <Button color="secondary" markup="a" href={`/meal/new/?date=${dayReadable}`} isFull>
        Add meal
      </Button>
    </Layout>
  );
}
