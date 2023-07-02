import { Filter, Meal } from "#root/types/meal.types";
import { Button } from "#root/components/commons/Button";
import { LayoutDefault as Layout } from "#root/layouts/LayoutDefault";
import useDate from "#root/hooks/useDate";
import { MealsList } from "#root/components/features/meal/MealsList";

export { Page };


function Page({ SSRMeals }: { SSRMeals: Meal[] }) {
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
