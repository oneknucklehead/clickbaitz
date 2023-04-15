import React, { useEffect, useRef } from 'react';
import "../assets/css/Sidebar.css";
import Lottie from 'react-lottie';
import * as animationData from "../assets/lottie/97422-blob.json";
import { Link } from "react-scroll";

const Sidebar = ({ setSidebarActive, activeSidebar }) => {
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && activeSidebar && !wrapperRef.current.contains(event.target)) {
                setSidebarActive(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef, activeSidebar, setSidebarActive]);

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

            <div
                className={`transition-custom-bg fixed right-0 overflow-hidden w-full h-[100vh]
                ${activeSidebar ? "opacity-100 z-50"
                        : "opacity-0 -z-50"}
            bg-[#d0e7e949]`}>
                <div id="sidebar" ref={wrapperRef} className={`transition-custom-sidebar absolute right-0 top-0 py-6 px-8 bg-[#1B3654]
                ${activeSidebar ? "w-full sm:w-[400px] h-full" : "w-[0px] h-full"}
                `}>
                    <div className="flex justify-end">
                        <button onClick={() => setSidebarActive(false)}
                            className="hidden sm:block relative font-semibold text-[#1B3654]"
                        >   <div className="absolute top-[40%] left-[25%] text-white z-50">
                                Close
                            </div>
                            <Lottie options={defaultOptions}
                                width={100}
                                height={100}
                            ></Lottie>
                        </button>
                        <button
                            onClick={() => setSidebarActive(false)}
                            className="block relative sm:hidden font-semibold text-[#1B3654]">
                            <div className="absolute top-[40%] left-[25%] text-white z-50 text-sm">
                                Close
                            </div>
                            <Lottie options={defaultOptions}
                                width={80}
                                height={80}
                            ></Lottie>

                        </button>
                    </div>

                    <div className="text-white text-4xl font-semibold tracking-wide">
                        Say <br />
                        Hello
                    </div>
                    {/* PHONE SCREEN */}
                    <div className="py-4 flex justify-between lg:hidden text-white text-sm"
                    >
                        <span className="flex flex-col">

                            <Link onClick={() => setSidebarActive(false)} to="home" activeClass="font-semibold" spy={true} smooth={true} duration={500}>
                                Home
                            </Link>
                            <Link onClick={() => setSidebarActive(false)} to="about" activeClass="font-semibold" spy={true} smooth={true} duration={500}>
                                About
                            </Link>
                        </span>

                        <span
                            className="flex flex-col"
                        >
                            <Link onClick={() => setSidebarActive(false)} to="services" activeClass="font-semibold" spy={true} smooth={true} duration={500}>
                                Services
                            </Link>
                            <Link onClick={() => setSidebarActive(false)} to="contact" activeClass="font-semibold" spy={true} smooth={true} duration={500}>
                                Contact Us
                            </Link>
                            <Link onClick={() => setSidebarActive(false)} to="cases" activeClass="font-semibold" spy={true} smooth={true} duration={500}>
                                Cases
                            </Link>
                        </span>
                    </div>
                    <div className="flex flex-col gap-4 py-4 lg:py-12">
                        <input type="text" className="text-white bg-transparent border-b-[1px] placeholder:font-semibold outline-none" placeholder="Say Hello" />
                        <input type="text" className="text-white bg-transparent border-b-[1px] placeholder:font-semibold outline-none" placeholder="Email" />
                        <textarea rows={3} className="text-white border-none text-area placeholder:font-semibold" placeholder="Your message" />
                        <button className="bg-[#D0E7E9] p-2 text-[#1B3654] my-4">
                            <span className="flex justify-between items-center font-bold text-sm">
                                <span>SEND</span>
                                <span>
                                    <svg width="20" height="12" viewBox="0 0 39 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M38.4142 16.4142C39.1953 15.6332 39.1953 14.3668 38.4142 13.5858L25.6863 0.857864C24.9052 0.0768156 23.6389 0.0768156 22.8579 0.857864C22.0768 1.63891 22.0768 2.90524 22.8579 3.68629L34.1716 15L22.8579 26.3137C22.0768 27.0948 22.0768 28.3611 22.8579 29.1421C23.6389 29.9232 24.9052 29.9232 25.6863 29.1421L38.4142 16.4142ZM0 17H37V13H0V17Z" fill="#1B3654" />
                                    </svg>
                                </span>
                            </span>
                        </button>
                    </div>
                    <div className="flex justify-between items-end">
                        {/* SOCIAL ICONS */}
                        <div className="flex gap-4 h-fit w-fit">
                            {/* FACEBOOK */}
                            <svg width="30" height="30" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.6097 5.10156C16.5521 5.10156 5.10156 16.5521 5.10156 30.6097C5.10156 44.6672 16.5521 56.1177 30.6097 56.1177C44.6672 56.1177 56.1177 44.6672 56.1177 30.6097C56.1177 16.5521 44.6672 5.10156 30.6097 5.10156ZM30.6097 10.2032C41.9101 10.2032 51.0161 19.3093 51.0161 30.6097C51.0161 40.8498 43.5303 49.2638 33.7185 50.7571V36.6927H39.6571L40.5887 30.6595H33.7185V27.3614C33.7185 24.8539 34.5353 22.6284 36.8821 22.6284H40.6485V17.3624C39.9853 17.2731 38.5856 17.0784 35.9404 17.0784C30.4154 17.0784 27.177 19.9965 27.177 26.6439V30.6595H21.4975V36.6927H27.177V50.7072C17.5247 49.0797 10.2032 40.737 10.2032 30.6097C10.2032 19.3093 19.3093 10.2032 30.6097 10.2032Z" fill="white" />
                            </svg>
                            {/* INSTAGRAM */}
                            <svg width="30" height="30" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.5515 8.05347C13.5189 8.05347 7.79749 13.7749 7.79749 20.8075V41.214C7.79749 48.2466 13.5189 53.968 20.5515 53.968H40.958C47.9906 53.968 53.712 48.2466 53.712 41.214V20.8075C53.712 13.7749 47.9906 8.05347 40.958 8.05347H20.5515ZM20.5515 13.1551H40.958C45.177 13.1551 48.6104 16.5885 48.6104 20.8075V41.214C48.6104 45.433 45.177 48.8664 40.958 48.8664H20.5515C16.3325 48.8664 12.8991 45.433 12.8991 41.214V20.8075C12.8991 16.5885 16.3325 13.1551 20.5515 13.1551ZM43.5088 15.7059C42.8323 15.7059 42.1835 15.9746 41.7051 16.453C41.2267 16.9314 40.958 17.5802 40.958 18.2567C40.958 18.9332 41.2267 19.582 41.7051 20.0604C42.1835 20.5388 42.8323 20.8075 43.5088 20.8075C44.1853 20.8075 44.8341 20.5388 45.3125 20.0604C45.7909 19.582 46.0596 18.9332 46.0596 18.2567C46.0596 17.5802 45.7909 16.9314 45.3125 16.453C44.8341 15.9746 44.1853 15.7059 43.5088 15.7059ZM30.7548 18.2567C23.7222 18.2567 18.0007 23.9782 18.0007 31.0107C18.0007 38.0433 23.7222 43.7648 30.7548 43.7648C37.7873 43.7648 43.5088 38.0433 43.5088 31.0107C43.5088 23.9782 37.7873 18.2567 30.7548 18.2567ZM30.7548 23.3583C34.9738 23.3583 38.4072 26.7917 38.4072 31.0107C38.4072 35.2298 34.9738 38.6632 30.7548 38.6632C26.5357 38.6632 23.1023 35.2298 23.1023 31.0107C23.1023 26.7917 26.5357 23.3583 30.7548 23.3583Z" fill="white" />
                            </svg>


                        </div>
                        {/* ADDRESS */}
                        <div className="text-right text-white">
                            <p className="font-bold tracking-wide leading-8">Find us here:</p>
                            <p className="font-light leading-4">47B/2 Konoha village<br />
                                Washington DC</p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Sidebar;