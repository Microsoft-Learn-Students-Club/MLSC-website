import { Outlet } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import { useEffect, useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import bgvideo from "../assets/mlsc.mp4";

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloader = document.getElementById("preloader");
    const ctnPreloader = document.getElementById("ctn-preloader");

    let removeTimeout = null;
    const loadTimeout = setTimeout(() => {
      if (ctnPreloader) {
        ctnPreloader.classList.add("loaded");
      }
      document.body.classList.remove("no-scroll-y");

      if (ctnPreloader?.classList.contains("loaded")) {
        removeTimeout = setTimeout(() => {
          if (preloader?.parentNode) {
            preloader.parentNode.removeChild(preloader);
          }
          setLoading(false);
        }, 1000);
        return;
      }

      setLoading(false);
    }, 4000);

    return () => {
      clearTimeout(loadTimeout);
      if (removeTimeout) {
        clearTimeout(removeTimeout);
      }
    };
  }, []);

  return (
    <>
      {loading ? (
        <section>
          <div id="preloader">
            <div id="ctn-preloader" className="ctn-preloader">
              <div className="animation-preloader">
                <video src={bgvideo} autoPlay muted></video>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          <ScrollToTop />
          <Navbar />
          <Outlet />
        </>
      )}
    </>
  );
};

export default Root;
