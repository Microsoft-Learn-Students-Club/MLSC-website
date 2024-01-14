import { Outlet } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import { useEffect } from "react";
import ScrollToTop from "../components/ScrollToTop";
import Loading from "../components/loading";

const Root = () => {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    const ctnPreloader = document.getElementById("ctn-preloader");

    setTimeout(() => {
      ctnPreloader.classList.add("loaded");
      document.body.classList.remove("no-scroll-y");

      if (ctnPreloader.classList.contains("loaded")) {
        setTimeout(() => {
          preloader.parentNode.removeChild(preloader);
        }, 1000);
      }
    }, 4000);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <section>
        <div id="preloader">
          <div id="ctn-preloader" className="ctn-preloader">
            <div className="animation-preloader">
              <Loading />
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
