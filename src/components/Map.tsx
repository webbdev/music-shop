import { useState } from "react";
import { motion } from "framer-motion";

const Map = () => {
	const [overlayVisible, setOverlayVisible] = useState(true);

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
					{overlayVisible && (
						<div
							onClick={() => setOverlayVisible(false)}
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								width: '100%',
								height: '100%',
								zIndex: 2,
								cursor: 'pointer',
								backgroundColor: 'transparent'
							}}
							title="Click to activate map"
						></div>
					)}
					<iframe
						src="https://yandex.com/map-widget/v1/org/music_shop_mitino/216161022579/?ll=37.351805%2C55.852556&z=16"
						width="100%"
						height="400"
						allowFullScreen
						loading="lazy"
						title="Yandex Map"
						scrolling= "false"
					></iframe>
				</div>
			</div>
		</motion.div>
	)
}

export default Map