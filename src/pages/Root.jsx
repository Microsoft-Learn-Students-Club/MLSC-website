import { Outlet } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import { useEffect } from "react";
import mlscLogo from '../assets/mlsclogo.png';

const Root = () => {

    useEffect(() => {
        const preloader = document.getElementById('preloader');
        const ctnPreloader = document.getElementById('ctn-preloader');

        setTimeout(() => {
            ctnPreloader.classList.add('loaded');
            document.body.classList.remove('no-scroll-y');

            if (ctnPreloader.classList.contains('loaded')) {
                setTimeout(() => {
                    preloader.parentNode.removeChild(preloader);
                }, 1000);
            }
        }, 3000);
    }, []);


    return (
        <>
            <Navbar />
            <Outlet />
            <section>
                <div id="preloader">
                    <div id="ctn-preloader" className="ctn-preloader">
                        <div className="animation-preloader">
                            <img src={mlscLogo} alt="mlsc logo" className="fadeInOut"/>
                            <div className="txt-loading">
                                <span data-text-preloader="M" className="letters-loading">
                                    M
                                </span>

                                <span data-text-preloader="L" className="letters-loading">
                                    L
                                </span>

                                <span data-text-preloader="S" className="letters-loading">
                                    S
                                </span>

                                <span data-text-preloader="C" className="letters-loading">
                                    C
                                </span>

                                <span data-text-preloader="V" className="letters-loading">
                                    V
                                </span>

                                <span data-text-preloader="C" className="letters-loading">
                                    C
                                </span>

                                <span data-text-preloader="E" className="letters-loading">
                                    E
                                </span>

                                <span data-text-preloader="T" className="letters-loading">
                                    T
                                </span>
                            </div>
                        </div>
                        <div className="loader-section section-left"></div>
                        <div className="loader-section section-right"></div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Root;