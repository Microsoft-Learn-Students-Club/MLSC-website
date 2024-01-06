import { Outlet } from "react-router-dom";
import Navbar from "../layouts/Navbar";
// import { useEffect, useState } from "react";

const Root = () => {
    // const [color, setColor] = useState('white');
    // const { pathname } = useLocation()
    // // console.log(pathname);

    // useEffect(() => {
    //     if (pathname === '/about') {
    //         setColor('black');
    //     }
    //     else {
    //         setColor('white');
    //     }
    // }, [pathname])

    return (
        <>
            {/* <Navbar aboutClr={color} /> */}
            <Navbar />
            <Outlet />
            {/* <div className="preloader">
                MLSC
            </div> */}
        </>
    );
};
export default Root;