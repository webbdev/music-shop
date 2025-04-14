import { useEffect, useRef } from "react";
import useWindowDimensions from "../hook/useWindowDimensions";
import banner from "/images/banner-3.jpg";
import banner2 from "/images/banner-1.jpg";
import banner3 from "/images/banner-2.jpg";

const HeroBanner = () => {
	const image1Ref = useRef<HTMLImageElement | null>(null);
	const image2Ref = useRef<HTMLImageElement | null>(null);
	const image3Ref = useRef<HTMLImageElement | null>(null);
	const animationFrameId = useRef<number | null>(null);

	const { width } = useWindowDimensions();
	const isSmallDevice = width < 480;

	useEffect(() => {
		const handleScroll = () => {
			if (animationFrameId.current !== null) {
				cancelAnimationFrame(animationFrameId.current);
			}

			animationFrameId.current = requestAnimationFrame(() => {
				const scrollY = window.scrollY;
				const scale = Math.min(1 + scrollY * 0.0005, 1.3);

				if (isSmallDevice) {
					if (image1Ref.current) {
						image1Ref.current.style.transform = `scale(${scale})`;
					}
					if (image2Ref.current) {
						image2Ref.current.style.transform = `scale(${scale})`;
					}
					if (image3Ref.current) {
						image3Ref.current.style.transform = `scale(${scale})`;
					}
				} else {
					if (image2Ref.current) {
						image2Ref.current.style.transform = `scale(${scale})`;
					}
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			if (animationFrameId.current !== null) {
				cancelAnimationFrame(animationFrameId.current);
			}
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isSmallDevice]);

	return (
		<section className='hero-banner'>
			<div className="banner-container">
				<div className="banner-inner">
					<div className="image image-1">
						<img
							ref={image1Ref}
							src={banner}
							alt="Banner 1"
						/>
					</div>
					<div className="image image-2">
						<img
							ref={image2Ref}
							src={banner2}
							alt="Banner 2"
						/>
					</div>
					<div className="image image-3">
						<img
							ref={image3Ref}
							src={banner3}
							alt="Banner 3"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroBanner;
