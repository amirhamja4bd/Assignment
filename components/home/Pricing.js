import React from 'react';
import icon from '../../assects/images/tick.svg'
import Image from 'next/image';

const Pricing = () => {
    const free = [
        "Take great notes",
        "Sync up to 2 devices",
        "60 MB monthly uploads",
        "25 MB max. note size",
        "Get organized with Home dashboard and 3 widgets",
        "Stay on top of it all with in-note tasks",
        "Find things fast with search and tags",
        "Clip web pages",
        "Attach PDFs, receipts, files, photos, images, and documents"
      ];
    const personal = [
        "Take great notes",
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
        "Manage tasks in one place",
        "Get offline access on mobile and desktop",
        "Search text inside images, docs, and PDFs",
        "Create custom templates",
        "Mark up images and PDFs"
    ];
    const enterprise = [
        "Take great notes",
        "Sync unlimited devices",
        "20 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access all widgets",
        "Connect both personal and workplace Google Calendar accounts",
        "Create, manage, and assign tasks to others, and easily track their progress",
        "Get offline access on mobile and desktop",
        "Search using Boolean terms to refine results",
        "Find content by location with geographic search",
        "Export notebooks as PDF files",
        "Integrate with Slack, Salesforce, Microsoft Teams, and others"
      ];
    return (
        <div>
            <section className="py-6 bg-white text-black">
                <div className="container mx-auto p-4 sm:p-10">
                    <div className="mb-16 space-y-4 text-center">
                        <h1 className="text-4xl font-semibold ">Find your Evernote</h1>
                        <p className="px-4 sm:px-8 lg:px-24 w-4/6 mx-auto">Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
                    </div>
                    <div className="grid  grid-cols-1 gap-6 mx-auto auto-rows-fr lg:max-w-full lg:gap-2 xl:gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div className="relative z-0 flex flex-col items-center p-8 border bg-gray-100 rounded-lg" style={{ zIndex: 1 }}>
                            <span className="absolute top-0 px-7 pt-1 pb-2 font-medium rounded-b-lg bg-primary text-white uppercase">Personal</span>
                            <p className="my-6 text-4xl font-bold text-black">FREE</p>
                            <ul className="flex-1 space-y-2">
                                {free.map((item, i)=>(
                                    <li key={i} className="flex items-center space-x-2">
                                    <Image src={icon} className='w-5 h-5 text-primary' alt="" />
                                    <span>{item}</span>
                                </li>
                                ))}
                            </ul>
                            <button className="px-4 py-2 mt-4 w-full font-semibold uppercase border-2 rounded-lg md:mt-12 sm:py-3 sm:px-8 bg-primary hover:bg-primaryHover transition-all duration-500">Subscribe</button>
                        </div>
                        
                        <div className="relative z-0 flex flex-col items-center p-8 border bg-gray-100 rounded-md" style={{ zIndex: 1 }}>
                            <span className="absolute top-0 px-7 pt-1 pb-2 font-medium rounded-b-lg bg-primary  text-white uppercase">PROFESSIONAL</span>
                            <p className="flex items-center justify-center my-6 space-x-2 font-bold">
                                <span className="text-lg line-through dark:text-gray-400">$17.99</span>
                                <span className="pb-2 text-4xl">$14.99</span>
                                <span className="text-lg">/month</span>
                            </p>
                            <ul className="flex-1 space-y-2">
                                {personal.map((item, i)=>(
                                    <li key={i} className="flex items-center space-x-2">
                                    <Image src={icon} className='w-5 h-5 text-primary' alt="" />
                                    <span>{item}</span>
                                </li>
                                ))}
                            </ul>
                            <button className="px-4 py-2 mt-4 w-full font-semibold uppercase border-2 rounded-md md:mt-12 sm:py-3 sm:px-8 border-primary hover:bg-primary transition-all duration-500">Subscribe</button>
                        </div>
                        
                        <div className="relative z-0 flex flex-col items-center p-8 border bg-gray-100 rounded-lg" style={{ zIndex: 1 }}>
                            <span className="absolute top-0 px-7 pt-1 pb-2 font-medium rounded-b-lg bg-primary text-white uppercase">Enterprise</span>
                            <p className="flex items-center justify-center my-6 space-x-2 font-bold">
                                <span className="text-lg line-through dark:text-gray-400">$20.99</span>
                                <span className="pb-2 text-4xl">$17.99</span>
                                <span className="text-lg">/month</span>
                            </p>
                            <ul className="flex-1 space-y-2">
                                {enterprise.map((item, i)=>(
                                    <li key={i} className="flex items-center space-x-2">
                                    <Image src={icon} className='w-5 h-5 text-primary' alt="" />
                                    <span>{item}</span>
                                </li>
                                ))}
                            </ul>
                            <button className="px-4 py-2 mt-4 w-full font-semibold uppercase border-2 rounded-md md:mt-12 sm:py-3 sm:px-8 border-primary hover:bg-primary transition-all duration-500">Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;