import { useAnimation } from 'animate-motion';

function App() {
  const { ref, motion } = useAnimation<HTMLDivElement>();

  return (
    <>
      <div
        className="text-red-500 font-semibold"
        ref={ref}
        onClick={() => {
          motion('fadeOut');
        }}>
        app demo
      </div>
    </>
  );
}

export default App;
