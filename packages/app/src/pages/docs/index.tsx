import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import MenuList from '@/components/MenuList';
export default function Documents() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === '/docs') {
      navigate('/docs/overview');
    }
  }, [location.pathname]);
  return (
    <div className="relative flex h-full">
      <MenuList />
      <div className="scrollbar w-full overflow-x-hidden p-4 sm:px-[12%]">
        <Outlet />
      </div>
    </div>
  );
}
