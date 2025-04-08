import { Product } from '../types/product';

// Fetch products from JSON
export const fetchProducts = async () => {
	try {
		const response = await fetch('/api/products.json');
		if (!response.ok) throw new Error('Failed to fetch products');
		return (await response.json()) as { 
			newProducts: Product[]; bestSellers: Product[] 
		};
	} catch (error) {
		console.error('Error fetching products:', error);
		throw error;
	}
};