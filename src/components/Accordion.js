import React from 'react';
import dummyImg from "../assets/images/dummy.jpg";

const Accordion = ({ id, last = false, name, tags, categoryTags, img = dummyImg, desc = "Brief description will go here" }) => {
    return (
        <>
            <div
                class={`rounded-none border border-l-0 border-r-0 border-t-0 ${last && "border-b-0"}`}>
                <h2 class="mb-0" id={`flush-heading${id}`}>
                    <button
                        class="group text-white relative flex gap-4 lg:grid lg:grid-cols-3 w-full justify-between lg:justify-center  items-center md:items-start  rounded-none border-0 py-4 px-5 text-left transition [overflow-anchor:none]"
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target={`#flush-collapse${id}`}
                        aria-expanded="false"
                        aria-controls={`flush-collapse${id}`}>
                        <span className="font-semibold flex h-full items-center text-lg lg:text-2xl">

                            {name}
                        </span>
                        <div className="hidden lg:flex lg:flex-col pb-4">
                            <span className="text-base lg:text-xl">What we do</span>
                            <span className="text-xs text-[#e0e0e0]">
                                {tags.map((tag, index) => (
                                    <span key={index}>{index === (categoryTags.length - 1) ? `${tag}, ` : `${tag}`}</span>
                                ))}
                            </span>
                        </div>
                        <span className="hidden lg:flex items-center">
                            <div className="flex flex-col pb-4">
                                <span className="text-base lg:text-xl">
                                    Category
                                </span>
                                <span className="text-xs text-[#e0e0e0]">
                                    {categoryTags.map((tag, index) => (
                                        <span key={index}>{index === (categoryTags.length - 1) ? `${tag}` : `${tag}, `}</span>
                                    ))}
                                </span>
                            </div>
                            <span
                                className="border-2 h-full border-white rounded-full p-4 ml-auto rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 motion-reduce:transition-none">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1C9 0.447715 8.55228 -2.41411e-08 8 0C7.44772 2.41411e-08 7 0.447715 7 1L9 1ZM7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L15.0711 10.3431C15.4616 9.95262 15.4616 9.31946 15.0711 8.92893C14.6805 8.53841 14.0474 8.53841 13.6569 8.92893L8 14.5858L2.34315 8.92893C1.95262 8.53841 1.31946 8.53841 0.928933 8.92893C0.538408 9.31946 0.538408 9.95262 0.928933 10.3431L7.29289 16.7071ZM7 1L7 16L9 16L9 1L7 1Z" fill="white" />
                                </svg>
                            </span>
                        </span>
                        <span className="flex lg:hidden">
                            <span
                                class="border-2 border-white rounded-full p-2 ml-auto rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 motion-reduce:transition-none">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1C9 0.447715 8.55228 -2.41411e-08 8 0C7.44772 2.41411e-08 7 0.447715 7 1L9 1ZM7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L15.0711 10.3431C15.4616 9.95262 15.4616 9.31946 15.0711 8.92893C14.6805 8.53841 14.0474 8.53841 13.6569 8.92893L8 14.5858L2.34315 8.92893C1.95262 8.53841 1.31946 8.53841 0.928933 8.92893C0.538408 9.31946 0.538408 9.95262 0.928933 10.3431L7.29289 16.7071ZM7 1L7 16L9 16L9 1L7 1Z" fill="white" />
                                </svg>

                            </span>

                        </span>
                    </button>
                </h2>
                <div
                    id={`flush-collapse${id}`}
                    class="!visible hidden"
                    data-te-collapse-item
                    aria-labelledby={`flush-heading${id}`}
                    data-te-parent="#accordionFlushExample">
                    <div className="py-4 px-5 gap-4 grid grid-cols-2 lg:grid-cols-3 text-white break-words">
                        <div className="flex flex-col lg:hidden  pb-4">
                            <span className="text-base lg:text-xl">What we do</span>
                            <span className="text-xs text-[#e0e0e0]">
                                {tags.map((tag, index) => (
                                    <span key={index}>{index === (categoryTags.length - 1) ? `${tag}, ` : `${tag}`}</span>
                                ))}
                            </span>
                        </div>
                        <div className="flex flex-col lg:hidden pb-4">
                            <span >Category</span>
                            <span className="text-xs text-[#e0e0e0]">{categoryTags.map((tag, index) => (
                                <span key={index}>
                                    {index === (categoryTags.length - 1) ? `${tag}` : `${tag}, `}
                                </span>
                            ))}</span>
                        </div>
                        <div className="col-span-2 order-last lg:order-first lg:col-span-1"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            {desc}
                        </div>
                        <div className="col-span-2 lg:col-span-2">
                            <img src={img} alt="clientImg"
                                className="w-full object-cover max-h-[800px]"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Accordion;