import { useEffect, useRef, useState } from "react";
import useWindowDimensions from "../hook/useWindowDimensions";
import banner from "/images/banner-3.jpg";
import banner2 from "/images/banner-1.jpg";
import banner3 from "/images/banner-2.jpg";
import Spinner from './Spinner';

const HeroBanner = () => {
	const image1Ref = useRef<HTMLImageElement | null>(null);
	const image2Ref = useRef<HTMLImageElement | null>(null);
	const image3Ref = useRef<HTMLImageElement | null>(null);
	const animationFrameId = useRef<number | null>(null);

	const [loading, setLoading] = useState<boolean>(true);
	const [fadeIn, setFadeIn] = useState<boolean>(false);

	const { width } = useWindowDimensions();
	const isSmallDevice = width < 480;

	useEffect(() => {
		const images = [banner, banner2, banner3];
		let loadedCount = 0;

		images.forEach((src) => {
			const img = new Image();
			img.src = src;
			img.onload = img.onerror = () => {
				loadedCount++;
				if (loadedCount === images.length) {
					console.log("All images loaded (or failed gracefully)");
					setLoading(false);
				}
			};
		});
	}, []);

	useEffect(() => {
		if (!loading) {
			// Slight delay to allow DOM to render before applying fade-in
			requestAnimationFrame(() => {
				setFadeIn(true);
			});
		}
	}, [loading]);

	useEffect(() => {
		const handleScroll = () => {
			if (animationFrameId.current !== null) {
				cancelAnimationFrame(animationFrameId.current);
			}

			animationFrameId.current = requestAnimationFrame(() => {
				const scrollY = window.scrollY;
				const scale = Math.min(1 + scrollY * 0.0005, 1.3);

				if (isSmallDevice) {
					image1Ref.current && (image1Ref.current.style.transform = `scale(${scale})`);
					image2Ref.current && (image2Ref.current.style.transform = `scale(${scale})`);
					image3Ref.current && (image3Ref.current.style.transform = `scale(${scale})`);
				} else {
					image2Ref.current && (image2Ref.current.style.transform = `scale(${scale})`);
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

	if (loading) return <Spinner />;

	return (
		<section className={`hero-banner ${fadeIn ? 'fade-in' : ''}`}>
			<div className="banner-container">
				<div className="banner-inner">
					<div className="image image-1">
						<img ref={image1Ref} src={banner} alt="Banner 1" />
					</div>
					<div className="image image-2">
						<img ref={image2Ref} src={banner2} alt="Banner 2" />
					</div>
					<div className="image image-3">
						<img ref={image3Ref} src={banner3} alt="Banner 3" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroBanner;
