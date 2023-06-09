import "./CalendarStatusBar.scss";
import { ReactComponent as Arrow } from "#root/assets/icons/arrow.svg";
import { DateToDay, FormatDate } from "#root/utils/date";
import { useDayContext } from "#root/renderer/useDayContext";

export { CalendarStatusBar };

function CalendarStatusBar() {
	const { day, setDay } = useDayContext();
	const handleArrowClick = (direction: "left" | "right") => {
    const newDay = new Date(day.date);
    const today = new Date();
		if (direction === "left") {
			newDay.setDate(newDay.getDate() - 1);
		} else {
			newDay.setDate(newDay.getDate() + 1);
		}
		setDay({
			date: newDay,
			label: FormatDate(newDay, "DD/MM/YY") == FormatDate(today, "DD/MM/YY") ? "Today" : DateToDay(newDay),
			dayMonth: FormatDate(newDay, "DD/MM/YY"),
		});
	};

	return (
		<div className="calendar-status-bar">
			<div className="calendar-status-bar-arrow calendar-status-bar-arrow--left" onClick={() => handleArrowClick("left")}>
				<Arrow />
			</div>
			<div className="calendar-status-bar__day">
				{day.date === new Date() ? "Today" : day.label} - {day.dayMonth}
			</div>
			<div className="calendar-status-bar-arrow calendar-status-bar-arrow--right" onClick={() => handleArrowClick("right")}>
				<Arrow />
			</div>
		</div>
	);
}
