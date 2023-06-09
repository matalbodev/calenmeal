import fetch from "cross-fetch"
import { usePageContext } from "#root/renderer/usePageContext";
import { meals } from "#root/mock/meals";
import { Meal } from "#root/types/meal.types";
export { Page };
	
	
	
type Fruit = {
	name: string;
}

function Page({ data }: { data: Fruit[] }) {
	
	const pageContext = usePageContext();
	const id = Number(pageContext?.routeParams?.id) || 0;
	const meal = meals.find((meal: Meal) => meal.id === id);
	return (
		<div id="content">
			<h1>{meal?.name}</h1>
			{data.map((fruit: Fruit) => (
				<div key={fruit.name}>{fruit.name}</div>
			))}
		</div>
	);
}


