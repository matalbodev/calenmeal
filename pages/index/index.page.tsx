import { Filter } from "#root/features/meals/types";
import { Button } from "#root/features/commons/components/Button";
import { LayoutDefault as Layout } from "#root/layouts/LayoutDefault";
import useDate from "#root/features/calendar/hooks/useDate";
import { MealsList } from "#root/features/meals/components/MealsList";
import { getMeals, getMealsByDate } from "#root/features/meals/api";
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
