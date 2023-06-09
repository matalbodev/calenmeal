export interface Ingredient {
	id: number;
	name: string;
	calories_per_100g: number;
}

interface IngredientInMeal {
  _ingredient: Ingredient;
  quantity: number;
}


export interface Meal {
	id: number;
  name: string;
	mealTime: string;
	date: Date;
	image?: string;
	ingredients: IngredientInMeal[];
}