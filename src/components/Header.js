import React, { useState } from 'react';
import brandLogo from "../assets/images/brandLogo.png";
import smiley from "../assets/images/smileynew.png";
import Sidebar from "./Sidebar";
import "../assets/css/Header.css";

const Header = ({ buttonRef, logoRef }) => {
    const [activeSidebar, setSidebarActive] = useState(false);

    return (
        <>
            <div className=" z-50 pt-8 px-6 sm:px-16 bg-transparent fixed w-full top-0 flex justify-between items-center flex-wrap gap-4">
                <div className="">
                    <img ref={logoRef} src={brandLogo} alt="brand logo" className="h-10" />
                </div>
                <div>
                    <button ref={buttonRef} onClick={() => setSidebarActive(!activeSidebar)} className={`
                    ${activeSidebar ? "opacity-0" : "opacity-100"}
                    bg-[#1B3654] rounded-full sm:rounded-none p-2 sm:py-1 gap-1 transition-custom-button  font-bold text-white tracking-wide sm:pl-4 sm:pr-3 flex items-center justify-evenly
                     z-1`}>
                        <span className="hidden sm:block mt-px">
                            Say hello
                        </span>
                        <img src={smiley} alt="brand logo" className="h-fit" />
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