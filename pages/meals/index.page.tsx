import { getMeals } from "#root/api/meal";
import { MealsList } from "#root/components/features/meal/MealsList"
import { LayoutDefault as Layout } from "#root/layouts/LayoutDefault"
import { Filter } from "#root/types/meal.types"

export { Page, prefetchQueries }
const prefetchQueries = {
  meals: {
    fn: getMeals(),
  },
};
function Page() {
  return <Layout title="Your meals">
    <MealsList filter={Filter.all} />
  </Layout>
}