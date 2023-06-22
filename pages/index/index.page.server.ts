import { getMealsByDate } from "#root/api/meal";
import { PageContext } from "#root/renderer/types";
import { FormatDate } from "#root/utils/date";
export { onBeforeRender };
async function onBeforeRender(pageContext: PageContext) {
  const {
    urlParsed: {
      search: { date },
    },
  } = pageContext;
  let renderedDate = date as string;
  if (!date) {
    renderedDate = FormatDate(new Date(), "YYYY-MM-DD");
  }

  const tomorrow = new Date(renderedDate);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const renderedTomorrow = FormatDate(tomorrow, "YYYY-MM-DD");
  const response = await getMealsByDate(renderedTomorrow, renderedDate);
  const { data, errorMsg } = response;
  return {
    pageContext: {
      pageProps: {
        data,
        errorMsg,
      },
    },
  };
}
