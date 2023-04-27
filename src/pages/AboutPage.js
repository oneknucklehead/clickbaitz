import React from 'react';
import Container from "../components/Container";

import aboutImg from "../assets/images/aboutImg.jpg";
import blobImage from "../assets/images/blobanimationAbout.svg";
import "../assets/css/AboutPage.css";
import { Link } from "react-scroll";


const AboutPage = ({ activeSidebar, setSidebarActive }) => {

    return (
        <Container>
            <div className="flex h-fit min-h-[100vh] flex-col-reverse justify-center text-resp px-8 sm:px-32 items-center lg:px-0 xl:grid xl:grid-cols-2 gap-24 overflow-clip">
                <div className="flex flex-col justify-center">
                    <h1 className="text-white text-5xl sm:text-6xl xl:max-2xl:text-7xl 2xl:text-8xl fontstyle-lato font-semibold"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >ABOUT US</h1>
                    <div className="h-[1px] w-[50%] bg-white my-4"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                    ></div>
                    <p className="text-left text-white text-sm md:text-lg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        At <span className="bg-[#137D94] px-1">
                            Click Baitz
                        </span>, we believe that audacity is the key to success in today's competitive marketplace. We offer a comprehensive suite of branding, creative design, and marketing services that are designed to help your business stand out from the crowd and grow to new heights.
                        <br /><br />Our team is made up of experienced professionals who are passionate about what they do. We work closely with our clients to understand their unique needs and goals, and we're dedicated to doing whatever it takes to help them achieve success. Whether you're looking for a new brand identity, a fresh marketing strategy, or innovative creative design solutions, we've got you covered.
                        <br /><br />We work with clients from a diverse range of industries, and we're always eager to take on new challenges. Our approach is collaborative and transparent, and we pride ourselves on building long-term relationships with our clients. So if you're ready to take your business to the next level, we're here to help. Get in touch with us today to learn more about how we can help you achieve your goals.

                    </p>
                    <div className="flex gap-4 pb-10">

                        <div className="flex gap-4 pt-4"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="300"
                        >
                            <Link id="services-anchor" to="services" spy={true} smooth={true} duration={500}>

                                <button className="text-sm sm:text-base bg-white text-[#1B3654] border-[3px] border-white py-2 px-4 font-semibold">Services</button>
                            </Link>
                        </div>
                        <div className="flex gap-4 pt-4"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="400"
                        >
                            <button onClick={() => setSidebarActive(true)} className="text-sm sm:text-base text-white font-semibold border-[3px] py-2 px-4 border-white">Hire Us</button>
                        </div>
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
    );
};

export default AboutPage;