import { usePageContext } from "#root/renderer/usePageContext";
import { FormatDate } from "#root/utils/date";

const useDate = () => {
  const pageContext = usePageContext();
  const dateFromUrl = pageContext?.urlParsed?.search?.date;
  const date = dateFromUrl ? new Date(dateFromUrl) : new Date()

  return {
    day: date,
    dayReadable: FormatDate(date, "YYYY-MM-DD"),
  };
};

export default useDate;
