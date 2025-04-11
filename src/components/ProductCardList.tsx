import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types/product';
import Spinner from './Spinner';

const ProductCardList: React.FC = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch('/api/products.json');
				if (!response.ok) throw new Error('Failed to fetch products');
				const data: Product[] = await response.json();
				setProducts(data);
			} catch (error) {
				console.error('Error fetching products:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	if (loading) return <Spinner />;

	return (
		<section id="products">
			<div className="container">
				<div className='intro'>
					<h2>What We Sell</h2>
					<p>Instruments, accessories, and music essentials for every level.</p>
				</div>
				
				<div className="product-card-list">
					{products.length > 0 ? (
						products.map((product) => (
							<ProductCard key={product.id} product={product} />
						))
					) : (
						''
					)}
				</div>
			</div>
		</section>
	);
};

export default ProductCardList;
