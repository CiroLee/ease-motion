import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from './Navigation';
export default function Layout() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="h-[calc(100vh_-_var(--nav-height))]">
        <Suspense>{<Outlet />}</Suspense>
      </main>
    </div>
  );
}
