import { useEffect, useRef } from 'react';
import { Product } from '../types/product';
import useWindowDimensions from '../hook/useWindowDimensions';

interface ProductCardProps {
	product: Product;
	index: number;
	onImageClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index, onImageClick }) => {
	const imageRef = useRef<HTMLImageElement | null>(null);
	const { width } = useWindowDimensions();
	const isSmallDevice = width < 480;

	useEffect(() => {
		if (!isSmallDevice || index % 2 !== 0) return;

		const image = imageRef.current;
		if (!image) return;

		const handleScroll = () => {
			const rect = image.getBoundingClientRect();
			const windowHeight = window.innerHeight;

			if (rect.top < windowHeight && rect.bottom > 0) {
				const progress = 1 - rect.top / windowHeight;
				const scale = Math.min(Math.max(1 + progress * 0.3, 1), 1.3);
				image.style.transform = `scale(${scale})`;
			} else {
				image.style.transform = 'scale(1)';
			}
		};

		const onScroll = () => requestAnimationFrame(handleScroll);

		window.addEventListener('scroll', onScroll);
		handleScroll();

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, [index, isSmallDevice]);

	// const isHoverTarget = !isSmallDevice && index % 2 === 0;

	return (

		<div className='product-card'>
			<div className='product-image'>
				<img 
					ref={imageRef}
					src={product.image} 
					alt={product.name}
					onClick={isSmallDevice ? undefined : onImageClick}
					style={{ cursor: 'pointer' }}
				/>
			</div>
		</div>
	)
};

export default ProductCard;
