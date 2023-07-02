import "../styles/SnackBar.scss";
import { SnackBarState } from "#root/renderer/types";
import { FC, useEffect, useRef } from "react";
import { ReactComponent as Cross } from "#root/assets/icons/cross.svg";
import { useSnackBarContext } from "#root/renderer/useSnackBarContext";

type Props = {
  transition: string;
} & SnackBarState;

const SnackBar: FC<Props> = ({ open, title, message, type, transition }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { removeSnack } = useSnackBarContext();
  if (!type) {
    type = "success";
  }
  return open ? (
    <div ref={ref} className={`snack-bar snack-bar--${type} ${transition || ""}`}>
      <div className="snack-bar__content">
        <div className="snack-bar__header">
          <Cross onClick={() => removeSnack()} fill="#424242" width={8} height={8} />
        </div>
        {title ? <div className="snack-bar__title">{title}</div> : null}
        <div className="snack-bar__message">{message}</div>
      </div>
    </div>
  ) : null;
};

export { SnackBar };
