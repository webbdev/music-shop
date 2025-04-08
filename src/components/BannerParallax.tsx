interface BannerParallaxProps {
	className?: string;
}

const BannerParallax: React.FC<BannerParallaxProps> = ({ className = '' }) => {
	return (
		<section className={`banner parallax ${className}`}>
			<div className="container"></div>
		</section>
	);
};

export default BannerParallax;