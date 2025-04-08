
const Hero = () => {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		const target = document.querySelector('#products');
		if (target) {
			target.scrollIntoView({ behavior: 'smooth' });
		}
	};
	
	return (
		<section id="hero" className="hero parallax">
			<div className='container'>
				<div className="content">
					<h1>Music Shop</h1>
					<a 
						href="#products" 
						className="hero-link"
						onClick={handleClick}
					>
						<div className='angle-down-icon'>
							<svg preserveAspectRatio="xMidYMid meet" data-bbox="6.443 47.497 187.114 105.008" xmlns="http://www.w3.org/2000/svg" viewBox="6.443 47.497 187.114 105.008" role="presentation" aria-hidden="true">
								<g>
									<path d="M174.476 51.261l-74.704 74.193L25.578 50.75c-4.287-4.316-11.566-4.341-15.882-.054s-4.341 11.565-.055 15.882l82.107 82.673c4.287 4.316 11.566 4.341 15.882.055l82.673-82.107c4.316-4.287 4.341-11.566.055-15.882s-11.235-4.342-15.882-.056z"></path>
								</g>
							</svg>
						</div>
					</a>
				</div>
			</div>
		</section>
	)
}

export default Hero