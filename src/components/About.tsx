import BannerParallax from './BannerParallax';

const about = {
	heading: "About Us",
	description: [
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at cursus libero, tempus feugiat purus. Curabitur sagittis nulla quis nisi malesuada, eget efficitur massa varius. Curabitur at consequat elit, vel accumsan lorem. Nunc dapibus elit eu enim pulvinar, sed tincidunt sapien tristique. Fusce sit amet neque ac dui pharetra rhoncus in et ante. Fusce rhoncus ex nec nisi egestas viverra congue dolor.",
		"Ut maximus convallis orci, sit amet facilisis risus auctor nec. Vestibulum diam augue, euismod sit amet auctor a, mattis et quam. Aenean congue mollis eros quis condimentum. Donec tincidunt congue dolor, id sagittis eros finibus id. Maecenas quis magna eu ex tristique interdum."
	]
}

const About = () => {
	return (
		<section id="about">

			<div className="about parallax">
				<div className="container">
					<div className="content">
						<h2>{about.heading}</h2>
						{about.description.map((item, index) => 
							<p key={index}>{item}</p>
						)}
					</div>
				</div>
			</div>
			<BannerParallax className="grayscale" />
			
		</section>
		
	)
}

export default About