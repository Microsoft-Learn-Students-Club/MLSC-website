import About from "../pages/About";
import Events from "../pages/Events";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Team from "../pages/Team";
import Works from "../pages/Works";

export const routes = [
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/about',
        element: <About/>,
    },
    {
        path: '/team',
        element: <Team/>,
    },
    {
        path: '/events',
        element: <Events/>,
    },
    
    {
        path: '/works',
        element: <Works/>,
    },
    {
        path: '/Projects',
        element: <Projects/>,
    },
];