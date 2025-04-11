import HeroBanner from "./HeroBanner"

const Hero = () => {
	return (
		<section id="hero">
			<div className='container'>
				<div className="intro">
					<h1>Welcome to <br /> The Music Shop</h1>
					<p>A local hub for instruments, gear, and music advice.</p>
				</div>
			</div>

			<HeroBanner />
		</section>
	)
}

export default Hero