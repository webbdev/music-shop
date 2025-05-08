import { motion } from "framer-motion";
import BannerParallax from './BannerParallax';

const services = {
	heading: "Услуги",
	sub_heading: "Мы предлагаем полный спектр музыкальных услуг",
	all_services: [
		{
			"title": "Продажа",
			"description": "Поможем выбрать подходящий инструмент — от новичка до профи."
		},
		{
			"title": "Ремонт",
			"description": "Настройка, доводка, обслуживание и реставрация."
		},
		{
			"title": "Обучение",
			"description": "Индивидуальные уроки: гитара (все типы), барабаны."
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
						{/* <p>{services.sub_heading}</p> */}
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