import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import 'virtual:svg-icons-register';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
