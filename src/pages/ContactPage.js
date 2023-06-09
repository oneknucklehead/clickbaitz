import React, { useEffect, useRef, useState } from 'react';
import "../assets/css/Contact.css";
import contactBg from "../assets/images/contact-wave.png";

import contactImg from "../assets/images/Coffee.png";
const ContactPage = () => {
    const textRef = useRef(null);
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);
    const [textCount] = useState(10);
    window.addEventListener("scroll", () => {
        let pos = window.scrollY + 1000;
        let pos2 = window.scrollY - 9000;
        // console.log(window.scrollY);
        textRef1.current != null && (textRef1.current.style.left = (-pos * 0.2) + 'px');
        textRef2.current != null && (textRef2.current.style.left = (pos2 * 0.2) + 'px');
    });

    let arr = [];
    for (let i = 0; i < textCount; i++) {
        arr.push(
            <p className="">
                Let's work together
            </p>
        );
    }

    useEffect(() => {
        if (textRef != null) {
            textRef.current.innerHTML = textRef.current.innerText.split("").map(
                (char, i) => `<span style="transform:rotate(${i * 8.6}deg)">${char}</span>`
            ).join("");
        }
    }, []);
    return (
        <>
            <div className="w-full">
                <img src={contactBg} alt="contact wave alt text" className="w-full" />
            </div>
            <div className="flex flex-col justify-center min-h-screen relative">
                <div className="h-full w-full flex justify-evenly items-center flex-col">

                    <div className="relative uppercase mt-[186px] mb-4">
                        <div className="flex flex-col">

                            <div
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                ref={textRef1} className="overflow-hidden fontstyle-lato font-regular whitespace-nowrap text-[#AFD3DB] bg-text leading-none absolute position1 flex justify-start gap-4 -left-[1000px]">
                                {arr}
                            </div>
                            <div
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                ref={textRef2} className="overflow-hidden fontstyle-lato bg-text font-bold text-[#AFD3DB] whitespace-nowrap leading-none absolute position2 flex justify-start gap-4 -left-[2000px]">
                                {arr}
                            </div>
                        </div>
                        <div className="flex w-full justify-center xl:ml-14">

                            <div className="circle md:ml-20 h-fit w-full"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            // data-aos-delay="200"
                            >
                                <img className="logo object-contain" src={contactImg} alt="coffee contact section"></img>
                                <div className="text font-semibold">
                                    <p className="text-[#1B3654] fontstyle-lato" ref={textRef}>web designing - marketing - advertising -</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Container> */}

                    <div className="lg:pl-40 xl:pl-60 flex flex-col justify-between items-center w-full h-full px-12 sm:px-24  sm:max-lg:pt-0 sm:pt-48">
                        <div className="my-10 w-full h-fit text-[#1B3654] break-all flex gap-10 flex-wrap justify-between"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="100"
                        >
                            <div>
                                <h3 className="text-xl sm:text-2xl font-semibold">Let's work together</h3>
                                <div className="text-lg py-2">
                                    <p className="text-sm sm:text-lg w-fit">Email us at:</p>
                                    <p className="text-base sm:text-lg">hello@clickbaitz.com</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl font-semibold">Connect with us</h3>
                                <div className="text-lg py-2">

                                    <p className="text-sm sm:text-lg w-fit">+91 9147070648</p>
                                    <p className="text-base sm:text-lg">hello@clickbaitz.com</p>
                                </div>
                            </div>
                            <div className="">
                                <h3 className="text-xl sm:text-2xl font-semibold">Stationed at:</h3>
                                <div className="text-lg py-2">
                                    <p className="text-sm sm:text-lg w-fit"> 31 Dr Ambedkar Sarani, Topsia Road
                                    </p>
                                    <p className="text-base sm:text-lg">Arcadia Center 3rd floor Kolkata- West Bengal, 700046</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 justify-between items-center w-full h-full pb-4"

                        // data-aos-delay="200"
                        >
                            <div className="text-sm text-[#1B3654] fontstyle-lato"

                            >
                                © ClickBaitz Agency {new Date().getFullYear()}
                            </div>
                            <div className="flex gap-4">
                                <a href="https://www.facebook.com/clickbaiitz" target="_blank" rel="noreferrer">
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 3C9.7335 3 3 9.7335 3 18C3 26.2665 9.7335 33 18 33C26.2665 33 33 26.2665 33 18C33 9.7335 26.2665 3 18 3ZM18 6C24.6452 6 30 11.3548 30 18C30 24.0217 25.598 28.9695 19.8281 29.8477V21.5771H23.3203L23.8682 18.0293H19.8281V16.0898C19.8281 14.6153 20.3085 13.3066 21.6885 13.3066H23.9033V10.21C23.5133 10.1575 22.6903 10.043 21.1348 10.043C17.8858 10.043 15.9814 11.759 15.9814 15.668V18.0293H12.6416V21.5771H15.9814V29.8184C10.3054 28.8613 6 23.9554 6 18C6 11.3548 11.3548 6 18 6Z" fill="#1B3654" />
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/click.baitz_/" target="_blank" rel="noreferrer">

                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 4.5C7.8645 4.5 4.5 7.8645 4.5 12V24C4.5 28.1355 7.8645 31.5 12 31.5H24C28.1355 31.5 31.5 28.1355 31.5 24V12C31.5 7.8645 28.1355 4.5 24 4.5H12ZM12 7.5H24C26.481 7.5 28.5 9.519 28.5 12V24C28.5 26.481 26.481 28.5 24 28.5H12C9.519 28.5 7.5 26.481 7.5 24V12C7.5 9.519 9.519 7.5 12 7.5ZM25.5 9C25.1022 9 24.7206 9.15804 24.4393 9.43934C24.158 9.72064 24 10.1022 24 10.5C24 10.8978 24.158 11.2794 24.4393 11.5607C24.7206 11.842 25.1022 12 25.5 12C25.8978 12 26.2794 11.842 26.5607 11.5607C26.842 11.2794 27 10.8978 27 10.5C27 10.1022 26.842 9.72064 26.5607 9.43934C26.2794 9.15804 25.8978 9 25.5 9ZM18 10.5C13.8645 10.5 10.5 13.8645 10.5 18C10.5 22.1355 13.8645 25.5 18 25.5C22.1355 25.5 25.5 22.1355 25.5 18C25.5 13.8645 22.1355 10.5 18 10.5ZM18 13.5C20.481 13.5 22.5 15.519 22.5 18C22.5 20.481 20.481 22.5 18 22.5C15.519 22.5 13.5 20.481 13.5 18C13.5 15.519 15.519 13.5 18 13.5Z" fill="#1B3654" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* </Container> */}
                </div>

            </div>

        </ >
    );
};

export default ContactPage;