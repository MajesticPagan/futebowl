import { useEffect } from "react";
import { createPortal } from "react-dom";

const Backdrop = ({ onClick }) => {
	useEffect(() => {
		document.body.classList.add("overflow-hidden");
		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, []);

	return createPortal(
		<div
			className="bg-gray-900 bg-opacity-80 fixed inset-0 z-30"
			onClick={onClick}
		></div>,
		document.getElementById("backdrop-root")
	);
};

export default Backdrop;
