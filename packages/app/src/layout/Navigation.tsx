import { useState } from 'react';
import { cva } from 'class-variance-authority';
import { Link, NavLink } from 'react-router-dom';
import { cn } from '@/utils/utils';
import { IconBrandGithubFilled } from '@tabler/icons-react';
import BurgerButton from '@/components/BurgerButton';
import logoSvg from '@/assets/logo.svg';
import { useMotion } from 'animate-motion';
import { router, type CustomRouteObject } from '@/router';
import { useMobile } from '@/hooks';

const navRest = cva(
  `flex flex-1 items-center transition border-b border-brand-600/40 ease-linear duration-300 z-10 gap-3 w-full text-black px-3 sm:border-none opacity-0 invisible sm:px-0 sm:text-white flex-col overflow-hidden
  sm:justify-end sm:flex-row sm:relative bg-brand-50/80 backdrop-blur-sm sm:bg-transparent fixed top-[var(--nav-height)] left-0 sm:top-0 sm:left-[unset] sm:visible sm:opacity-100`,
  {
    variants: {
      isOpen: {
        true: 'visible'
      }
    }
  }
);

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, motion] = useMotion<HTMLDivElement>();
  const isMobile = useMobile();
  const children = router.routes.filter((item) => item.id === 'root')[0].children as CustomRouteObject[];
  const list = children
    ?.filter((item) => item.meta?.visible)
    .sort((a, b) => (a.meta!.order! > b.meta!.order! ? 1 : -1));

  const handleOnOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
    if (isOpen) {
      ref.current?.classList.remove('invisible');
      motion('fadeIn', { duration: 200 });
    } else {
      motion('fadeOut', { duration: 200 }).onfinish = () => {
        ref.current?.classList.add('invisible');
      };
    }
  };
  return (
    <nav className="flex h-nav items-center justify-between bg-brand px-4 text-white">
      <Link to="/" className="flex items-center">
        <img src={logoSvg} className="size-[32px]" alt="logo" />
        <span className="ml-2 text-xl font-semibold">animate-motion</span>
      </Link>
      <div ref={ref} className={navRest()}>
        <div className={cn('flex w-full flex-col sm:w-fit sm:flex-row sm:space-x-3')}>
          {list.map((nav) => (
            <NavLink
              className={({ isActive }) =>
                cn('block w-full py-3 text-end text-inherit sm:p-0', { underline: isActive })
              }
              to={nav.path || ''}
              key={nav.path}
              onClick={() => {
                if (isMobile) {
                  handleOnOpen(false);
                }
              }}>
              {nav.meta?.name}
            </NavLink>
          ))}
        </div>
        <a
          href="https://github.com/CiroLee/animate-motion"
          title="https://github.com/CiroLee/animate-motion"
          className="w-full py-3 sm:w-fit sm:p-0"
          target="_blank">
          <IconBrandGithubFilled size={20} className="ml-auto" />
        </a>
      </div>
      <BurgerButton open={isOpen} onClick={handleOnOpen} />
    </nav>
  );
}
