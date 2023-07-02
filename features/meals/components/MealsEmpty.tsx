import "../styles/MealsEmpty.scss"

export function MealsEmpty() {
  return (
    <div className="meals-empty">
      <p className="meals-empty__title">No meals</p>
      <p className="meals-empty__content">
        No meals are planned for today, <br />
        <strong>let&apos;s add it !</strong>
      </p>
    </div>
  );
}
