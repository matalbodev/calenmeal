import "./CalendarStatusBar.scss";
import { ReactComponent as Arrow } from "#root/assets/icons/arrow.svg";
import { FormatDate } from "#root/utils/date";
import { usePageContext } from "#root/renderer/usePageContext";

export { CalendarStatusBar };

function CalendarStatusBar({ day, dayReadable }: { day: Date; dayReadable: string }) {
  const pageContext = usePageContext()
  const urlPathname = pageContext?.urlPathname
  const handleArrowClick = (direction: "left" | "right") => {
    if (direction === "left") {
      day.setDate(day.getDate() - 1);
    } else {
      day.setDate(day.getDate() + 1);
    }
    window.history.pushState({}, "", `${urlPathname}?date=${FormatDate(day, "YYYY-MM-DD")}`);
    window.dispatchEvent(new Event("popstate"));
  };

  const dayLabel = Intl.DateTimeFormat("en-us", {
    weekday: "long",
  }).format(day);

  const todayReadable = FormatDate(new Date(), "YYYY-MM-DD");

  return (
    <div className="calendar-status-bar">
      <div
        className="calendar-status-bar-arrow calendar-status-bar-arrow--left"
        onClick={() => handleArrowClick("left")}
      >
        <Arrow fill="#fff" />
      </div>
      <div className="calendar-status-bar__day">{dayReadable === todayReadable ? "Today" : dayLabel}</div>
      <div
        className="calendar-status-bar-arrow calendar-status-bar-arrow--right"
        onClick={() => handleArrowClick("right")}
      >
        <Arrow fill="#fff" />
      </div>
    </div>
  );
}
