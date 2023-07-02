import { CalendarStatusBar } from "#root/features/calendar/components/CalendarStatusBar";
import { Filter, Meal } from "#root/features/meals/types";
import { Button } from "#root/features/commons/Button";
import { LayoutDefault as Layout } from "#root/layouts/LayoutDefault";
import useDate from "#root/features/calendar/hooks/useDate";
import { MealsList } from "#root/features/meals/components/MealsList";

export { Page };
function Page({ SSRMeals }: { SSRMeals: Meal[] }) {
  const { dayReadable } = useDate();

  return (
    <Layout
      title="Your calendar"
      top={<CalendarStatusBar {...useDate()} />}
    >
        <MealsList SSRMeals={SSRMeals} filter={Filter.date} />
        <Button color="secondary" markup="a" href={`/meal/new/?date=${dayReadable}`} isFull>
          Add meal
        </Button>
    </Layout>
  );
}
