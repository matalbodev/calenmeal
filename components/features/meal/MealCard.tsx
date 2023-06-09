import { Meal as MealInt } from "#root/types/meal.types";
import { ReactComponent as Arrow } from "#root/assets/icons/arrow.svg";
import "./MealCard.scss";

export { MealCard };

function MealCard({ meal }: { meal: MealInt }) {
	return (
		<div className="meal-card" onClick={() => window.location.href = `/meal/${meal.id}`}>
			<div className="meal-card__thumbnail">
				<div className="meal-card__tag">
					{meal.mealTime}
				</div>
				<img className="meal-card__image" src={meal.image || "img/not_found_meal.jpg"} alt={meal.name} />
			</div>
			<div className="meal-card__title">
				<h3 className="meal-card__name">{meal.name}</h3>
				<Arrow className="meal-card__arrow" />
			</div>
		</div>
	);
}
