import React from 'react';
const EvernoteTeams = () => {
    return (
        <div>
            <div className="border-2 lg:w-8/12 lg:mx-auto  border-gray-200 rounded-lg p-8 lg:mb-24 mx-4 font-roboto">
                <div className="flex justify-between pb-4 lg:pb-0">
                    <h1 className='text-2xl font-semibold'>EVERNOTE TEAMS</h1>
                    <img src='https://evernote.com/img/icons/navigate-mobile.svg' alt="" className='sm:h-10 lg:h-16 cursor-pointer' />
                </div>
                    <span className="pb-2 text-4xl font-bold">$19.99</span>
                    <span className='text-md font-bold'> / USER / MONTH</span>
                    <p className='mt-8'>Collaborate and share knowledge to keep your team on the same page.</p>
            </div>
        </div>
    );
};

export default EvernoteTeams;