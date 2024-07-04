# animate-motion

extensions of Web Animation API via react hooks with high performance

🚧 it's still in development

# Install

```bash
npm install animate-motion
```

# Usage

use the preset motions

```ts
// App.tsx
import { useMotion } from 'animate-motion';

export default function App() {
  const { ref, motion } = useMotion<HTMLDivElement>()

  return (
    <div>
      <div ref={ref} className="text-3xl">animate-motion</div>
      <button onClick={() => motion('swing')}>play</button>
    </div>
  )
}
```
