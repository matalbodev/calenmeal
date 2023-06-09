import { CalendarStatusBar } from "#root/components/features/calendar/CalendarStatusBar";
import { FormatDate } from "../../utils/date";
import { Content } from "#root/components/layout/Content";
import { meals } from "#root/mock/meals";
import { MealCard } from "#root/components/features/meal/MealCard";
import { Meal } from "#root/types/meal.types";
import { Button } from "#root/components/commons/Button";
import { useDayContext } from "#root/renderer/useDayContext";

export { Page };

function Page() {
	const { day } = useDayContext();
	return (
		<>
			<CalendarStatusBar />
			<Content>
				{meals
					.filter((meal: Meal) => FormatDate(meal.date, "DD/MM/YY") === day.dayMonth)
					.map((meal: Meal) => (
						<MealCard key={meal.id} meal={meal} />
					))}
				<div style={{
					textAlign: "center",
				}}>
					<Button color="tertiary" markup="a" href="/meal/new">
						Add meal
					</Button>
				</div>
			</Content>
		</>
	);
}
