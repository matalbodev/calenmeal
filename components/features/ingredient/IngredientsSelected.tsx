import { useIngredientContext } from "#root/hooks/useIngredient";
import "./IngredientSelected.scss";
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