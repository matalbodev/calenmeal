import { TitleBar } from "#root/components/commons/TitleBar";
import { useDayContext } from "#root/renderer/useDayContext";

export { Page };

function Page() {
	const { day } = useDayContext();
	return (
		<>
			<TitleBar title={`Add a new meal on ${day.dayMonth}`} />
			<div id="content"></div>
		</>
	);
}
