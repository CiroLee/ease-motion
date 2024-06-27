import { useAnimation } from 'animate-motion';

function App() {
  const { ref, motion } = useAnimation<HTMLDivElement>();

  return (
    <>
      <div
        className="text-red-500"
        ref={ref}
        onClick={() => {
          motion('fadeOut');
        }}>
        app
      </div>
    </>
  );
}

export default App;
