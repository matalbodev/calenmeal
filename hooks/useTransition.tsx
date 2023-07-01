import { useState } from "react";

export function useTransition({ timeout, autoClose }: { timeout: number; autoClose?: boolean }) {
  const [transition, setTransition] = useState<string>(undefined as unknown as string);

  const transitionIn = (action: () => void) => {
    action();
    setTimeout(() => {
      setTransition("transition-enter");
    }, timeout / 2);

    if (autoClose) {
      setTimeout(() => transitionOut(action), 6000)
    }
  };

  const transitionOut = (action: () => void) => {
    setTransition("transition-out");
    setTimeout(() => {
      action();
    }, timeout);
  };

  return {
    transitionIn,
    transitionOut,
    transition,
  };
}
