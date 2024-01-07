import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './utils/constants';
import Root from './pages/Root'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: routes.map(route => ({ path: route.path, element: route.element })),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
