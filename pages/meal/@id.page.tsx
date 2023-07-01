import { IngredientInMealFromQuery, Meal } from "#root/types/meal.types";
import { Fragment } from "react";
import "#root/components/features/meal/MealDetail.scss";
import { useQuery } from "react-query";
import { getMeal } from "#root/api/meal";
import { usePageContext } from "#root/renderer/usePageContext";
import { LayoutDefault as Layout } from "#root/layouts/LayoutDefault";
export { Page };

function Page({ data }: { data: Meal }) {
  const pageContext = usePageContext();
  const id = pageContext?.routeParams?.id || "";

  const ingredientsList = () => {
    if (!meal?.ingredients) return <p>No ingredients</p>;
    return (
      <>
        <p className="title-md">List of ingredients</p>
        {meal?.ingredients.map((ingredient, key) => {
          const name = ingredient.relation.name;
          const quantity = ingredient.quantity;
          const caloriesFor100g = ingredient.relation.calories;
          return (
            <li className="ingredient" key={key}>
              <span className="ingredient__name">{name}</span>
              <span className="ingredient__quantity">{quantity}g</span>
              <span className="ingredient__quantity">{(quantity * caloriesFor100g) / 100}kcal</span>
            </li>
          );
        })}
      </>
    );
  };

  const {
    data: meal,
    error: errorQuery,
    isLoading,
  } = useQuery({
    queryKey: ["meal"],
    queryFn: () => getMeal(id),
    placeholderData: data,
  });

  if (errorQuery) {
    return <p>Error</p>;
  }
  if (isLoading) {
    return <p>Is loading</p>;
  }
  return (
    <Layout title={meal?.name || "No name"}>
      <div className="meal-detail">
        <ul>{ingredientsList()}</ul>
      </div>
    </Layout>
  );
}
