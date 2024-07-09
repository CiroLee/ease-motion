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
        children: [
          {
            path: 'overview',
            id: 'overview',
            Component: lazy(() => import('../pages/docs/overview')),
            meta: {
              name: 'overview'
            }
          },
          {
            path: 'use-animate',
            id: 'use-animate',
            Component: lazy(() => import('../pages/docs/useAnimate.doc')),
            meta: {
              name: 'useAnimate'
            }
          },
          {
            path: 'use-group',
            id: 'use-group',
            Component: lazy(() => import('../pages/docs/useGroup.doc')),
            meta: {
              name: 'useGroup'
            }
          },
          {
            path: 'use-multiple',
            id: 'use-multiple',
            Component: lazy(() => import('../pages/docs/useMultiple.doc')),
            meta: {
              name: 'useMultiple'
            }
          }
        ],
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
