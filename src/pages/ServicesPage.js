import React from 'react';
import Container from "../components/Container.js";
import serviceWave from "../assets/images/services-wave.png";
// import serviceBg from "../assets/images/services-bg.png";
import serviceBg from "../assets/images/blobanimation.svg";
const ServicesPage = () => {
    return (
        <div className="relative h-full w-full overflow-hidden ">
            <img src={serviceWave} alt="bg" className="absolute h-[4.5%] w-full object-cover sm:object-fill" />
            <Container>
                <div className="px-8 sm:px-12">
                    <span className="flex justify-center items-center">
                        <img src={serviceBg} alt="bg" className="absolute top-20 object-cover xl:object-contain md:w-[90%] h-[90%]" />
                    </span>
                    {/* <!-- component --> */}

                    <div class="min-h-screen py-20 flex flex-col justify-center sm:py-12">
                        <span className="flex justify-center items-center"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <h1 className="text-[#1B3654] fontstyle-lato font-semibold text-5xl sm:text-7xl pt-12 sm:py-12 z-10">Services</h1>
                        </span>
                        <div class="py-3 sm:max-w-5xl sm:mx-auto w-full px-8 sm:px-0">

                            <div class="relative text-[#1B3654] antialiased text-sm font-semibold">

                                {/* <!-- Vertical bar running through middle --> */}
                                <div class="hidden sm:block w-1 bg-[#1B3654] rounded-full absolute h-[90%] left-1/2 transform -translate-x-1/2 translate-y-[46px]"></div>

                                {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
                                <div class="mt-6 sm:mt-0 sm:mb-12"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="100">
                                    <div class="flex flex-col sm:flex-row items-center">
                                        <div class="flex justify-start w-full mx-auto items-center">
                                            <div class="w-full sm:w-1/2 sm:pr-8">
                                                <div class="p-4 break-all bg-[#1B3654] text-white rounded shadow">
                                                    We provide a variety of services to help businesses succeed in today's digital landscape. Our services include:
                                                </div>
                                            </div>
                                        </div>
                                        <div class="rounded-full border-[#1B3654] bg-white sm:bg-[#1B3654] sm:border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#1B3654] sm:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                                <div class="mt-6 sm:mt-0 sm:mb-12"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="200"
                                >
                                    <div class="flex flex-col sm:flex-row items-center">
                                        <div class="flex justify-end w-full mx-auto items-center">
                                            <div class="w-full sm:w-1/2 sm:pl-8">
                                                <div class="p-4 break-words bg-white rounded shadow">
                                                    Marketing services: Creation and implementation of customized marketing strategies to help you increase your business visibility and attract more customers.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="rounded-full bg-[#1B3654] border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
                                <div class="mt-6 sm:mt-0 sm:mb-12"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="300"
                                >
                                    <div class="flex flex-col sm:flex-row items-center">
                                        <div class="flex justify-start w-full mx-auto items-center">
                                            <div class="w-full sm:w-1/2 sm:pr-8">
                                                <div class="p-4 bg-[#1B3654] text-white rounded shadow">
                                                    Social Media Marketing/Management: Building a strong social media presence by creating engaging content and managing your social media accounts.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="rounded-full border-[#1B3654] bg-white sm:bg-[#1B3654] sm:border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#1B3654] sm:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                                <div class="mt-6 sm:mt-0"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="400"
                                >
                                    <div class="flex flex-col sm:flex-row items-center">
                                        <div class="flex justify-end w-full mx-auto items-center">
                                            <div class="w-full sm:w-1/2 sm:pl-8">
                                                <div class="p-4 bg-white rounded shadow">
                                                    Influencer Marketing: Leveraging the power of social media influencers to promote your brand and reach new audiences.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="rounded-full bg-[#1B3654] border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}

                                <div class="mt-6 sm:mt-0 sm:mb-12"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="500"
                                >
                                    <div class="flex flex-col sm:flex-row items-center">
                                        <div class="flex justify-start w-full mx-auto items-center">
                                            <div class="w-full sm:w-1/2 sm:pr-8">
                                                <div class="p-4 bg-[#1B3654] text-white rounded shadow">
                                                    Website Development and Design: Designing and developing standardize and pleasing, user-friendly websites that are optimized for search engines to help you convert visitors into customers.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="rounded-full border-[#1B3654] bg-white sm:bg-[#1B3654] sm:border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#1B3654] sm:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                                <div class="mt-6 sm:mt-0"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="600"
                                >
                                    <div class="flex flex-col sm:flex-row items-center">
                                        <div class="flex justify-end w-full mx-auto items-center">
                                            <div class="w-full sm:w-1/2 sm:pl-8">
                                                <div class="p-4 bg-white rounded shadow">
                                                    Display Advertising: Using a range of traditional marketing services, including print ads, billboards, and direct mail campaigns, to help you reach your target audience in new and innovative ways.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="rounded-full bg-[#1B3654] border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}

                                <div class="mt-6 sm:mt-0 sm:mb-12"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="700"
                                >
                                    <div class="flex flex-col sm:flex-row items-center">
                                        <div class="flex justify-start w-full mx-auto items-center">
                                            <div class="w-full sm:w-1/2 sm:pr-8">
                                                <div class="p-4 bg-[#1B3654] text-white rounded shadow">
                                                    Whatever your business needs are, we have the expertise and experience to help you succeed. Contact us today to learn more about how we can help you grow your business.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="rounded-full border-[#1B3654] bg-white sm:bg-[#1B3654] sm:border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#1B3654] sm:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </Container >

        </div >
    );
};

export default ServicesPage;