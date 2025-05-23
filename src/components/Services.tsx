import { useState } from 'react';
import { motion } from "framer-motion";
import BannerParallax from './BannerParallax';
import RepairListModal from './RepairListModal';

type Service = {
	title: string;
	description: string;
	hasModal?: boolean;
	prices?: { instrument: string; price: string }[];
};

const services: { heading: string; all_services: Service[] } = {
	heading: "Услуги",
	all_services: [
		{
			"title": "Ремонт и настройка",
			"description": "В магазине работает собственная мастерская. Настраиваем, устраняем неисправности и доводим струнные инструменты до отличного игрового состояния.",
			"hasModal": true
		},
		{
			"title": "Обучение",
			"description": "Проводим индивидуальные занятия по гитаре (акустика, классика, электрогитара, бас) и барабанам. Удобный график, без абонементов и обязательств.",
			"prices": [
				{ instrument: "Урок на гитаре", price: "1200\u00a0₽" },
				{ instrument: "Урок на барабанах", price: "1500\u00a0₽" }
			]
		}
	]
}

const Services = () => {
	const [isRepairModalOpen, setRepairModalOpen] = useState(false);

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

								{service.hasModal && (
									<button 
										type="button"
										className="show-prices-btn" 
										onClick={() => setRepairModalOpen(true)}
									>
										Посмотреть цены на ремонт
									</button>
								)}

								{/* Отображение цен, если есть */}
								{service.prices && (
									<ul className="lesson-price-list">
										{service.prices.map((item, idx) => (
											<li key={idx}>
												<p>
													<strong>{item.instrument} — {item.price}</strong>
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

			<RepairListModal isOpen={isRepairModalOpen} onClose={() => setRepairModalOpen(false)} />
		</section>
	)
}

export default Services