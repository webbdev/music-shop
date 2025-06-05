import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageModalProps {
	src: string;
	alt?: string;
	onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose();
			}
		};

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [onClose]);

	return (
		<AnimatePresence>
			<motion.div
				className="modal-backdrop"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				onClick={onClose}
			>
				<motion.div
					className="modal-content"
					initial={{ scale: 0.8 }}
					animate={{ scale: 1 }}
					exit={{ scale: 0.8 }}
					transition={{ duration: 0.3 }}
					onClick={(e) => e.stopPropagation()}
				>
					<button className="modal-close" onClick={onClose} aria-label="Close modal">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="20"
							height="20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7a1 1 0 0 0-1.41 1.41L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
						</svg>
					</button>
					<img src={src} alt={alt} />
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

export default ImageModal;

