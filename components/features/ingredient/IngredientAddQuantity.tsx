import { Button } from "#root/components/commons/Button";
import { Input } from "#root/components/commons/Input";
import { useModalContext } from "#root/renderer/useModalContext";
import { Ingredient } from "#root/types/meal.types";
import { useState } from "react";

export { IngredientAddQuantity };

function IngredientAddQuantity({
  ingredient,
  addIngredient,
}: {
  ingredient: Ingredient;
  addIngredient: (ingredient: { ingredient: Ingredient; quantity: number }) => void;
}) {
  const { closeModal } = useModalContext();
  const [quantity, setQuantity] = useState(0);
  const handleQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
  };
  return (
    <div className="ingredient">
      {ingredient.calories}kcal/100gr
      <div className="form-wrap form-wrap--withSuffix form-wrap--center">
        <Input type="text" name="quantity" id="quantity" placeholder="quantity" defaultValue={100} onChange={handleQuantity} />
        <div className="form-wrap-suffix">gr</div>
      </div>
      <div className="ingredient__total">{Math.round(Number(ingredient.calories * (quantity / 100)))}kcal</div>
      <Button type="button" markup="button" color="secondary" onClick={closeModal}>
        Cancel
      </Button>
      <Button
        type="button"
        markup="button"
        color="primary"
        onClick={() => {
          addIngredient({
            ingredient: ingredient,
            quantity,
          });
          closeModal();
        }}
      >
        Add
      </Button>
    </div>
  );
}
