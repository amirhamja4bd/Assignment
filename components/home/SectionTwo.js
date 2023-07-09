import React from 'react';

const SectionTwo = () => {
    return (
        <div>
            <div className="bg-white text-gray-50">
                <div className="container grid grid-cols-12 mx-auto">
                    <div className="flex flex-col justify-center items-center col-span-12 align-middle bg-no-repeat bg-cover bg-white lg:col-span-8 lg:h-auto" style={{ backgroundImage: "url('https://evernote.com/c/assets/homepage-repackaging/task_hero_image@2x__en.png?2e28f0ff68efad3c')", backgroundPosition: "center center", backgroundBlendMode: "multiply", backgroundSize: "cover", minHeight: '300px' , maxHeight: '600px' , borderRadius: '20px'}}></div>
                    <div className="flex lg:flex-col flex-row flex-wrap justify-center items-center mx-auto col-span-12 p-6 lg:col-span-4 lg:p-10 ">
                        <div className=" pb-2 space-y-2 sm:w-[50%] lg:w-auto px-2 lg:px-0">
                            <div className="lg:border-none border rounded-lg lg:rounded-none p-2 lg:p-0">
                            <h1 className="text-xl font-bold text-black">WORK ANYWHERE.</h1>
                            <p className='text-black'>Keep important info handy—your notes sync automatically to all your devices. Make notes more useful by adding text, images, audio, scans, PDFs, and documents.</p>
                            </div>
                        </div>
                        
                        <div className="pt-3 pb-2 space-y-2 sm:w-[50%] lg:w-auto px-2 lg:px-0">
                            <div className="lg:border-none border rounded-lg lg:rounded-none p-2 lg:p-0">
                            <h1 className="text-xl font-bold text-black">REMEMBER EVERYTHING.</h1>
                            <p className='text-black'>Keep important info handy—your notes sync automatically to all your devices. Make notes more useful by adding text, images, audio, scans, PDFs, and documents.</p>
                            </div>
                        </div>
                        
                        <div className="pt-3 pb-2 space-y-2 sm:w-[50%] lg:w-auto px-2 lg:px-0">
                            <div className="lg:border-none border rounded-lg lg:rounded-none p-2 lg:p-0">
                            <h1 className="text-xl font-bold text-black">TURN TO-DO INTO DONE</h1>
                            <p className='text-black'>Keep important info handy—your notes sync automatically to all your devices. Make notes more useful by adding text, images, audio, scans, PDFs, and documents.</p>
                            </div>
                        </div>
                        
                        <div className="pt-3 pb-2 space-y-2 sm:w-[50%] lg:w-auto px-2 lg:px-0">
                            <div className="lg:border-none border rounded-lg lg:rounded-none p-2 lg:p-0">
                            <h1 className="text-xl font-bold text-black">FIND THINGS FAST</h1>
                            <p className='text-black'>Keep important info handy—your notes sync automatically to all your devices. Make notes more useful by adding text, images, audio, scans, PDFs, and documents.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;
