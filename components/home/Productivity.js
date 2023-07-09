import Link from 'next/link';
import React from 'react';

const Productivity = () => {
    return (
        <div>
            <section className="font-roboto">
                <div className="container mx-auto flex flex-col items-center px-4 pt-40 pb-20 text-center  overflow-x-hidden">
                    <h1 className="text-4xl font-bold leadi sm:text-5xl">Find your productivity happy place</h1>
                    <p className="px-8 mt-8 mb-12 text-xl">See whats possible with Evernote.</p>
                    <div className="flex flex-wrap justify-center">
                        <div className=" w-screen">
                            <iframe className="px-5 sm:w-4/6 mx-auto aspect-video" src="https://www.youtube.com/embed/TwXilp2mUtE" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Productivity;
