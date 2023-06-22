import { Meal, MealForQuery } from "#root/types/meal.types";
import customFetch from "#root/api/fetch";

export async function getMealsByDate(
  before: string,
  after: string
): Promise<{
  data: Meal[];
  errorMsg: string | null;
}> {
  let errorMsg: string | null = null;
  let meals: Meal[] = [];
  try {
    const response = await customFetch(`/meals?page=1&date[after]=${after}&date[before]=${before}`, {
      method: "GET",
    });
    meals = await response.json();
  } catch (error) {
    errorMsg = "Unable to fetch meals";
  }

  return {
    data: meals,
    errorMsg,
  };
}



export async function postMeal(body: MealForQuery): Promise<Meal> {
  try {
    const response = await customFetch(`/meals`, {
      method: "POST",
      body: body ? JSON.stringify(body) : undefined,
    });
    const meal = await response.json();
    return meal;
  } catch (error) {
    throw new Error("Unable to post meal");
  }
}