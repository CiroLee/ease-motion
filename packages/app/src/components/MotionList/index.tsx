import { useMemo, useState } from 'react';
import { presetMotionNames, type MotionName } from 'ease-motion';
import { cn } from '@/utils/utils';
import { cva } from 'class-variance-authority';
const prefixes = ['fade', 'slide', 'zoom', 'flip'];
const item = cva('cursor-pointer rounded-sm border border-brand/20 px-2 py-3 transition hover:bg-brand/10', {
  variants: {
    active: {
      true: 'border-brand text-brand-600'
    }
  }
});
export default function MotionList({ onClick }: { onClick: (motionName: MotionName) => void }) {
  const [motionName, setMotionName] = useState(presetMotionNames[0]);
  const getOtherNames = () => {
    const names = presetMotionNames.filter((name) => !prefixes.some((prefix) => name.startsWith(prefix)));
    return names;
  };
  const groupedNames = useMemo(() => {
    const names: { [key: string]: MotionName[] } = {};
    prefixes.forEach((prefix) => {
      if (!names[prefix]) {
        names[prefix] = [];
      }
      const t = presetMotionNames.filter((name) => name.startsWith(prefix));
      names[prefix].push(...t);
    });
    names['other'] = getOtherNames();
    return names;
  }, []);

  const handleOnClick = (motionName: MotionName) => {
    setMotionName(motionName);
    onClick(motionName);
  };
  return (
    <div className="relative ml-auto box-border flex h-full w-sidebar flex-col overflow-hidden bg-white py-3 shadow-[2px_0_16px_4px] shadow-black/5">
      <div className="scrollbar flex-1 space-y-4 overflow-y-auto pl-3 pr-2">
        {Object.entries(groupedNames).map(([key, value]) => (
          <ul className="flex flex-col gap-y-2" key={key}>
            <p className="text-gray-300">{key}</p>
            {value.map((name) => (
              <li className={cn(item({ active: motionName === name }))} key={name} onClick={() => handleOnClick(name)}>
                {name}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
