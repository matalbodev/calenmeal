import { usePageContext } from "#root/renderer/usePageContext";
import { FormatDate } from "#root/utils/date";

const useDate = () => {
  const pageContext = usePageContext();
  const dateFromUrl = pageContext?.urlParsed?.search?.date;
  if (!dateFromUrl) {
    const date = new Date()
    return {
      day: date,
      dayReadable: FormatDate(date, "YYYY-MM-DD"),
    };
  }

  const date = new Date(dateFromUrl);

  return {
    day: date,
    dayReadable: FormatDate(date, "YYYY-MM-DD"),
  };
};

export default useDate;
