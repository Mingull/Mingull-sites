"use client";
import { createFlexibleContext } from "@/lib/utils/flexibleContext";
import { useState } from "react";

type ModalState = {
	isOpen: boolean;
	content: React.ReactNode;
};

const { Provider, useFlexibleContext: useModal } = createFlexibleContext<{
	modal: ModalState;
	openModal: (content: React.ReactNode) => void;
	closeModal: () => void;
}>({ errorMessage: "useModal must be used within a ModalProvider" });

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
	const [modal, setModal] = useState<ModalState>({ isOpen: false, content: null });

	const openModal = (content: React.ReactNode) => setModal({ isOpen: true, content });
	const closeModal = () => setModal({ isOpen: false, content: null });

	return <Provider value={{ modal, openModal, closeModal }}>{children}</Provider>;
};

export { useModal };
