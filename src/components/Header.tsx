import { useState, useEffect } from 'react';

const sections = ['products', 'services', 'contact'];
// const sections = ['товары', 'услуги', 'контакты'];

const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	const [activeSection, setActiveSection] = useState('');

	// Disable scrolling when mobile menu is open
	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : 'auto';
	}, [isOpen]);

	const toggleMenu = () => {
		setIsOpen((prev) => !prev);
	};

	// Detect active section while scrolling
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			setVisible(currentScrollPos < prevScrollPos || currentScrollPos <= 70);
			setPrevScrollPos(currentScrollPos);

			// Check which section is in view
			let currentActive = '';
			for (let section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					if (rect.top <= 90 && rect.bottom >= 90) {
						currentActive = section;
						break;
					}
				}
			}
			setActiveSection(currentActive);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [prevScrollPos]);

	// Smooth scroll to sections
	const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
		e.preventDefault();
		setIsOpen(false);

		const targetElement = document.getElementById(sectionId);
		if (targetElement) {
			window.scrollTo({
				top: targetElement.offsetTop,
				behavior: 'smooth',
			});
		}
	};

	// Scroll to the top for the home button
	const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		setIsOpen(false);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<header id="header" className={`header ${visible ? 'visible' : 'hidden'}`}>
			<div className="container">
				<div className="header-inner">
					<div className='left-side'>
						<div className="logo">
							<a href="/" onClick={handleHomeClick}>
								Music Shop<span>.</span>
							</a>
						</div>
					
						<div className='phone'>
							<a href="tel:+79775984082"> +7&nbsp;(977)&nbsp;598-40-82</a>
						</div>
					</div>

					<nav className="navbar">
						<ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
							<li>
								<a
									href="/"
									className={activeSection === '' ? 'active' : ''}
									onClick={handleHomeClick}
								>
									Главная
								</a>
							</li>
							{sections.map((item, index) => (
								<li key={index}>
									<a
										href={`#${item}`}
										className={activeSection === item ? 'active' : ''}
										onClick={(e) => handleLinkClick(e, item)}
									>
										{item.charAt(0).toUpperCase() + item.slice(1)}
									</a>
								</li>
							))}
						</ul>
					</nav>

					{/* Hamburger Menu Button */}
					<button
						onClick={toggleMenu}
						aria-expanded={isOpen}
						aria-label="Toggle Menu"
						className="menu-toggle"
					>
						{isOpen ? (
							<svg
								className="w-7 h-7"
								fill="none"
								stroke="white"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						) : (
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="white"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
							</svg>
						)}
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;


