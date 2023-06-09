import React, { useContext, useState } from "react";
import type { Day } from "#root/pages/index/index.types";
import { FormatDate } from "#root/utils/date";

export { DayContextProvider };
// eslint-disable-next-line react-refresh/only-export-components
export { useDayContext };

const Context = React.createContext<{
	day: Day;
	setDay: React.Dispatch<React.SetStateAction<Day>>;
}>(
	undefined as unknown as {
		day: Day;
		setDay: React.Dispatch<React.SetStateAction<Day>>;
	}
);

function DayContextProvider({ children }: { children: React.ReactNode }) {
	const today = new Date();
	const [day, setDay] = useState<Day>({
		date: today,
		dayMonth: FormatDate(today, "DD/MM/YY"),
		label: "Today",
	});
  return <Context.Provider value={{
    day,
    setDay
  }}>{children}</Context.Provider>;
}

function useDayContext() {
	const day = useContext(Context);
	return day;
}
