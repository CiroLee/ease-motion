import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Layout from '@/layout';
import { lazy } from 'react';
export type CustomRouteObject = RouteObject & {
  meta?: {
    name: string;
    visible?: boolean;
  };
};
export const router = createBrowserRouter([
  {
    path: '/',
    id: 'root',
    element: <Layout />,
    children: [
      {
        path: '/',
        id: 'home',
        Component: lazy(() => import('../pages/home'))
      },
      {
        path: 'docs',
        id: 'documents',
        Component: lazy(() => import('../pages/docs')),
        meta: {
          name: 'docs',
          visible: true
        }
      },
      {
        path: 'motion-presets',
        id: 'motion-presets',
        Component: lazy(() => import('../pages/presets')),
        meta: {
          name: 'presets',
          visible: true
        }
      }
    ]
  }
] as CustomRouteObject[]);
