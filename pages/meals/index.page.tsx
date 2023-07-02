import { getMeals } from "#root/features/meals/api";
import { MealsList } from "#root/features/meals/components/MealsList"
import { LayoutDefault as Layout } from "#root/layouts/LayoutDefault"
import { Filter } from "#root/features/meals/types"

export { Page, prefetchQueries };
const prefetchQueries = {
  meals: {
    fn: () => getMeals(),
  },
};
function Page() {
  return <Layout title="Your meals">
    <MealsList filter={Filter.all} />
  </Layout>
}