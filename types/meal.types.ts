export enum MealTime {
	Breakfast = "breakfast",
	Lunch = "lunch",
	Dinner = "dinner",
	Snack = "snack",
}
export interface Ingredient {
  id: number;
  name: string;
  calories: number;
}

export interface IngredientInMealForQuery {
  quantity: number;
  relation: string;
}

export interface IngredientInMeal extends IngredientInMealForQuery {
  _ingredient: Ingredient;
}

export interface Meal {
  id?: number;
  name: string;
  mealTime: MealTime;
  date: Date;
  image?: string;
  ingredients: IngredientInMeal[];
}

export interface MealForQuery {
  name: string;
  mealTime: MealTime;
  date: Date;
  image?: string;
  ingredients: IngredientInMealForQuery[];
}