import BannerParallax from './BannerParallax';

const services = {
	heading: "Our Services",
	all_services: [
		{
			title: "Sales",
			description: "Mauris quis sollicitudin elit. Mauris facilisis commodo gravida. Cras iaculis quam urna, ut suscipit tellus semper at. Nulla mattis nisl ac dui sodales vehicula. Vestibulum ullamcorper id erat nec congue."
		},
		{
			title: "Repairs",
			description: "Etiam consectetur ex eget nibh posuere, et pulvinar neque fringilla. Proin euismod dictum turpis. Duis sollicitudin sit amet orci ut cursus. Proin iaculis orci in malesuada aliquam. Morbi efficitur ultrices turpis in mattis."
		},
		{
			title: "Training",
			description: "Mauris quis sollicitudin elit. Mauris facilisis commodo gravida. Nam vulputate ipsum et lacinia consequat. Duis sollicitudin sit amet orci ut cursus. Nam vulputate ipsum et lacinia consequat."
		}
	]
}

const Services = () => {
	return (
		<section id="services">
			<div className="container">
				<div className="content">
					<h2>{services.heading}</h2>
					<div className="cards">
						{services.all_services.map((service, index) =>
							<div className="card" key={index}>
								<h3>{service.title}</h3>
								<p className="card-description">{service.description}</p>
							</div>
						)}
					</div>
				</div>
			</div>
			<BannerParallax />
		</section>
	)
}

export default Services