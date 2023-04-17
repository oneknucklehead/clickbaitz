import React, { useRef } from 'react';
import Container from "../components/Container";
import homeWave from "../assets/images/home-wave.png";
// import homeWaveNew from "../assets/images/homeWaveBgnew.svg";
import "../assets/css/Homepage.css";
import Lottie from 'react-lottie';
import * as animationData from "../assets/lottie/69164-marketing-campaign-creative-3d-animation.json";
import Navbar from "../components/Navbar";
const HomePage = ({ waveRef, sections }) => {
    const textRef = useRef(null);
    // useEffect(() => {
    // window.addEventListener('scroll', () => {
    //     if (textRef.current != null) {
    //         if (window.scrollY < sections[0].clientHeight / 2.5) {
    //             textRef.current.style.marginTop = Math.round(window.scrollY * 1.1) + 'px';
    //         }
    //     }
    // });
    //  () => {


    // if (textRef.current != null) {
    //     if (window.scrollY < sections[0].clientHeight / 2.5) {
    //         textRef.current.style.marginTop = Math.round(scrollVal * 1.1) + 'px';
    //     }
    // }


    // });
    // return window.removeEventListener("scroll", handleScroll);
    // }, []);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        // rendererSettings: {
        //     preserveAspectRatio: 'xMidYMid slice'
        // }
    };
    return (
        <>
            <div className="h-full min-h-screen w-full relative bg-[#D0E7E9]"
            >
                <img ref={waveRef} src={homeWave} alt="homepage wave" className="w-full h-[20vh] object-cover sm:h-fit absolute -bottom-[2px]  z-10" />
                {/* <img ref={waveRef} src={homeWaveNew} alt="homepage wave" className="w-full sm:h-fit absolute bottom-0 xl:-bottom-12  z-10" /> */}
                <Container>
                    <div className="h-full min-h-screen">
                        <div className="grid grid-cols-1 lg:grid-cols-2  min-h-screen h-full px-8 sm:px-20 lg:px-0">
                            <span className="disp-rocket1 invisible lg:hidden">
                                <Navbar />
                            </span>
                            <div className="text-[#1B3654] text-center lg:text-left flex flex-col justify-end lg:justify-center items-start px-4 md:px-0">
                                <h3 className="w-full lg:w-fit text-4xl 2xl:text-5xl fontstyle-lato font-semibold"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                >We are the</h3>
                                <h1 className="w-full lg:w-fit break-all-custom text-5xl md:text-8xl 2xl:text-9xl sm:pt-2 pb-1 sm:pb-6 fontstyle-lato font-bold"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="100"
                                >Clickbaitz{" "}
                                    <span className="hidden lg:flex" ></span>
                                    Agency</h1>
                                <p ref={textRef} className="w-full lg:w-fit text-lg lg:text-xl font-semibold"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="200"
                                >Branding & Creative | Digital & Web Design | Advertising & Content</p>
                            </div>
                            <div className="flex justify-center lg:justify-center items-center lg:items-center h-fit w-full lg:w-fit lg:h-full z-0">
                                <span className="hidden 2xl:block  z-0">
                                    <Lottie options={defaultOptions}
                                        width={650}
                                        height={650}
                                    />
                                </span>
                                <span className="hidden xl:max-2xl:block z-0">
                                    <Lottie options={defaultOptions}
                                        width={500}
                                        height={500}
                                    />
                                </span>
                                <span className="hidden lg:max-xl:block z-0">
                                    <Lottie options={defaultOptions}
                                        width={430}
                                        height={430}
                                    />
                                </span>
                                <span className="sm:max-lg:block hidden z-0">
                                    <Lottie options={defaultOptions}
                                        width={370}
                                        height={370}
                                    />
                                </span>
                                <span className="disp-rocket1 z-0">
                                    <Lottie options={defaultOptions}
                                        width={330}
                                        height={330}
                                    />
                                </span>
                                <span className="disp-rocket2 pl-2 z-0">
                                    <Lottie options={defaultOptions}
                                        width={300}
                                        height={300}
                                    />
                                </span>
                            </div>
                        </div>

                    </div>

                </Container>

            </div>
        </>
    );
};

export default HomePage;