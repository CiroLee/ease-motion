import { useAnimation } from 'animate-motion';

function App() {
  const { ref, motion } = useAnimation<HTMLDivElement>();

  return (
    <>
      <div className="text-red-500 font-semibold" ref={ref}>
        app demo
      </div>
      <button
        onClick={() => {
          motion('fadeOut');
        }}>
        fade-out
      </button>
    </>
  );
}

export default App;
