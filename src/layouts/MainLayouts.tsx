import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainLayouts = () => {

	return (
		<>
			<ScrollToTop />
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

export default MainLayouts