import About from '../components/About';
import Hero from '../components/Hero';
import ProductCardList from '../components/ProductCardList';
import Services from '../components/Services';
import BottomSection from '../components/BottomSection';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <ProductCardList />
      <Services />
      <BottomSection />
    </>
  );
};

export default Home;
