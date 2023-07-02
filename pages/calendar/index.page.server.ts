import { ConvertCalendarMealsToMeal, getMealsByDate } from "#root/features/meals/api";
import { PageContext } from "#root/renderer/types";
import { FormatDate } from "#root/utils/date";
export { onBeforeRender };
async function onBeforeRender(pageContext: PageContext) {
  const urlParsed = pageContext?.urlParsed;
  const day = urlParsed?.search?.date ? new Date(urlParsed.search.date) : new Date();
  const response = await getMealsByDate(FormatDate(day, 'YYYY-MM-DD'));
  const meals = ConvertCalendarMealsToMeal(response)
  return {
    pageContext: {
      pageProps: {
        SSRMeals: meals,
      },
    },
  };
}
