import { Modal } from "#root/components/layout/Modal";
import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";

export { ModalContextProvider };
// eslint-disable-next-line react-refresh/only-export-components
export { useModalContext };

type ModalT = {
	title: string;
	content: React.ReactNode;
};


const defaultContext = {
	modal: {
		title: "Test",
		content: <></>
	},
	setModal: () => {
		console.log("setModal");
	},
	closeModal: () => {
		console.log("closeModal");
	}
};

const Context = React.createContext<{
	modal: ModalT;
	setModal: React.Dispatch<React.SetStateAction<ModalT>>;
	closeModal: () => void;
}>(
	defaultContext as {
		modal: ModalT;
		setModal: React.Dispatch<React.SetStateAction<ModalT>>;
		closeModal: () => void;
	}
);

function ModalContextProvider({ children }: { children: React.ReactNode }) {
	const [modal, setModal] = useState<ModalT>({
		title: "",
		content: null,
	});

	const closeModal = () => {
		setModal({
			title: "",
			content: null
		});
	};


	const portal = () => {
		if (typeof window === "object") {
      const body = document?.body;
			if (body && modal?.content) {
				return ReactDOM.createPortal(<Modal title={modal.title} content={modal.content} />, body);
			}
    }
	}

	return (
		<Context.Provider
			value={{
				modal,
				setModal,
				closeModal
			}}
		>
			<>
				{children}
				{portal()}
			</>
		</Context.Provider>
	);
}

function useModalContext() {
	const context = useContext(Context);
	return context;
}
