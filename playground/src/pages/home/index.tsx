import { cva } from 'class-variance-authority';
import { useAnimation } from 'puppy-motion';
const block = cva('border border-dashed rounded-md p-3');
const box = cva('size-[120px] rounded-md bg-red-400 flex justify-center items-center text-white');
const button = cva('h-9 rounded-[4px] px-3 bg-blue-400 text-white');
function Home() {
  const { ref, motion } = useAnimation<HTMLDivElement>();
  return (
    <div className="p-4">
      <div className={block()}>
        <div className="flex gap-3">
          <div ref={ref} className={box()}>
            BOX
          </div>
          <div>
            <button
              className={button()}
              onClick={() => {
                motion('fadeOut');
              }}>
              fade-out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
