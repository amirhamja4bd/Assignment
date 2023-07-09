import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setHasScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header className={`font-roboto `}>
      <nav className={`${hasScrolled ? 'navbar-shadow ' : ''} bg-white px-3 md:px-10 py-3 lg:py-0 flex justify-between items-center w-full mx-auto fixed top-0`}>
        <div className="">
          <img className="cursor-pointer" src="https://evernote.com/img/logo/evernote/primary.svg" alt="..." />
        </div>
        <div
          className={`nav-links duration-500 lg:static absolute lg:bg-transparent bg-white lg:bg-none lg:min-h-fit min-h-[50vh] left-0 ${menuOpen ? 'left-0 top-[100%] flex-col lg:flex-row shadow lg:shadow-none' : '-left-full top-[100%] flex-col  lg:flex-row'
            } w-full flex justify-start items-start px-5 mt-5 `}
        >
          <ul className="flex lg:flex-row pb-2 flex-col lg:items-center w-full">
          
            <li className="border-b py-3 w-full lg:w-auto lg:mx-3 lg:border-b-4 lg:border-b-transparent  lg:hover:border-primary transition-left ease-in-out duration-300">
              <Link className=" text-black hover:text-primary text-base font-semibold transition-left ease-in-out duration-300" href="#">
                WHY EVERNOTE
              </Link>
            </li>
            <li className="border-b py-3 w-full lg:w-auto lg:mx-3 lg:border-b-4 lg:border-b-transparent  lg:hover:border-primary transition-left ease-in-out duration-300">
              <Link className="text-black hover:text-primary text-base font-semibold transition-left ease-in-out duration-300" href="#">
                FEATURES
              </Link>
            </li>

            <li className="border-b py-3 w-full lg:w-auto lg:mx-3 lg:border-b-4 lg:border-b-transparent  lg:hover:border-primary transition-left ease-in-out duration-300">
              <Link className="text-black hover:text-primary text-base font-semibold transition-left ease-in-out duration-300" href="#">
                FOR INDIVIDUALS
              </Link>
            </li>
            <li className="border-b py-3 w-full lg:w-auto lg:mx-3 lg:border-b-4 lg:border-b-transparent  lg:hover:border-primary transition-left ease-in-out duration-300">
              <Link className="text-black hover:text-primary text-base font-semibold transition-left ease-in-out duration-300" href="#">
                FOR TEAMS
              </Link>
            </li>
          </ul>
          <div className="flex items-center justify-center">
            <Link href='/login' className="bg-primary text-white mt-5 lg:mt-0 w-fit px-5 py-2 rounded-lg hover:bg-primaryHover transition-left ease-in-out duration-300">
              Login
            </Link>
            <Link href='/signUp' className="ms-2 bg-primary text-white mt-5 lg:mt-0 w-fit px-5 py-2 rounded-lg hover:bg-primaryHover transition-left ease-in-out duration-300">
              Sign&nbsp;Up
            </Link>
          </div>
        </div>
        <p onClick={toggleMenu} className="text-3xl cursor-pointer lg:hidden text-black">
          {menuOpen ? <RxCross1 /> : <AiOutlineMenu />}
        </p>
      </nav>
    </header>
  );
};

export default NavBar;
