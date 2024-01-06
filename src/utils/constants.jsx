import About from "../pages/About";
import Events from "../pages/Events";
import Home from "../pages/Home";
import Leaderboard from "../pages/Leaderboard";
import Team from "../pages/Team";

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
        path: '/leaderboard',
        element: <Leaderboard/>,
    },
];