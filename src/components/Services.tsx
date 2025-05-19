import { motion } from "framer-motion";
import BannerParallax from './BannerParallax';

const services = {
	heading: "Услуги",
	all_services: [
		{
			"title": "Продажа",
			"description": "Поможем выбрать подходящий инструмент — от новичка до профи."
		},
		{
			"title": "Ремонт",
			"description": "Настройка, доводка и обслуживание."
		},
		{
			"title": "Обучение",
			"description": "Индивидуальные уроки гитары (всех типов) и барабанов. Удобное время и никакой привязки к абонементам.",
			"prices": [
				{ instrument: "Урок на гитаре", price: "1200 ₽" },
				{ instrument: "Урок на барабанах", price: "1500 ₽" }
			]
		}
	]
}

const Services = () => {
	return (
		<section id="services">
			<div className="container">
				<div className="content">
					<div className='intro'>
						<motion.h2
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1, ease: 'easeOut' }}
							viewport={{ once: true, amount: 0.3 }}
						>{services.heading}</motion.h2>
					</div>
					<div className="cards">
						{services.all_services.map((service, index) =>
							<motion.div 
								className="card" 
								key={index}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 1, ease: 'easeOut' }}
								viewport={{ once: true, amount: 0.3 }}
							>
								<p className='sub-heading'>{service.title}</p>
								<p className="card-description">{service.description}</p>

								{/* Отображение цен, если есть */}
								{service.prices && (
									<ul className="lesson-price-list">
										{service.prices.map((item, idx) => (
											<li key={idx}>
												<p>
													{item.instrument} — {item.price}
												</p>
											</li>
										))}
									</ul>
								)}
							</motion.div>
						)}
					</div>
				</div>
			</div>
			<BannerParallax className="grayscale" />
		</section>
	)
}

export default Services