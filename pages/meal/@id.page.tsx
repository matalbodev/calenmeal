import { Meal } from "#root/types/meal.types";
import { Fragment } from "react";
export { Page };

function Page({
	data,
	errorMsg
}: {
	data: Meal,
	errorMsg: string
	}) {

	const meal = data

	if (errorMsg) {
		return <>{errorMsg}</>
	}
	return <>
		<h1>{meal.name}</h1>
		<p>{meal.mealTime}</p>
		<ul>
			{meal.ingredients.map((value, key) => (<Fragment key={key}>
				<h2>{value.quantity}</h2>
			</Fragment>))}
		</ul>
	</>
}


