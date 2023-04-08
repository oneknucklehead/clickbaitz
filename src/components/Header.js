import React, { useState } from 'react';
import brandLogo from "../assets/images/brandLogo.png";
import Sidebar from "./Sidebar";
import "../assets/css/Header.css";

const Header = ({ buttonRef, logoRef }) => {
    const [activeSidebar, setSidebarActive] = useState(false);

    return (
        <>
            <div className="z-50 pt-8 px-6 sm:px-16 bg-transparent fixed w-full top-0 flex justify-between items-center flex-wrap gap-4">
                <div className="">
                    <img ref={logoRef} src={brandLogo} alt="brand logo" className="h-10" />
                </div>
                <div>
                    <button ref={buttonRef} onClick={() => setSidebarActive(!activeSidebar)} className={`
                    ${activeSidebar ? "opacity-0" : "opacity-100"}
                    bg-[#1B3654] transition-custom-button  font-bold text-white tracking-wide py-2 px-6 flex items-center gap-2 z-1`}>
                        Say hello
                    </button>
                </div>
            </div>
            <div className="relative">
                <Sidebar setSidebarActive={setSidebarActive} activeSidebar={activeSidebar} />
            </div>
        </>
    );
};

export default Header;