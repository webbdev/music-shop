import HeroBanner from "./HeroBanner";
import { motion } from "framer-motion";

const hero = {
	description: [
		"Здесь можно не только купить новый музыкальный инструмент, но и починить свой, так как внутри магазина у нас есть мастерская по ремонту струнных музыкальных инструментов.",
		"Следствием этого является то, что все новые поступившие к нам на продажу гитары, укулеле и другие струнные музыкальные инструменты, проходят предпродажную подготовку от профессиональных мастеров, которые доводят их до максимально удобного для игры\u00a0состояния.",
		"Это особенно важно для дешёвых гитар, которые по умолчанию с фабрики часто приходят малопригодными к игре (струны высоко - тяжело зажимать, лады перекрывают друг друга – дребезжат, царапаются), но после нашей доводки даже бюджетные гитары становятся такими же удобными как\u00a0дорогие."
	]
}

const Hero = () => {
	return (
		<section id="hero">
			<div className='container'>
				<div className="contact-info">
					<p className="small-text">
						<strong>Москва, район Митино, ул. Митинская, д.&nbsp;51</strong>, <br /> ТЦ «Тук-Тук», 2 этаж (5 минут пешком от <strong>метро Пятницкое шоссе</strong>)
					</p>
				</div>
				<div className="intro">
					<h1>Добро пожаловать</h1>
					<p>на сайт-визитку Музыкального магазина</p>
				</div>
			</div>

			<HeroBanner />

			<div className='container'>
				<motion.div 
					className="description"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1, ease: 'easeOut' }}
					viewport={{ once: true, amount: 0.3 }}
				>
					{hero.description.map((item, index) => 
						<p key={index}>
							{item}
						</p>
					)}
				</motion.div>
			</div>
		</section>
	)
}

export default Hero