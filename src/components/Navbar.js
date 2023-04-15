import { Link } from "react-scroll";
import "../assets/css/Navbar.css";
import { useRef } from "react";

const Navbar = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);
    const casesRef = useRef(null);
    const contactRef = useRef(null);
    const link = document.getElementsByTagName('ul');
    const links = document.getElementsByTagName('li');
    const sections = document.getElementsByTagName('section');

    // link1: 774+18
    // link2: 774+36
    // link3: 774+54
    // link4: 774+72
    // link5: 774+90

    // 961 * 2;

    window.addEventListener('scroll', () => {
        let remHeights = [];
        // console.log(window.scrollY);
        // console.log("homesection height" + sections[0].clientHeight);
        // console.log("about height" + sections[1].clientHeight);
        // console.log("offsetTop height" + link[0].offsetTop);

        let remHeight = sections[0].clientHeight - (link[0].offsetTop + 18);
        // console.log("remHeight" + (remHeight));
        // console.log("calc value" + (sections[1].clientHeight + remHeight + 54));

        for (let i = 0; i < links.length; i++) {
            remHeights.push(remHeight);
            remHeight -= 18;
        }
        if ((window.scrollY >= (sections[1].clientHeight + sections[2].clientHeight + sections[3].clientHeight + 27 + remHeights[0])) || ((window.scrollY >= (sections[1].clientHeight + remHeights[0] + 25)) && (window.scrollY <= (sections[1].clientHeight + sections[2].clientHeight + remHeights[0] + 27)))) {
            homeRef.current != null && (homeRef.current.className = "text-[#1B3654] text-[12px]");
        } else {
            homeRef.current != null && (homeRef.current.className = "text-[#fff] text-[12px]");
        }
        if ((window.scrollY >= (sections[1].clientHeight + sections[2].clientHeight + sections[3].clientHeight + 27 + remHeights[1])) || ((window.scrollY >= (sections[1].clientHeight + remHeights[1] + 25)) && (window.scrollY <= (sections[1].clientHeight + sections[2].clientHeight + remHeights[1] + 27)))) {
            aboutRef.current != null && (aboutRef.current.className = "text-[#1B3654] text-[12px]");
        } else {
            aboutRef.current != null && (aboutRef.current.className = "text-[#fff] text-[12px]");
        }
        if ((window.scrollY >= (sections[1].clientHeight + sections[2].clientHeight + sections[3].clientHeight + 27 + remHeights[2])) || ((window.scrollY >= (sections[1].clientHeight + remHeights[2] + 25)) && (window.scrollY <= (sections[1].clientHeight + sections[2].clientHeight + remHeights[2] + 27)))) {
            servicesRef.current != null && (servicesRef.current.className = "text-[#1B3654] text-[12px]");
        } else {
            servicesRef.current != null && (servicesRef.current.className = "text-[#fff] text-[12px]");
        }
        if ((window.scrollY >= (sections[1].clientHeight + sections[2].clientHeight + sections[3].clientHeight + 27 + remHeights[3])) || ((window.scrollY >= (sections[1].clientHeight + remHeights[3] + 25)) && (window.scrollY <= (sections[1].clientHeight + sections[2].clientHeight + remHeights[3] + 27)))) {
            casesRef.current != null && (casesRef.current.className = "text-[#1B3654] text-[12px]");
        } else {
            casesRef.current != null && (casesRef.current.className = "text-[#fff] text-[12px]");

        }
        if ((window.scrollY >= (sections[1].clientHeight + sections[2].clientHeight + sections[3].clientHeight + 27 + remHeights[4])) || ((window.scrollY >= (sections[1].clientHeight + remHeights[4] + 25)) && (window.scrollY <= (sections[1].clientHeight + sections[2].clientHeight + remHeights[4] + 27)))) {
            contactRef.current != null && (contactRef.current.className = "text-[#1B3654] text-[12px]");
        }
        else {
            contactRef.current != null && (contactRef.current.className = "text-[#fff] text-[12px]");
        }


    });
    return (
        <nav className="hidden lg:block">
            <ul className="fixed text-white text-[12px] z-50 md:bottom-8 lg:bottom-12 2xl:bottom-20 left-16"
                style={{
                    fontFamily: "Poppins"
                }}
            >
                <li ref={homeRef}>
                    <Link id="home-anchor" to="home" activeClass="font-semibold" spy={true} smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li ref={aboutRef}>
                    <Link id="about-anchor" to="about" activeClass="font-semibold" spy={true} smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li ref={servicesRef}>
                    <Link id="services-anchor" to="services" activeClass="font-semibold" spy={true} smooth={true} duration={500}>
                        Services
                    </Link>
                </li>
                <li ref={casesRef}>
                    <Link id="cases-anchor" to="cases" activeClass="font-semibold" spy={true} smooth={true} duration={500}>
                        Cases
                    </Link>
                </li>
                <li ref={contactRef}>
                    <Link id="contact-anchor" to="contact" activeClass="font-semibold" spy={true} smooth={true} duration={500}>
                        Contact Us
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;