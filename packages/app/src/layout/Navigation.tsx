import { Link } from 'react-router-dom';
import { cn } from '@/utils/utils';
import { NavLink } from 'react-router-dom';
import { IconBrandGithubFilled } from '@tabler/icons-react';
import logoSvg from '@/assets/logo.svg';
const navList = [
  {
    name: 'motion Presets',
    path: 'motion-presets'
  }
];
export default function Navigation() {
  return (
    <nav className="flex h-nav items-center justify-between bg-brand px-4 text-white">
      <Link to="/" className="flex items-center">
        <img src={logoSvg} className="size-[36px]" alt="logo" />
        <span className="ml-2 text-xl font-semibold">animate-motion</span>
      </Link>
      <div className="flex items-center gap-3">
        <div className="space-x-3">
          {navList.map((nav) => (
            <NavLink
              className={({ isActive }) => cn('text-white', { underline: isActive })}
              to={nav.path}
              key={nav.path}>
              {nav.name}
            </NavLink>
          ))}
        </div>
        <a
          href="https://github.com/CiroLee/animate-motion"
          title="https://github.com/CiroLee/animate-motion"
          target="_blank">
          <IconBrandGithubFilled size={20} />
        </a>
      </div>
    </nav>
  );
}
