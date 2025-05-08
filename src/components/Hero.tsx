import HeroBanner from "./HeroBanner"

const Hero = () => {
	return (
		<section id="hero">
			<div className='container'>
				<div className="contact-info">
					<p>Москва, район Митино, ул. Митинская, д. 51, <br /> ТЦ «Тук-Тук», 2 этаж (5 минут пешком от метро Пятницкое шоссе)</p>
					{/* <p><a href="tel:+79775984082">+7 (977) 598-40-82</a></p> */}
				</div>
				<div className="intro">
					{/* <h1>Welcome to <br /> The Music Shop</h1> */}
					{/* <p>A local hub for instruments, gear, and music advice.</p> */}
					<h1>Добро пожаловать <br /> в Музыкальный магазин</h1>
					<p>Центр инструментов, ремонта и обучения в Митино.</p>
				</div>
			</div>

			<HeroBanner />
		</section>
	)
}

export default Hero