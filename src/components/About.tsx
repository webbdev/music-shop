
const about = {
	heading: "About Us",
	description: [
		"We’re a team of passionate musicians helping our community make music. From quality gear to expert support, we’re here to keep you inspired. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at cursus libero, tempus feugiat purus. Curabitur sagittis nulla quis nisi malesuada, eget efficitur massa varius.",
		"Ut maximus convallis orci, sit amet facilisis risus auctor nec. Vestibulum diam augue, euismod sit amet auctor a, mattis et quam. Aenean congue mollis eros quis condimentum. Donec tincidunt congue dolor, id sagittis eros finibus id. Maecenas quis magna eu ex tristique interdum. Proin at cursus libero, tempus feugiat purus."
	]
}

const About = () => {
	return (
		<section id="about">
			<div className="about">
				<div className="container">
					<div className="content">
						<h2>{about.heading}</h2>
						{about.description.map((item, index) => 
							<p key={index}>{item}</p>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default About