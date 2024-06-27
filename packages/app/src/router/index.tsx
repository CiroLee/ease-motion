import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/layout';
import { lazy } from 'react';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        id: 'home',
        Component: lazy(() => import('../pages/home'))
      },
      {
        path: 'motion-presets',
        id: 'motion-presets',
        Component: lazy(() => import('../pages/presets'))
      }
    ]
  }
]);
