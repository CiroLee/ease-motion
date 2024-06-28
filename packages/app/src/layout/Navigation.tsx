import { Link } from 'react-router-dom';
import { cn } from '@/utils/utils';
import { NavLink } from 'react-router-dom';
import logoSvg from '@/assets/logo.svg';
const navList = [
  {
    name: 'motion Presets',
    path: 'motion-presets'
  }
];
export default function Navigation() {
  return (
    <nav className="h-nav flex items-center bg-brand px-4 justify-between text-white">
      <Link to="/" className="flex items-center">
        <img src={logoSvg} className="size-[36px]" alt="logo" />
        <span className="text-xl ml-2 font-semibold">animate-motion</span>
      </Link>
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
