import { MealsList } from "#root/features/meals/components/MealsList";
import { LayoutDefault as Layout } from "#root/layouts/LayoutDefault";
import { Filter } from "#root/features/meals/types";
import { getMeals } from "#root/features/meals/api";
import { FormatDate } from "#root/utils/date";

const prefetchQueries = {
  meals: {
    keys: [
      {
        scope: "meals",
        entity: 'list',
        paging: '1',
        date: FormatDate(new Date(), 'YYYY-MM-DD'),
        context: ''
      },
    ],
    fn: getMeals,
  },
};
// eslint-disable-next-line react-refresh/only-export-components
export { Page, prefetchQueries };
function Page() {
  return (
    <Layout title="Your meals">
      <MealsList filter={Filter.All} />
    </Layout>
  );
}
