import React from 'react';
import Container from "../components/Container";
import homeWave from "../assets/images/home-wave.png";
import "../assets/css/Homepage.css";
import Lottie from 'react-lottie';
import * as animationData from "../assets/lottie/69164-marketing-campaign-creative-3d-animation.json";
const HomePage = ({ waveRef }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <>
            <div className="h-[100vh] w-full relative bg-[#D0E7E9]"
            >
                <div className="w-full">
                    <img ref={waveRef} src={homeWave} alt="homepage wave" className="w-full absolute bottom-0" />
                </div>
                <Container>
                    <div className="h-[100vh]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                            <div className="text-[#1B3654] text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
                                <h3 className="text-4xl 2xl:text-5xl fontstyle-lato font-semibold"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                >We are the</h3>
                                <h1 className="break-all-custom text-6xl md:text-8xl 2xl:text-9xl sm:pt-2 pb-3 sm:pb-6 fontstyle-lato font-bold"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="100"
                                >Clickbaitz{" "}
                                    <span className="hidden lg:flex" ></span>
                                    Agency</h1>
                                <p className="text-lg lg:text-xl font-semibold px-4"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="200"
                                >Branding & Creative | Digital & Web Design | Advertising & Content</p>
                            </div>
                            <div className="hidden lg:flex justify-center items-center w-fit h-full">
                                <span className="hidden 2xl:block">
                                    <Lottie options={defaultOptions}
                                        width={650}
                                        height={650}
                                    />
                                </span>
                                <span className="hidden xl:max-2xl:block">
                                    <Lottie options={defaultOptions}
                                        width={500}
                                        height={500}
                                    />
                                </span>
                                <span className="hidden lg:max-xl:block">
                                    <Lottie options={defaultOptions}
                                        width={430}
                                        height={430}
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