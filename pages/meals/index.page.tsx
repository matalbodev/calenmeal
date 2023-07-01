import { MealsList } from "#root/components/features/meal/MealsList"
import { LayoutDefault as Layout } from "#root/layouts/LayoutDefault"
import { Filter } from "#root/types/meal.types"

export { Page}
function Page() {
  return <Layout title="Your meals">
    <MealsList filter={Filter.all} SSRMeals={[]} />
  </Layout>
}