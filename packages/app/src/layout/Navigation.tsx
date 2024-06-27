import { cn } from '@/utils/utils';
import { NavLink } from 'react-router-dom';
const navList = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'motion Presets',
    path: 'motion-presets'
  }
];
export default function Navigation() {
  return (
    <nav className="h-nav flex items-center bg-brand px-4 justify-between text-white">
      <div className="w-[100px] h-10 bg-red-500"></div>
      <div className="space-x-3">
        {navList.map((nav) => (
          <NavLink className={({ isActive }) => cn('text-white', { underline: isActive })} to={nav.path} key={nav.path}>
            {nav.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
