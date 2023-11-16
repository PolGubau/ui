import React from "react";
import { Modal } from "./Modal";
import ToastSystem from "./ToastSystem/ToastSystem";
import { ModalProps, ToastProps } from "../../types";

interface Props {
	toasts?: ToastProps[];
	modal?: ModalProps;
	setToast?: (toasts: ToastProps[]) => void;
	setModal?: (model: ModalProps) => void;
	children?: React.ReactNode;
}

const PopupsProvider: React.FC<Props> = ({ toasts, modal, setToast, setModal, children }) => {
	return (
		<>
			{modal?.isOpen && setModal && <Modal state={modal} setState={setModal} />}
			{toasts && setToast && <ToastSystem toasts={toasts} onChange={setToast} />}
			{children}
		</>
	);
};

export default PopupsProvider;