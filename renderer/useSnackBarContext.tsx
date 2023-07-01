import { ReactNode, createContext, useContext, useState } from "react";
import { SnackBarContext, SnackBarState } from "./types";
import { SnackBar } from "#root/components/layout/SnackBar";
import { useTransition } from "#root/hooks/useTransition";

export { SnackBarProvider };
// eslint-disable-next-line react-refresh/only-export-components
export { useSnackBarContext };

const Context = createContext<SnackBarContext>({
  snack: {
    open: false,
    message: ''
  },
  addSnack: () => null,
  removeSnack: () => null
});

function SnackBarProvider({ children }: { children: ReactNode }) {

  const { transitionOut, transitionIn, transition } = useTransition({
    timeout: 300,
    autoClose: true
  });
  const [snack, setSnack] = useState<SnackBarState>({
    message: "",
    open: false,
  });

  const removeSnack = () => {
    transitionOut(
      () => setSnack({
        open: false,
        message: "",
        title: "",
      })
    );
  }

  const addSnack = (state: SnackBarState) => {
    transitionIn(
      () => setSnack(state)
    )
  }

  return (
    <Context.Provider
      value={{
        snack,
        addSnack,
        removeSnack
      }}
    >
      {children}
      <SnackBar {...snack} transition={transition} />
    </Context.Provider>
  );
}

function useSnackBarContext() {
  const snackBarContext = useContext(Context);
  if(!snackBarContext) throw new Error('No snackBAr context')
  return snackBarContext;
}
