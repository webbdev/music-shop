import { motion } from "framer-motion";

const about = {
	heading: "О нас",
	description: [
		"Здесь можно не только купить новый музыкальный инструмент, но и починить свой, так как внутри магазина у нас есть мастерская по ремонту струнных музыкальных инструментов.",
		"Следствием этого является то, что все новые поступившие к нам на продажу гитары, укулеле и другие струнные музыкальные инструменты, проходят предпродажную подготовку от профессиональных мастеров, которые доводят их до максимально удобного для игры\u00a0состояния.",
		"Это особенно важно для дешёвых гитар, которые по умолчанию с фабрики часто приходят малопригодными к игре (струны высоко - тяжело зажимать, лады перекрывают друг друга – дребезжат, царапаются), но после нашей доводки даже бюджетные гитары становятся такими же удобными как\u00a0дорогие."
	]
}

const About = () => {
	return (
		<section id="about">
			<div className="about">
				<div className="container">
					<motion.div 
						className="content"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1, ease: 'easeOut' }}
						viewport={{ once: true, amount: 0.3 }}
					>
						{/* <h2>{about.heading}</h2> */}
						{about.description.map((item, index) => 
							<p key={index}>
								{item}
							</p>
						)}
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default About