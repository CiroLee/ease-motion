/* eslint-disable no-constant-condition */
interface CreateSpringParams {
  mass: number;
  stiffness: number;
  damping: number;
  velocity: number;
}
type CreateSpringReturn = [number, (t: number) => number];

// this algorithm refers to: https://linear-easing-generator.netlify.app/
export function createSpring({ mass, stiffness, damping, velocity }: CreateSpringParams): CreateSpringReturn {
  const w0 = Math.sqrt(stiffness / mass);
  const zeta = damping / (2 * Math.sqrt(stiffness * mass));
  const wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  const b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;

  function solver(t: number): number {
    if (zeta < 1) {
      t = Math.exp(-t * zeta * w0) * (1 * Math.cos(wd * t) + b * Math.sin(wd * t));
    } else {
      t = (1 + b * t) * Math.exp(-t * w0);
    }
    return 1 - t;
  }

  const duration = (() => {
    const step = 1 / 6;
    let time = 0;
    while (true) {
      if (Math.abs(1 - solver(time)) < 0.001) {
        const restStart = time;
        let restSteps = 1;
        while (true) {
          time += step;
          if (Math.abs(1 - solver(time)) >= 0.001) break;
          restSteps++;
          if (restSteps === 16) return restStart;
        }
      }
      time += step;
    }
  })();

  return [duration * 1000, solver];
}
