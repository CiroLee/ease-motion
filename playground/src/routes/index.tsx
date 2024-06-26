import { createHashRouter } from 'react-router-dom';
import Home from '@/pages/home';

export const router = createHashRouter([
  {
    path: '/',
    id: 'home',
    element: <Home />
  }
]);
