import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from './Navigation';
import Loading from '@/ui/Loading';
export default function Layout() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="h-[calc(100vh_-_var(--nav-height))]">
        <Suspense fallback={<Loading show />}>{<Outlet />}</Suspense>
      </main>
    </div>
  );
}
