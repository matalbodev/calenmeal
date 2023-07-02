import "../styles/IngredientSelected.scss";
import { useIngredientContext } from "#root/features/ingredients/hooks/useIngredient";
import { FC } from "react";

export { IngredientsSelected }

const IngredientsSelected: FC = () => {
  const { selectedIngredients, removeIngredient } = useIngredientContext();
  return (
    <ul id="ingredients-results-selected" className={!selectedIngredients?.length ? 'hidden' : '' }>
      {selectedIngredients.map((el) => (
        <li key={el._ingredient.id}>
          {el._ingredient.name}{" "}
          <button onClick={() => removeIngredient(el._ingredient)} type="button">
            x
          </button>
        </li>
      ))}
    </ul>
  );
}