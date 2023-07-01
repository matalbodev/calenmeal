import { CalendarMeal, Meal, CalendarMealForQuery } from "#root/types/meal.types";
import customFetch from "#root/api/fetch";
import { FormatDate } from "#root/utils/date";

export async function getMealsByDate(date: string): Promise<CalendarMeal[]> {
  const formatAsADate = new Date(date);
  const after = FormatDate(formatAsADate, "YYYY-MM-DD");
  const tomorrow = formatAsADate.setDate(formatAsADate.getDate() + 1);
  const before = FormatDate(new Date(tomorrow), "YYYY-MM-DD");

  try {
    const response = await customFetch(`/calendar_meals?page=1&date[after]=${after}&date[before]=${before}`, {
      method: "GET",
    });

    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Unable to fetch meal");
  }
}

export function ConvertCalendarMealsToMeal(meals: CalendarMeal[]) {
  console.log(meals)
  return meals.map((meal) => ({
    date: meal.date,
    ...meal.relatedMeal,
  })) as Meal[];
}


export async function getMeals(): Promise<Meal[]> {


  try {
    const response = await customFetch(`/meals?page=1`, {
      method: "GET",
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error('Unable to fetch meal')
  }

}

export async function getMeal(id: string) : Promise<Meal> {
  try {
    const response = await customFetch(`/meal/${id}`, {
      method: "GET",
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error('Unable to fetch meal')
  }
}

export async function deleteMeal(id: number) {
  try {
    const res = await customFetch(`/meals/${id}`, {
      method: "DELETE",
    });
    return res
  } catch (error) {
    console.error(error);
    throw new Error("Unable to DELETE meal");
  }
}

export async function postMeal(body: CalendarMealForQuery): Promise<Meal> {
  try {
    const response = await customFetch(`/calendar_meals`, {
      method: "POST",
      body: body ? JSON.stringify(body) : undefined,
    });
    const meal = await response.json();
    return meal;
  } catch (error) {
    throw new Error("Unable to post meal");
  }
}


