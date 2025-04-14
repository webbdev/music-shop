import { motion } from "framer-motion";

const Map = () => {
	return (
		<motion.div 
			className="map"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1, ease: "easeOut" }}
			viewport={{ once: true, amount: 0.3 }}
		>
			<div className="container">
				<iframe 
					title="Google Map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25230.521072702395!2d-122.42949032147364!3d37.77093267198634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580a8d32e7de9%3A0x6fc20be39a8f42c5!2sHaight%20St%2C%20San%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2suk!4v1743778539957!5m2!1sen!2suk"
					width="100%" 
					height="400" 
					style={{ border: 0 }} 
					allowFullScreen 
					loading="lazy" 
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</motion.div>
	)
}

export default Map