import { FC, useDeferredValue, useEffect, useRef, useState } from "react";
import { Ingredient } from "#root/types/meal.types";
import { Input } from "#root/components/commons/Input";
import { useModalContext } from "#root/renderer/useModalContext";
import { IngredientAddQuantity } from "./IngredientAddQuantity";
import "./IngredientSearch.scss";
import { useIngredientContext } from "#root/hooks/useIngredient";

export { IngredientSearch };

const IngredientSearch: FC = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Ingredient[]>([]);
  const { ingredients, addIngredient } = useIngredientContext();
  const deferredSearch = useDeferredValue(search);
  const inputRef = useRef<HTMLInputElement>(null);

  const { setModal } = useModalContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const resetSearch = () => {
    const input = inputRef.current;
    if (input) {
      input.value = "";
      setSearch("");
    }
  };

  useEffect(() => {
    if (deferredSearch.length === 0) {
      setResults([]);
      return;
    }
    const newResults = ingredients.filter((ingredient) => ingredient.name.toLowerCase().includes(deferredSearch));
    setResults(newResults);
  }, [deferredSearch, ingredients]);

  return (
    <>
      <div className="form-wrap">
        <label>Add some ingredients</label>
        <Input inputRef={inputRef} onChange={handleChange} type="text" placeholder="Search for ingredients..." isFull />
      </div>
      <ul id="ingredients-results-search" className={!results?.length ? "hidden" : ""}>
        {results.map((ingredient) => (
          <li
            key={ingredient.id}
            onClick={() => {
              resetSearch();
              setModal({
                title: `Choose a quantity for ${ingredient.name}`,
                content: <IngredientAddQuantity ingredient={ingredient} addIngredient={addIngredient} />,
              });
            }}
          >
            {ingredient.name} <button type="button">+</button>
          </li>
        ))}
      </ul>
    </>
  );
};

