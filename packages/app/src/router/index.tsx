import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Layout from '@/layout';
import { lazy } from 'react';
export type CustomRouteObject = RouteObject & {
  meta?: {
    name: string;
    visible?: boolean;
    level?: string;
    order?: number;
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
              name: 'overview',
              level: 'basic'
            }
          },
          {
            path: 'use-animate',
            id: 'use-animate',
            Component: lazy(() => import('../pages/docs/useAnimate.doc')),
            meta: {
              name: 'useAnimate',
              level: 'basic'
            }
          },
          {
            path: 'use-motion',
            id: 'use-motion',
            Component: lazy(() => import('../pages/docs/useMotion.doc')),
            meta: {
              name: 'useMotion',
              level: 'basic'
            }
          },
          {
            path: 'use-group',
            id: 'use-group',
            Component: lazy(() => import('../pages/docs/useGroup.doc')),
            meta: {
              name: 'useGroup',
              level: 'basic'
            }
          },
          {
            path: 'use-multiple',
            id: 'use-multiple',
            Component: lazy(() => import('../pages/docs/useMultiple.doc')),
            meta: {
              name: 'useMultiple',
              level: 'basic'
            }
          },
          {
            path: 'use-in-view',
            id: 'use-in-view',
            Component: lazy(() => import('../pages/docs/useInView.doc')),
            meta: {
              name: 'useInView',
              level: 'basic'
            }
          },
          {
            path: 'use-line-draw',
            id: 'use-line-draw',
            Component: lazy(() => import('../pages/docs/useLineDraw.doc')),
            meta: {
              name: 'useLineDraw',
              level: 'basic'
            }
          },
          {
            path: 'use-value',
            id: 'use-value',
            Component: lazy(() => import('../pages/docs/useValue.doc')),
            meta: {
              name: 'useValue',
              level: 'Advanced'
            }
          },
          {
            path: 'use-spring',
            id: 'use-spring',
            Component: lazy(() => import('../pages/docs/useSpring.doc')),
            meta: {
              name: 'useSpring',
              level: 'Advanced'
            }
          }
        ],
        meta: {
          name: 'docs',
          visible: true,
          order: 1
        }
      },
      {
        path: 'examples',
        id: 'examples',
        Component: lazy(() => import('../pages/examples')),
        meta: {
          name: 'examples',
          visible: true,
          order: 3
        }
      },
      {
        path: 'motion-presets',
        id: 'motion-presets',
        Component: lazy(() => import('../pages/presets')),
        meta: {
          name: 'presets',
          visible: true,
          order: 2
        }
      }
    ]
  }
] as CustomRouteObject[]);
