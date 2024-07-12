import { NavLink } from 'react-router-dom';
import { router, type CustomRouteObject } from '@/router';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/utils';

const menuItem = cva('py-2 px-1 transition relative indent-2 hover:bg-brand/10', {
  variants: {
    active: {
      true: 'text-brand flex items-center before:absolute before:left-1 before:h-[60%] before:inline-block before:w-[2px] before:bg-brand'
    }
  }
});

export default function MenuList() {
  const children = router.routes.find((item) => item.id === 'root')?.children;
  const docsChildren = children?.find((item) => item.id === 'documents')?.children as CustomRouteObject[];
  return (
    <div className="flex h-full w-[260px] flex-col border-r">
      <p className="p-3 text-zinc-400">documents</p>
      {docsChildren.map((menu) => (
        <NavLink to={menu.path || ''} key={menu.id} className={({ isActive }) => cn(menuItem({ active: isActive }))}>
          {menu.meta?.name}
        </NavLink>
      ))}
    </div>
  );
}
