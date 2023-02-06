import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorFound from './views/FallbackError';
import Home from './views/Home';
import VocabBuilder from './views/VocabBuilder';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorFound />
  },
  {
    path: '/new-word',
    element: <VocabBuilder />,
    errorElement: <ErrorFound />
  }
]);

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
