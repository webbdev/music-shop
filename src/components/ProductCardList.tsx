import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types/product';
import ImageModal from './ImageModal';
import Spinner from './Spinner';
import { motion } from 'framer-motion';
import useWindowDimensions from '../hook/useWindowDimensions';


const ProductCardList: React.FC = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [loadingMore, setLoadingMore] = useState<boolean>(false);
	const [visibleCount, setVisibleCount] = useState<number>(9);
	const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);
	const { width } = useWindowDimensions();
	const isDesktop = width >= 768;


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
					className="content"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1, ease: 'easeOut' }}
					viewport={{ once: true, amount: 0.3 }}
				>
					<h2>Что мы продаём</h2>
					<p>Кроме самых популярных струнных инструментов — гитар, укулеле, струн и различных аксессуаров к ним — у нас в продаже есть и более редкие этнические инструменты:</p>

					<div className='category'>
						<ul className='category-list'>
							<li>
								<p><strong>Этнические струнные:</strong> балалайка, домра, мандолина, банджо, лира, гусли и&nbsp;др.</p>
							</li>
							<li>
								<p><strong>Смычковые:</strong> скрипки, виолончель</p>
							</li>
							<li>
								<p><strong>Клавишные:</strong> цифровые пианино и синтезаторы</p>
							</li>
							<li>
							<p><strong>Духовые:</strong> губные гармошки, блокфлейты, свирели, дудук, саксофон, кларнет, трости к&nbsp;ним&nbsp;и&nbsp;т.д.</p>
							</li>
							<li>
								<p><strong>Ударные:</strong> цифровые барабаны, детские барабаны, дарбуки, барабанные&nbsp;палочки и т.п.</p>
							</li>
							<li>
								<p><strong>Разные этнические</strong> инструменты, которые не вписываются в указанные категории: калимбы, глюкофоны&nbsp;и&nbsp;др.</p>
							</li>
						</ul>
						
					</div>

					<div className="text">
						<p>A eсли нужного инструмента у нас нет, то мы с радостью постараемся найти его специально&nbsp;для&nbsp;вас, звоните!</p>
					</div>
				</motion.div>

				<div className="product-gallery-intro">
					<h3>Галерея товаров</h3>
					<div className="bottom-border">
						<p>Кадры из нашего магазина</p>
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
								<ProductCard
									key={product.id}
									product={product}
									index={index}
									onImageClick={() => setModalImage({ src: product.image, alt: product.name })}
								/>
							</motion.div>
						))}
				</div>

				{modalImage && isDesktop && (
					<ImageModal
						src={modalImage.src}
						alt={modalImage.alt}
						onClose={() => setModalImage(null)}
					/>
				)}

				{/* Spinner under the list */}
				{loadingMore && (
					<div className="spinner-container">
						<Spinner />
					</div>
				)}
				
				{visibleCount < products.length && !loadingMore && (
					<div className='button-container'>
						<a className='button load-more' onClick={handleLoadMore}>
							<span>Показать ещё</span>
						</a>
					</div>
				)}
			</div>
		</section>
	);
};

export default ProductCardList;