import { motion } from "framer-motion";

const Contact = () => {
	return (
		<section id="contact">
			<div className="container">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1, ease: 'easeOut' }}
					viewport={{ once: true, amount: 0.3 }}
				>
					Связаться с нами
				</motion.h2>
				<div className="content">
					<motion.div 
						className="cards"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1, ease: 'easeOut' }}
						viewport={{ once: true, amount: 0.3 }}
					>
						<div className="card">

							<div className="card-1">
								<div className="sub-heading">
									<span>Наш Адрес</span>
								</div>
								<div>
									<p>Москва, район Митино,</p>
									<p>ул. Митинская, д. 51</p>
									<p>ТЦ «Тук-Тук», 2 этаж</p>
									<p>(метро Пятницкое шоссе)</p>
								</div>
							</div>

							<div className="card-2">
								<div className="sub-heading">
									<span>Нужно что-то уточнить? Звоните:</span>
								</div>
								<p>
									<a href="tel:+79775984082"> +7&nbsp;(977)&nbsp;598-40-82</a>
								</p>
							</div>
						</div>
						
						<div className="card">
							<div className="sub-heading">
								<span>Часы работы</span>
							</div>
							<div>
								<p>Пн – Вс</p>
								<p>12:00 - 21:00</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Contact