import useFadeInOnScroll from '../hook/useFadeInOnScroll';

const TestSection = () => {
  const { ref, hasFadedIn } = useFadeInOnScroll();

  return (
    <section
      ref={ref}
      className={`test-section ${hasFadedIn ? 'animate-fadeIn' : 'opacity-0'}`}
      style={{ height: '400px', background: 'lightblue', marginBottom: '100px' }}
    >
      <h2>This should fade in</h2>
    </section>
  );
};
export default TestSection