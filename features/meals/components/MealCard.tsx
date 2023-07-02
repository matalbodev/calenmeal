import { Meal as MealInt } from "#root/features/meals/types";
import { ReactComponent as Arrow } from "#root/assets/icons/arrow.svg";
import { deleteMeal } from "#root/features/meals/api";
import "./MealCard.scss";
import { useMutation, useQueryClient } from "react-query";
import useDate from "#root/features/calendar/hooks/useDate";
import { useSnackBarContext } from "#root/renderer/useSnackBarContext";
import { ReactComponent as Cross } from "#root/assets/icons/cross.svg";

export { MealCard };

function MealCard({ meal }: { meal: MealInt }) {
  const queryClient = useQueryClient();
  const { dayReadable } = useDate();
  const { addSnack } = useSnackBarContext();
  const deleteMealMutation = useMutation({
    mutationFn: (id: number) => {
      const res = deleteMeal(id);
      return res;
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["mealsByDate", dayReadable],
        exact: true,
      });

      addSnack({
        open: true,
        title: `${meal.name} deleted`,
        message: "Your meal has been successfully removed",
        type: "success",
      });
    },
  });

  return (
    <div className="meal-card">
      <div className="meal-card__thumbnail">
        <div className="meal-card__tag">{meal.mealTime}</div>
        <button
          type="button"
          className="meal-card__delete"
          onClick={() => {
            deleteMealMutation.mutate(Number(meal?.id) || 0);
          }}
        >
          <Cross fill="#112028" width={8} height={8} />
        </button>
        <img className="meal-card__image" src={meal.image || "img/not_found_meal.jpg"} alt={meal.name} />
      </div>
      <div className="meal-card__title" onClick={() => (window.location.href = `/meal/${meal.id}`)}>
        <h3 className="meal-card__name">{meal.name}</h3>
        <Arrow className="meal-card__arrow" />
      </div>
    </div>
  );
}
