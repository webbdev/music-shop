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
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.5795296807228!2d37.34915807639286!3d55.8526109731213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b547104e047edd%3A0xb70274ba7ef1937d!2sMitinskaya%20Ulitsa%2C%2051%2C%20Moskva%2C%20Russia%2C%20125368!5e0!3m2!1sen!2suk!4v1746716391443!5m2!1sen!2suk"
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