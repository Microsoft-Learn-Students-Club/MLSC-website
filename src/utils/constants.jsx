import About from "../pages/About";
import Events from "../pages/Events";
import Home from "../pages/Home";
import Leaderboard from "../pages/Leaderboard";
import Project from "../pages/Project";
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
        path: '/project',
        element: <Project/>,
    },
    {
        path: '/works',
        element: <Works/>,
    },
    {
        path: '/leaderboard',
        element: <Leaderboard/>,
    },
];