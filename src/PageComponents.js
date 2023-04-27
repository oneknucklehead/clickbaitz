import React, { useRef, useState } from 'react';
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ClientPage from "./pages/ClientPage";
import brandLogo from "./assets/images/brandLogo.png";
import brandLogoWhite from "./assets/images/brandLogoWhite.png";
import smileywhite from "./assets/images/smileynew.png";
import smileyblue from "./assets/images/smileyblue.png";
import Navbar from "./components/Navbar";


const PageComponents = () => {
    const stylingBtnBlue = "bg-[#1B3654] transition-custom-button font-bold text-white tracking-wide sm:pl-4 sm:pr-3 flex items-center justify-evenly gap-1 z-1 rounded-full sm:rounded-none p-2 sm:py-1";
    const stylingBtnWhite = "bg-[#fff] transition-custom-button font-bold text-[#1B3654] tracking-wide  sm:pl-4 sm:pr-3 flex items-center justify-evenly gap-1 z-1 rounded-full sm:rounded-none p-2 sm:py-1";
    const buttonRef = useRef(null);
    const logoRef = useRef(null);
    const waveRef = useRef(null);
    const [activeSidebar, setSidebarActive] = useState(false);

    const sections = document.getElementsByTagName('section');
    window.addEventListener('scroll', () => {
        // console.log("scrollY" + window.scrollY);
        let current = '';
        for (let i = 0; i < sections.length; i++) {
            const sectionTop = sections[i].offsetTop;
            // const sectionHeight = sections[i].clientHeight;
            // const id = sections[i].getAttribute('id');
            // console.log("id: " + id + " sectionTop: " + sectionTop + " sectionheight: " + sectionHeight);
            if (buttonRef.current != null && window.scrollY + (buttonRef.current.clientHeight / 2) >= (sectionTop)) {
                current = "";
                current = sections[i].getAttribute('id');
            }
        }
        console.log(buttonRef);
        if (current === "home") {
            buttonRef.current != null && (buttonRef.current.className = stylingBtnBlue);
            buttonRef.current != null && (buttonRef.current.children[1].src = smileywhite);

            logoRef.current != null && (logoRef.current.src = brandLogo);
        }
        if (window.scrollY >= (sections[0].clientHeight - (logoRef.current?.offsetTop + logoRef.current?.offsetHeight + (waveRef.current?.clientHeight / 2)))) {
            buttonRef.current != null && (buttonRef.current.className = stylingBtnWhite);
            buttonRef.current != null && (buttonRef.current.children[1].src = smileyblue);
            logoRef.current != null && (logoRef.current.src = brandLogoWhite);
        }
        if (current === "services") {
            buttonRef.current != null && (buttonRef.current.className = stylingBtnBlue);
            buttonRef.current != null && (buttonRef.current.children[1].src = smileywhite);

            logoRef.current != null && (logoRef.current.src = brandLogo);
        }
        if (current === "cases") {
            buttonRef.current != null && (buttonRef.current.className = stylingBtnWhite);
            buttonRef.current != null && (buttonRef.current.children[1].src = smileyblue);
            logoRef.current != null && (logoRef.current.src = brandLogoWhite);
        }
        if (current === "contact") {
            buttonRef.current != null && (buttonRef.current.className = stylingBtnBlue);
            buttonRef.current != null && (buttonRef.current.children[1].src = smileywhite);
            logoRef.current != null && (logoRef.current.src = brandLogo);
        }


    });


    return (
        <>
            <div className="relative overflow-clip">
                <Navbar />
                <Header buttonRef={buttonRef} logoRef={logoRef} activeSidebar={activeSidebar} setSidebarActive={setSidebarActive} />
                <section id="home" className="min-h-[100vh] ">
                    {/* bg-[#ffefcf]  */}
                    {/* sticky top-0 */}
                    <HomePage waveRef={waveRef} sections={sections} />
                </section>
                <section id="about" className="min-h-[100vh] bg-[#1B3654]">
                    <AboutPage activeSidebar={activeSidebar} setSidebarActive={setSidebarActive} />
                </section>
                <section id="services" className="min-h-[100vh] bg-[#D0E7E9]">
                    <ServicesPage />
                </section>
                <section id="cases" className=" bg-[#1B3654]">
                    <ClientPage />
                </section>
                <section id="contact" className="min-h-[100vh] bg-[#D0E7E9]">
                    <ContactPage />
                </section>

            </div>
        </>
    );
};

export default PageComponents;