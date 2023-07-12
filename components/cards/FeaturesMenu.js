import React from 'react';

const FeaturesMenu = () => {

    const people = [
            {
              imageUrl: 'https://evernote.com/c/assets/homepage-repackaging/task_icon.svg?aa8d4387b556ef76',
              name: 'WORK ANYWHERE',
              email: 'Keep important info handy'
            },
            {
              imageUrl: 'https://evernote.com/c/assets/homepage-repackaging/task_icon.svg?aa8d4387b556ef76',
              name: 'WORK ANYWHERE',
              email: 'Keep important info handy'
            },
            {
              imageUrl: 'https://evernote.com/c/assets/homepage-repackaging/task_icon.svg?aa8d4387b556ef76',
              name: 'WORK ANYWHERE',
              email: 'Keep important info handy'
            },
            {
              imageUrl: 'https://evernote.com/c/assets/homepage-repackaging/task_icon.svg?aa8d4387b556ef76',
              name: 'WORK ANYWHERE',
              email: 'Keep important info handy'
            },
            {
              imageUrl: 'https://evernote.com/c/assets/homepage-repackaging/task_icon.svg?aa8d4387b556ef76',
              name: 'WORK ANYWHERE',
              email: 'Keep important info handy'
            },
            {
              imageUrl: 'https://evernote.com/c/assets/homepage-repackaging/task_icon.svg?aa8d4387b556ef76',
              name: 'WORK ANYWHERE',
              email: 'Keep important info handy'
            },
            {
              imageUrl: 'https://evernote.com/c/assets/homepage-repackaging/task_icon.svg?aa8d4387b556ef76',
              name: 'WORK ANYWHERE',
              email: 'Keep important info handy'
            },
            {
              imageUrl: 'https://evernote.com/c/assets/homepage-repackaging/task_icon.svg?aa8d4387b556ef76',
              name: 'WORK ANYWHERE',
              email: 'Keep important info handy'
            },
            {
              imageUrl: 'https://evernote.com/c/assets/homepage-repackaging/task_icon.svg?aa8d4387b556ef76',
              name: 'WORK ANYWHERE',
              email: 'Keep important info handy'
            },
            {
              imageUrl: 'https://evernote.com/c/assets/homepage-repackaging/task_icon.svg?aa8d4387b556ef76',
              name: 'WORK ANYWHERE',
              email: 'Keep important info handy'
            },
            {
              imageUrl: 'https://evernote.com/c/assets/homepage-repackaging/task_icon.svg?aa8d4387b556ef76',
              name: 'WORK ANYWHERE',
              email: 'Keep important info handy'
            },
            {
              imageUrl: 'https://evernote.com/c/assets/homepage-repackaging/task_icon.svg?aa8d4387b556ef76',
              name: 'WORK ANYWHERE',
              email: 'Keep important info handy'
            },
          ]


    return (
        <div className='container px-12 lg:my-5 flex flex-wrap mx-auto space-y-7'>
            {people.map((person, index) => (
                <li className={`flex w-full md:w-6/12 lg:flex lg:w-3/12 mx-auto  ${index === 0 ? 'first:pt-7' : ''} ${index === people.length - 1 ? 'last:pb-0' : ''}`} key={index}>
                    <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                    <div className="ml-3 overflow-hidden">
                        <p className="text-sm font-medium text-slate-900">{person.name}</p>
                        <p className="text-sm text-slate-500 truncate">{person.email}</p>
                    </div>
                </li>
            ))}
            <div className="">
                <p className='text-xl text-primary py-4 font-semibold'>SEE ALL FEATURES →</p>
            </div>
        </div>
    );
};

export default FeaturesMenu;