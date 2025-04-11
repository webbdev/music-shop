import BannerParallax from './BannerParallax';

const services = {
	heading: "What We Offer",
	all_services: [
		{
			"title": "Sales",
			"description": "Instruments, accessories, and all things music-find quality gear for every musician under one roof."
		},
		{
			"title": "Repairs",
			"description": "From minor fixes to full restorations, we’ll keep your instruments in top playing condition."
		},
		{
			"title": "Lessons",
			"description": "Personalized music lessons for all ages and skill levels-learn to play with confidence and joy."
		}
	]
}

const Services = () => {
	return (
		<section id="services">
			<div className="container">
				<div className="content">
					<div className='intro'>
						<h2>{services.heading}</h2>
					</div>
					<div className="cards">
						{services.all_services.map((service, index) =>
							<div className="card" key={index}>
								<p className='sub-heading'>{service.title}</p>
								<p className="card-description">{service.description}</p>
							</div>
						)}
					</div>
				</div>
			</div>
			<BannerParallax className="grayscale" />
		</section>
	)
}

export default Services