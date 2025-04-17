import { useEffect, useRef } from 'react';
import { Product } from '../types/product';

interface ProductCardProps {
	product: Product;
	index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
	const imageRef = useRef<HTMLImageElement | null>(null);

	useEffect(() => {
		// Only apply scale effect for even (or odd) indexed items
		const isTarget = index % 2 === 0; // change to `% 2 !== 0` for odd, `% 2 === 0`for even
		if (!isTarget) return;

		const image = imageRef.current;
		if (!image) return;

		const handleScroll = () => {
			if (!image) return;

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

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [index]);

	return (

		<div className="product-card">
			<a>
				<div className='product-image'>
					<img 
						ref={imageRef}
						src={product.image} 
						alt={product.name}
					/>
					<div className='overlay'>
						<div className='text'>
							<span>
								{product.name}
							</span>
						</div>
					</div>	
				</div>
			</a>	
		</div>
	)
};

export default ProductCard;
