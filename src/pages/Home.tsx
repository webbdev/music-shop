import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCardList from '../components/ProductCardList';
import Services from '../components/Services';
import BottomSection from '../components/BottomSection';

interface OutletContextType {
  isFadingOut?: boolean;
}

const Home = () => {
  const outletContext = useOutletContext<OutletContextType>() || {};
  const { isFadingOut } = outletContext;
  
  return (
    <div className={isFadingOut ? 'animate-fadeOut' : 'animate-fadeIn'}>
      <Hero />
      <ProductCardList />
      <Services />
      <BottomSection />
    </div>
  );
};

export default Home;
