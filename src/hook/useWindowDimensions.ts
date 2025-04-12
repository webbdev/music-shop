import { useState, useEffect } from 'react';

type WindowDimensions = {
	width: number;
	height: number;
};

const useWindowDimensions = (): WindowDimensions => {
	const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		const hasWindow = typeof window !== 'undefined';

		if (!hasWindow) return;

		const handleResize = () => {
			setWindowDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		handleResize(); // Set initial dimensions
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
};

export default useWindowDimensions;
