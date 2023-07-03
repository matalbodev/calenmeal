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
export interface IngredientInMealFromQuery {
  quantity: number;
  relation: Ingredient;
}

export interface IngredientInMeal extends IngredientInMealForQuery {
  _ingredient: Ingredient;
}

export interface Meal {
  id: string;
  name: string;
  mealTime: MealTime;
  date: Date;
  image?: string;
  ingredients: IngredientInMealFromQuery[];
}
export interface CalendarMeal {
  id: string;
  date: Date;
  relatedMeal: {
    name: string;
    mealTime: MealTime;
    image?: string;
    ingredients: IngredientInMealFromQuery[];
  };
}

export interface CalendarMealForQuery {
  date: Date;
  relatedMeal: {
    name: string;
    mealTime: MealTime;
    image?: string;
    ingredients: IngredientInMealForQuery[];
  };
}

export enum Filter {
  All = '',
  Date = 'byDate'
}

export enum MealTimeFilter {
  ALL = "all",
  BREAKFAST = "breakfast",
  LUNCH = "lunch",
  SNACK = "snack",
  DINNER = "dinner",
}
