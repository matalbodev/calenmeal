import { Ingredient } from "#root/types/meal.types";
import { FC } from "react";

export interface Field {
	type: string;
	label: string;
	options?: {
		value: string;
		label: string;
	}[];
	component?: FC<{
		ingredients: Ingredient[];
		selectedIngredients: Ingredient[];
		setSelectedIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>;
	}>;
}