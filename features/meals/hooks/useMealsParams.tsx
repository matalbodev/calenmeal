import { usePageContext } from "#root/renderer/usePageContext";

export const useMealsParams = () => {
  const pageContext = usePageContext();
  const dateFromUrl = pageContext?.urlParsed?.search?.date;
  return {
    dateFromUrl,
  };
};
