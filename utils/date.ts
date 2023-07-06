export const DateToDay = (date: Date) => {
  return date.toLocaleDateString("en-US", { weekday: "long" });
};

export const FormatDate = (date: Date, model: string) => {
  const sep = model.includes("/") ? "/" : "-";
  if (!sep) return "wrong sep";

  const splitted = model.split(sep);
  // splitted clone
  const formatedReturn = [];

  const length = splitted.length;
  if (length <= 1) return "wrong format";

  for (const value of splitted) {
    const splitVal = value.split("");
    if (!splitVal?.length) return "wrong format";

    if (value.includes("D")) {
      const indexOf = splitted.indexOf(value);
      // formatedReturn[indexOf] = splitVal.length === 1 || date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
      // replace indexOf by a new value
      formatedReturn[indexOf] = splitVal.length === 1 || date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
    }

    if (value.includes("M")) {
      const indexOf = splitted.indexOf(value);
      formatedReturn[indexOf] =
        splitVal.length === 1 || date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    }
    if (value.includes("Y")) {
      const indexOf = splitted.indexOf(value);
      const year = date.getFullYear();
      const slicedYear = year.toString().slice(splitVal.length * -1);

      formatedReturn[indexOf] = slicedYear;
    }
  }

  return formatedReturn.join(sep);
};

export const getDateFromUrl = () => {
	if(!window) return
  const url = new URL(window?.location.href);
  const date = url?.searchParams.get("date");
  if (!date) return;

  return date;
};
