import { ingredients } from './ingredients';
export const meals = [
	{
		id: 1,
		name: "Meal 1",
		mealTime: "Breakfast",
		date: new Date(),
		ingredients: [
			{
				_ingredient: ingredients[4],
				quantity: 200,
			},
			{
				_ingredient: ingredients[1],
				quantity: 150,
			},
			{
				_ingredient: ingredients[8],
				quantity: 100,
			},
		],
	},
	{
		id: 2,
		name: "Meal 2",
		mealTime: "Lunch",
		date: new Date(),
		image: "img/dummy_meal.png",
		ingredients: [
			{
				_ingredient: ingredients[6],
				quantity: 120,
			},
			{
				_ingredient: ingredients[9],
				quantity: 250,
			},
			{
				_ingredient: ingredients[5],
				quantity: 180,
			},
		],
	},
	{
		id: 3,
		name: "Meal 3",
		mealTime: "Dinner",
		date: new Date(),
		ingredients: [
			{
				_ingredient: ingredients[3],
				quantity: 80,
			},
			{
				_ingredient: ingredients[0],
				quantity: 300,
			},
			{
				_ingredient: ingredients[7],
				quantity: 200,
			},
		],
	},
];