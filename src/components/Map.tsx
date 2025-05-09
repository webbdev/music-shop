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
				<div style={{ position: 'relative', overflow: 'hidden', height: '100%' }}>
					<a
						href="https://yandex.eu/maps/org/music_shop_mitino/216161022579/?utm_medium=mapframe&utm_source=maps"
						style={{
							color: '#eee',
							fontSize: '12px',
							position: 'absolute',
							top: 0,
						}}
					>
						Music-shop-Mitino
					</a>
					<a
						href="https://yandex.eu/maps/213/moscow/category/music_store/184105910/?utm_medium=mapframe&utm_source=maps"
						style={{
							color: '#eee',
							fontSize: '12px',
							position: 'absolute',
							top: '14px',
						}}
					>
						Music store in Moscow
					</a>
					<a
						href="https://yandex.eu/maps/213/moscow/category/manufacture_and_repair_of_musical_instruments/184105916/?utm_medium=mapframe&utm_source=maps"
						style={{
							color: '#eee',
							fontSize: '12px',
							position: 'absolute',
							top: '28px',
						}}
					>
						Manufacture and repair of musical instruments in Moscow
					</a>
					<iframe
						src="https://yandex.com/map-widget/v1/org/music_shop_mitino/216161022579/?ll=37.351805%2C55.852556&z=16"
						width="100%"
						height="400"
						allowFullScreen
						loading="lazy"
						style={{ border: 0, position: 'relative' }}
						title="Yandex Map"
					></iframe>
				</div>
			</div>
		</motion.div>
	)
}

export default Map