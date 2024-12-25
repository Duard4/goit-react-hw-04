import { useEffect } from "react";
import css from "./ImageModal.module.css";

const ImageModal = ({ image, close }) => {
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") close();
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [close]);

	return (
		<div
			onClick={close}
			className={css.backdrop}
			role="dialog"
			aria-modal="true"
			aria-label={image.alt_description || "Modal Image"}
		>
			<img
				src={image.urls.regular}
				alt={image.alt_description || "Image"}
				className={css.modalImage}
				onClick={(event) => event.stopPropagation()}
			/>
		</div>
	);
};

export default ImageModal;
