import { Filter } from "#root/types/meal.types";
import { Button } from "#root/components/commons/Button";
import { LayoutDefault as Layout } from "#root/layouts/LayoutDefault";
import useDate from "#root/hooks/useDate";
import { MealsList } from "#root/components/features/meal/MealsList";
import { getMeals, getMealsByDate } from "#root/api/meal";
import { FormatDate } from "#root/utils/date";

export { Page, prefetchQueries };

const prefetchQueries = {
  mealsByDate: {
    fn: () => getMealsByDate(FormatDate(new Date(), 'YYYY-MM-DD')),
  },
};

function Page() {
  const { dayReadable } = useDate();
  return (
    <Layout title="Hello, Mathieu">
      <MealsList filter={Filter.date} />
      <Button color="secondary" markup="a" href={`/meal/new/?date=${dayReadable}`} isFull>
        Add meal
      </Button>
    </Layout>
  );
}
