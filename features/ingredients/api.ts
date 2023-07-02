import customFetch from "#root/api/fetch";

export async function getIngredients() {
  const res = await customFetch(`/ingredients?page=1`, {
    method: "GET",
  });
  return res.json();
}
