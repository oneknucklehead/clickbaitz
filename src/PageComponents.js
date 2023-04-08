import React, { useRef } from 'react';
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ClientPage from "./pages/ClientPage";
import brandLogo from "./assets/images/brandLogo.png";
import brandLogoWhite from "./assets/images/brandLogoWhite.png";
import Navbar from "./components/Navbar";


const PageComponents = () => {
    const buttonRef = useRef(null);
    const logoRef = useRef(null);
    const waveRef = useRef(null);
    const sections = document.getElementsByTagName('section');
    console.log(waveRef);
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

        if (current === "home") {
            buttonRef.current != null && (buttonRef.current.className = "bg-[#1B3654] transition-custom-button  font-bold text-white tracking-wide py-2 px-6 flex items-center gap-2 z-1");
            logoRef.current != null && (logoRef.current.src = brandLogo);
        }
        if (window.scrollY >= (sections[0].clientHeight - (logoRef.current?.offsetTop + logoRef.current?.offsetHeight + (waveRef.current?.clientHeight / 2)))) {
            buttonRef.current != null && (buttonRef.current.className = "bg-[#fff] transition-custom-button  font-bold text-[#1B3654] tracking-wide py-2 px-6 flex items-center gap-2 z-1");
            logoRef.current != null && (logoRef.current.src = brandLogoWhite);
        }
        if (current === "services") {
            buttonRef.current != null && (buttonRef.current.className = "bg-[#1B3654] transition-custom-button  font-bold text-white tracking-wide py-2 px-6 flex items-center gap-2 z-1");
            logoRef.current != null && (logoRef.current.src = brandLogo);
        }
        if (current === "cases") {
            buttonRef.current != null && (buttonRef.current.className = "bg-[#fff] transition-custom-button font-bold text-[#1B3654] tracking-wide py-2 px-6 flex items-center gap-2 z-1");
            logoRef.current != null && (logoRef.current.src = brandLogoWhite);
        }
        if (current === "contact") {
            buttonRef.current != null && (buttonRef.current.className = "bg-[#1B3654] transition-custom-button font-bold text-white tracking-wide py-2 px-6 flex items-center gap-2 z-1");
            logoRef.current != null && (logoRef.current.src = brandLogo);
        }


    });


    return (
        <>
            <div className="relative">
                <Navbar />
                <Header buttonRef={buttonRef} logoRef={logoRef} />
                <section id="home" className="min-h-[100vh]">
                    {/* bg-[#ffefcf]  */}
                    {/* sticky top-0 */}
                    <HomePage waveRef={waveRef} />
                </section>
                <section id="about" className="min-h-[100vh] bg-[#1B3654]">
                    <AboutPage />
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