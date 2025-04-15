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
					Get in Touch
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
									<span>Our Address</span>
								</div>
								<div>
									<p>Haight St</p>
									<p>San Francisco, CA, USA</p>
								</div>
							</div>

							<div className="card-2">
								<div className="sub-heading"><span>For any questions, please call:</span></div>
								<p>
									<a href="tel:+14155550132"> 1&nbsp;(415)&nbsp;555‑0132</a>
								</p>
							</div>
						</div>
						
						<div className="card">
							<div className="sub-heading">
								<span>Opening Hours</span>
							</div>
							<div>
								<p>Sun - Mon</p>
								<p>10:00am - 10:00pm</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Contact