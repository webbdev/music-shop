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
					<button className="modal-close" onClick={onClose} aria-label="Close modal">×</button>
					<img src={src} alt={alt} />
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

export default ImageModal;

