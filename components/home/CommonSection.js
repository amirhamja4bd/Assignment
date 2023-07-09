import React from 'react';

const CommonSection = ({image , title}) => {
    return (
        <div>
            <section className="bg-white text-gray-900">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-6 lg:py-12 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <img src="https://evernote.com/c/assets/homepage-repackaging/task_icon.svg?aa8d4387b556ef76" alt="" className="object-contain w-16 mx-auto lg:mx-0" />
                        <h1 className="text-3xl sm:text-4xl font-bold ">{title}</h1>
                        {/* <h1 className="text-3xl sm:text-4xl font-bold ">Hit every
                            <span className="text-primary">deadline</span>
                        </h1> */}
                        <p className="mt-6 mb-4 text-xl sm:mb-4">Create and assign tasks inside your notes with due dates, flags, and reminders so nothing falls through the cracks.</p>
                        <p className=" text-primary inline-flex items-center justify-center lg:items-start lg:justify-start text-lg cursor-pointer font-medium"> See More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-3 h-3 animate-ping text-lg mt-2.5 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CommonSection;