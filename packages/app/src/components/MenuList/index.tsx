import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { router, type CustomRouteObject } from '@/router';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/utils';
import { IconLayoutSidebarFilled } from '@tabler/icons-react';
import { useOnClickOutside } from 'usehooks-ts';

const menuItem = cva('py-2 px-1 transition relative indent-2 hover:bg-brand/10', {
  variants: {
    active: {
      true: 'text-brand flex items-center before:absolute before:left-1 before:h-[60%] before:inline-block before:w-[2px] before:bg-brand'
    }
  }
});

export default function MenuList() {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(true);
  const children = router.routes.find((item) => item.id === 'root')?.children;
  const docsChildren = children?.find((item) => item.id === 'documents')?.children as CustomRouteObject[];
  useOnClickOutside(ref, () => {
    setHidden(true);
  });
  return (
    <div
      ref={ref}
      className={cn(
        'absolute z-10 flex h-full w-[260px] shrink-0 -translate-x-full flex-col border-r bg-secondary transition duration-300 sm:relative sm:translate-x-0',
        { 'translate-x-0': !hidden }
      )}>
      <p className="p-3 text-zinc-400">Hooks</p>
      {docsChildren.map((menu) => (
        <NavLink to={menu.path || ''} key={menu.id} className={({ isActive }) => cn(menuItem({ active: isActive }))}>
          {menu.meta?.name}
        </NavLink>
      ))}
      <div
        className={cn(
          'absolute -right-11 bottom-3 flex size-[36px] cursor-pointer rounded-md bg-zinc-400/20 text-brand-600 transition flex-center hover:bg-zinc-400/30 sm:hidden'
        )}
        onClick={() => setHidden(!hidden)}>
        <IconLayoutSidebarFilled size={28} />
      </div>
    </div>
  );
}
