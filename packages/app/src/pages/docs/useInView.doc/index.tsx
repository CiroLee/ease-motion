import Heading from '@/ui/Heading';
import Playground from '@/components/Playground';
import { useInView, animate } from 'ease-motion';
export default function UseInViewDoc() {
  useInView({
    selectors: ['.child'],
    options: {
      once: true,
      threshold: 0
    },
    enter: (target) => {
      animate({
        target,
        motion: 'fadeInLeft',
        options: {
          duration: 1000,
          delay: 500,
          fill: 'forwards',
          easing: 'ease'
        }
      });
    },
    leave: (target) => {
      animate({
        target,
        motion: 'fadeOutLeft',
        options: {
          duration: 1000,
          delay: 500,
          fill: 'forwards',
          easing: 'ease'
        }
      });
    }
  });
  return (
    <>
      <Heading as="h2" className="mb-4">
        useInView
      </Heading>
      <p className="mb-4 text-zinc-400">
        useInView is used to animate elements when target enters or leaves the viewport
      </p>
      <Playground className="mb-4 h-[440px] overflow-y-auto">
        <div className="red h-[500px] pt-10 text-center text-2xl font-bold">Scroll Down To Have a Try</div>
        <div className="child h-44 -translate-x-full bg-red-300"></div>
        <div className="child h-44 -translate-x-full bg-blue-300"></div>
        <div className="child h-44 -translate-x-full bg-purple-300"></div>
      </Playground>
    </>
  );
}
