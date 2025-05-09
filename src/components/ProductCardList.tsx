import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types/product';
import Spinner from './Spinner';
import { motion } from 'framer-motion';
import Categories from './Categories';

const ProductCardList: React.FC = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [loadingMore, setLoadingMore] = useState<boolean>(false);
	const [visibleCount, setVisibleCount] = useState<number>(9);

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

	const handleLoadMore = () => {
		setLoadingMore(true);
		setTimeout(() => {
			setVisibleCount((prev) => Math.min(prev + 9, products.length));
			setLoadingMore(false);
		}, 1000);
	};

	if (loading) return <Spinner />;

	return (
		<section id="products">
			<div className="container">
				<motion.div 
					className="intro"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1, ease: 'easeOut' }}
					viewport={{ once: true, amount: 0.3 }}
				>
					<h2>Что продаём</h2>
					<p>В нашем магазине — широкий выбор музыкальных инструментов и аксессуаров: от популярных моделей до редких находок. Например:</p>
				</motion.div>

				<Categories />

				<div className='intro'>
					<p>Если вы не нашли редкий инструмент, который ищете, мы с радостью поможем найти его для вас — звоните! :)</p>
				</div>

				<div className="intro product-gallery">
					<h3>Галерея товаров</h3>
					<div className="bottom-border">
						{/* <p>Загляните к нам — здесь часть инструментов, доступных в наличии.</p> */}
						<p>Наши инструменты — в магазине, живые и готовые к игре, ждут вас.</p>
					</div>
				</div>

				{/* Lazy load the entire product list */}
				<div className="product-card-list">
					{products.slice(0, visibleCount).map((product, index) => (
							<motion.div
								key={product.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2, }}
								viewport={{ once: true, amount: 0.3 }}
							>
								<ProductCard key={product.id} product={product} index={index} />
							</motion.div>
						))}
				</div>

				{/* Spinner under the list */}
				{loadingMore && (
					<div className="spinner-container">
						<Spinner />
					</div>
				)}
				
				{visibleCount < products.length && !loadingMore && (
					<div className='button-container'>
						<a className='button load-more' onClick={handleLoadMore}>
							<span>Load More</span>
						</a>
					</div>
				)}
			</div>
		</section>
	);
};

export default ProductCardList;