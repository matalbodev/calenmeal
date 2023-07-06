import { useQuery, QueryFunctionContext } from "react-query";
import customFetch from "#root/api/fetch";
import { FormatDate } from "#root/utils/date";
import useDate from "../calendar/hooks/useDate";
import { CalendarMeal, Filter, Meal } from "./types";

const mealKeys = {
  all: [{ scope: "meals" }] as const,
  lists: () => [{ ...mealKeys.all[0], entity: "list" }] as const,
  list: (paging?: string, date?: string, context?: string) =>
    [{ ...mealKeys.lists()[0], paging, date, context }] as const,
};

const getMeals = async ({
  queryKey: [{ paging, date, context }],
}: QueryFunctionContext<ReturnType<(typeof mealKeys)["list"]>>) => {
  const extraParams: {
    [key: string]: string;
  } = {};
  extraParams.page = paging || "1";
  if (date) {
    const formatAsADate = new Date(date);
    extraParams["date[after]"] = FormatDate(formatAsADate, "YYYY-MM-DD");
    const tomorrow = formatAsADate.setDate(formatAsADate.getDate() + 1);
    extraParams["date[before]"] = FormatDate(new Date(tomorrow), "YYYY-MM-DD");
  }

  const extraParamsForUrl = Object.entries(extraParams)
    ?.map(([key, value], index) => {
      const sep = index === 0 ? "?" : "&";
      return `${sep}${key}=${value}`;
    })
    .join("");

  const endpoint = context ? `/meals/${context}` : "/meals";

  try {
    const response = await customFetch(`${endpoint}${extraParamsForUrl}`, {
      method: "GET",
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Unable to fetch meal");
  }
};

function ConvertCalendarMealsToMeal(meals: CalendarMeal[]) {
  if (!meals[0]?.relatedMeal) return;
  return meals.map((meal) => ({
    date: meal.date,
    ...meal.relatedMeal,
  })) as Meal[];
}

export const useMealsQuery = (filter: Filter) => {
  const { dayReadable } = useDate();
  console.log(mealKeys.list("1", dayReadable, filter));
  return {
    get: useQuery({
      queryKey: mealKeys.list("1", dayReadable, filter),
      queryFn: async (props) => {
        const meals = await getMeals(props);
        return filter === Filter.Date ? ConvertCalendarMealsToMeal(meals) : meals;
      },
    }),
  };
};
