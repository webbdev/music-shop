import { Product } from '../types/product';

interface ProductCardProps {
	product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
	<div className="product-card">
		<a>
			<div>
				<img 
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
);

export default ProductCard;
