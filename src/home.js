import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import './Home.css';

const Home = () => {
    const mainRef = useRef(null);
    const cursorRef = useRef(null);
    const boxesRef = useRef([]);  // Define boxesRef as an array ref
    const h4Ref = useRef([]);
    const purpleRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (mainRef.current) {
            const locoScroll = new LocomotiveScroll({
                el: mainRef.current,
                smooth: true
            });

            locoScroll.on("scroll", ScrollTrigger.update);

            ScrollTrigger.scrollerProxy(mainRef.current, {
                scrollTop(value) {
                    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
                },
                getBoundingClientRect() {
                    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
                },
                pinType: mainRef.current.style.transform ? "transform" : "fixed"
            });

            ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
            ScrollTrigger.refresh();
        }

        document.addEventListener("mousemove", function (dets) {
            if (cursorRef.current) {
                cursorRef.current.style.left = dets.x + 20 + "px";
                cursorRef.current.style.top = dets.y + 20 + "px";
            }
        });

        // Example GSAP animations
        gsap.from(".page1 h1,.page1 h2", {
            y: 10,
            rotate: 10,
            opacity: 0,
            delay: 0.3,
            duration: 0.7
        });

        // Example ScrollTrigger timeline
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".page1 h1",
                scroller: mainRef.current,
                start: "top 27%",
                end: "top 0",
                scrub: 3
            }
        });

        tl.to(".page1 h1", { x: -100 }, "anim");
        tl.to(".page1 h2", { x: 100 }, "anim");
        tl.to(".page1 video", { width: "90%" }, "anim");


        var tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".page1 h1",
                scroller: mainRef.current,
                start: "top -115%",
                end: "top -120%",
                scrub: 3
            }
        });

        tl2.to(mainRef.current, {
            backgroundColor: "#fff",
        });

        var tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".page1 h1",
                scroller: mainRef.current,
                start: "top -280%",
                end: "top -300%",
                scrub: 3
            }
        });

        tl3.to(mainRef.current, {
            backgroundColor: "#0F0D0D"
        });

        boxesRef.current.forEach(function (elem) {
            if (elem) {
                elem.addEventListener("mouseenter", function () {
                    var att = elem.getAttribute("data-image");
                    cursorRef.current.style.width = "470px";
                    cursorRef.current.style.height = "370px";
                    cursorRef.current.style.borderRadius = "0";
                    cursorRef.current.style.backgroundImage = `url(${att})`;
                });
                elem.addEventListener("mouseleave", function () {
                    elem.style.backgroundColor = "transparent";
                    cursorRef.current.style.width = "20px";
                    cursorRef.current.style.height = "20px";
                    cursorRef.current.style.borderRadius = "50%";
                    cursorRef.current.style.backgroundImage = `none`;
                });
            }
        });

        h4Ref.current.forEach(function (elem) {
            elem.addEventListener("mouseenter", function () {
                purpleRef.current.style.display = "block";
                purpleRef.current.style.opacity = "1";
            });
            elem.addEventListener("mouseleave", function () {
                purpleRef.current.style.display = "none";
                purpleRef.current.style.opacity = "0";
            });
        });
    }, []);

    return (
        <><div>
            <div className="cursor" />
            <div id="nav">
                <div id="nav-part2">
                    <h4>Home</h4>
                    <h4>Work</h4>
                    <h4>Studio</h4>
                    <h4>Contact</h4>
                </div>
                <div id="nav-part3">
                    <div id="circle" />
                </div>
            </div>
            <div id="purple">
            </div>
            <div className="main">
                <div className="page1">
                    <div className="bg-animation">
                        <div id="stars" />
                        <div id="stars2" />
                        <div id="stars3" />
                        <div id="stars4" />
                    </div>
                    <h1>Microsoft Learn</h1>
                    <h2>Student Club</h2>
                    <video autoPlay muted loop src="https://duo-studio.co/assets/home/Duo%20Reel--Desktop-reduced.mp4" />
                </div>
                <div className="page2">
                    <h1>We are MLSC,</h1>
                    <div className="page2-container">
                        <div className="page2-left">
                            <h2>EMPOWERING STUDENTS,
                                IGNITING INNOVATION
                                Microsoft Learn
                                Student Club</h2>
                        </div>
                        <div className="page2-right">
                            <p>The Microsoft Learn Student Club is a dynamic and inclusive community of students passionate about
                                technology and eager to expand their knowledge and skills.
                                This club serves as a hub for students to explore the world of Microsoft technologies,
                                from coding and cloud computing to artificial intelligence and beyond..</p>
                            <button>About us</button>
                        </div>
                    </div>
                </div>
                <div className="page3">
                    <h1>Selected Works</h1>
                    <div className="page3-part1">
                        <img src="https://d33wubrfki0l68.cloudfront.net/aa3d2ff66de5f16336bd94fd68c3c2ce61e29f68/d5064/assets/home/home-casestudy-mgny.webp" alt />
                        <video autoPlay loop muted src="https://d33wubrfki0l68.cloudfront.net/a13ea7c2ca2f38134748966280e54af4340ce821/f976d/assets/home/projects_madegood-reduced.mp4" />
                    </div>
                </div>
                <div className="page4">
                    <div className="elem">
                        <img src="https://ventsabout.com/wp-content/uploads/2020/09/1c5bb2ce8ba9dc172d24646eff0ad495.jpg" alt />
                        <div className="text-div">
                            <h1>Dev Team</h1>
                            <h1>Dev Team</h1>
                        </div>
                        <img src="https://d33wubrfki0l68.cloudfront.net/188bb09da2a445d08ac5b4f706711772e50e8a17/e100a/assets/home/home-experience-2.webp" alt />
                    </div>
                    <div className="elem">
                        <img src="https://d33wubrfki0l68.cloudfront.net/3401770635e95968e300d88f8b9479ecbc008eeb/be2e5/assets/home/home-experience-1.webp" alt />
                        <div className="text-div">
                            <h1>Outreach Team</h1>
                            <h1>Outreach Team</h1>
                        </div>
                        <img src="https://d33wubrfki0l68.cloudfront.net/188bb09da2a445d08ac5b4f706711772e50e8a17/e100a/assets/home/home-experience-2.webp" alt />
                    </div>
                    <div className="elem">
                        <img src="https://d33wubrfki0l68.cloudfront.net/3401770635e95968e300d88f8b9479ecbc008eeb/be2e5/assets/home/home-experience-1.webp" alt />
                        <div className="text-div">
                            <h1>Corporate Team</h1>
                            <h1>Corporate Team</h1>
                        </div>
                        <img src="https://d33wubrfki0l68.cloudfront.net/188bb09da2a445d08ac5b4f706711772e50e8a17/e100a/assets/home/home-experience-2.webp" alt />
                    </div>
                </div>
                <div className="page5">
                    <h2>Events</h2>
                    <div className="box" data-image="https://law-arts.com/sites/default/files/styles/homeslide/public/Workshops%20%26%20Seminars.png?itok=wzFoSWSn">
                        <h3>Seminars and Workshops</h3>
                        <h4>2021</h4>
                    </div>
                    <div className="box" data-image="https://www.webtekno.com/images/editor/default/0003/45/aeb949ba1c92aa0a55bd438657bb2de0d9708db6.jpeg">
                        <h3>Hackathons and Competitions</h3>
                        <h4>2021</h4>
                    </div>
                    <div className="box" data-image="https://offers.pitsco.com/hubfs/Landing%20Page%20Images/Code-for-Good-Header-mobile-0820.gif">
                        <h3>Code For Good</h3>
                        <h4>2021</h4>
                    </div>
                    <div className="box" data-image="https://miro.medium.com/v2/resize:fit:643/0*x8MrT1gItcKAf-V_.png">
                        <h3>Industry Projects</h3>
                        <h4>2021</h4>
                    </div>
                    <div className="box" data-image="https://www.northstarmeetingsgroup.com/uploadedImages/Articles/How_To/Event_Planning/Event_Programming/virtual-networking-meetings.jpg?width=920&scale=both&mode=crop">
                        <h3>Networking Events</h3>
                        <h4>2021</h4>
                    </div>
                </div>
                <footer>
                </footer>
            </div>
        </div>
        </>
    );
};

export default Home;
