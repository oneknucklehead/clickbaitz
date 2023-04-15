import React from 'react';
import Container from "../components/Container";

import aboutImg from "../assets/images/aboutImg.jpg";
import blobImage from "../assets/images/blobanimationAbout.svg";
import Lottie from 'react-lottie';
import * as animationData from "../assets/lottie/97422-blob.json";
import "../assets/css/AboutPage.css";


const AboutPage = () => {
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
            <Container>
                <div className="z-10 flex h-[100vh] flex-col-reverse justify-center text-resp px-8 sm:px-32 items-center lg:px-0 lg:grid lg:grid-cols-2 gap-24 overflow-clip">
                    <div className="flex flex-col justify-center z-10">
                        <h1 className="text-white text-5xl sm:text-6xl xl:max-2xl:text-7xl 2xl:text-8xl fontstyle-lato font-semibold"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >ABOUT US</h1>
                        <div className="h-[1px] w-[50%] bg-white my-4"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="100"
                        ></div>
                        <p className="text-left text-white text-sm sm:text-lg"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged.
                        </p>
                        <div className="flex gap-4 pt-4"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="300"
                        >
                            <button className="text-sm sm:text-base bg-white text-[#1B3654] border-[3px] border-white py-2 px-4 font-semibold">Services</button>
                            <button className="text-sm sm:text-base text-white font-semibold border-[3px] py-2 px-4 border-white">Hire Us</button>
                        </div>
                    </div>
                    <div className="lg:h-[100vh] transition-custom">
                        <div className="relative flex justify-center items-center h-full">
                            {/* <span className="hidden 2xl:block absolute w-full top-24 -right-24">
                                <Lottie options={defaultOptions}
                                    width={750}
                                    height={750}
                                ></Lottie>
                            </span>
                            <span className="hidden xl:max-2xl:block absolute w-full top-40 -right-24">
                                <Lottie options={defaultOptions}
                                    width={600}
                                    height={600}
                                ></Lottie>
                            </span>
                            <span className="hidden lg:max-xl:block absolute w-full top-52 -right-20">
                                <Lottie options={defaultOptions}
                                    width={500}
                                    height={500}
                                ></Lottie>
                            </span>
                            <span className="hidden md:max-lg:block absolute -right-32">
                                <Lottie options={defaultOptions}
                                    width={600}
                                    height={600}
                                ></Lottie>
                            </span>
                            <span className="hidden sm:max-md:block absolute -right-24">
                                <Lottie options={defaultOptions}
                                    width={400}
                                    height={400}
                                ></Lottie>
                            </span>
                            <span className="blob-resp block sm:hidden absolute -right-8">
                                <Lottie options={defaultOptions}
                                    width={300}
                                    height={400}
                                ></Lottie>
                            </span> */}

                            <span className="z-10 -right-32 absolute h-[200%] w-full">
                                <img src={blobImage} alt="about section" className="w-full h-full object-fill" />
                            </span>
                            <span className="z-10">
                                <img src={aboutImg} alt="about section" className="w-[100%] lg:w-[90%] object-cover" />
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default AboutPage;