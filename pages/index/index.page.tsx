import { CalendarStatusBar } from "#root/components/features/calendar/CalendarStatusBar";
import { Content } from "#root/components/layout/Content";
//import { meals } from "#root/mock/meals";
import { MealCard } from "#root/components/features/meal/MealCard";
import { Meal } from "#root/types/meal.types";
import { Button } from "#root/components/commons/Button";

export { Page };

function Page(props: { data: Meal[]; errorMsg?: string }) {
  const { data: meals, errorMsg } = props;
  
  console.log("meals", meals);
  const mealsEmpty = meals?.length === 0;
  return (
    <>
      <CalendarStatusBar />
      <Content>
        {errorMsg && <p>{errorMsg}</p>}
        {!mealsEmpty ? meals?.map((meal: Meal) => <MealCard key={meal.id} meal={meal} />) : <p>No meals</p>}
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Button color="tertiary" markup="a" href="/meal/new">
            Add meal
          </Button>
        </div>
      </Content>
    </>
  );
}
