import About from "../pages/About";
import Events from "../pages/Events";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Team from "../pages/Team";
import Works from "../pages/Works";
import AddMember from "../pages/Internal/AddMember";
import ProtectedRoute from "../components/ProtectedRoute";

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/team',
    element: <Team />,
  },
  {
    path: '/events',
    element: <Events />,
  },
  {
    path: '/works',
    element: <Works />,
  },
  {
    path: '/projects', // lowercase please. consistency matters.
    element: <Projects />,
  },
  {
    path: '/add-member',
    element: (
      <ProtectedRoute>
        <AddMember />
      </ProtectedRoute>
    ),
  },
];