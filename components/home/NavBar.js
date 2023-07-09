import { getToken, logOut } from '@/helper/FormHHelper';
import { jwtDecode } from '@/helper/jwtDecode';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';

const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [token, setToken] = useState('');
  const tokenDecode = jwtDecode(token)

  const photo = tokenDecode?.photo

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('token');
      setToken(storedToken);
    }
  }, []);

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
    <header className={`font-roboto `} >
      <nav className={`${hasScrolled ? 'navbar-shadow ' : ''} bg-white px-3 md:px-10 py-3 lg:py-0 flex justify-between items-center w-full mx-auto fixed top-0`} style={{ zIndex: 9999 }}>
        <div className="">
          <img className="cursor-pointer" src="https://evernote.com/img/logo/evernote/primary.svg" alt="..." />
        </div>
        <div
          className={`nav-links duration-500 lg:static absolute lg:bg-transparent bg-white lg:bg-none lg:min-h-fit min-h-[50vh] left-0 ${menuOpen ? ' flex-col lg:flex-row shadow lg:shadow-none' : ' flex-col  lg:flex-row'
            } w-full flex justify-start items-start px-5 mt-5 `}
          style={{left: menuOpen? '0' : '-100%' , top: menuOpen? '68%': '68%'}}
          >
        {/* <div
          className={`nav-links duration-500 lg:static absolute lg:bg-transparent bg-white lg:bg-none lg:min-h-fit min-h-[50vh] left-0 ${menuOpen ? 'left-0 top-[68%] flex-col lg:flex-row shadow lg:shadow-none' : '-left-[100%] top-[68%] flex-col  lg:flex-row'
            } w-full flex justify-start items-start px-5 mt-5 `}
          style={{left: menuOpen? '0' : '-100%'}}
          > */}

          <ul className="flex lg:flex-row flex-col lg:items-center w-full">
          
            <li className="border-b py-3 pb-5 w-full lg:w-auto lg:mx-3 lg:border-b-4 lg:border-b-transparent  lg:hover:border-primary transition-left ease-in-out duration-300">
              <Link className=" text-black hover:text-primary text-base font-semibold transition-left ease-in-out duration-300" href="#">
                WHY EVERNOTE
              </Link>
            </li>
            <li className="border-b py-3 pb-5 w-full lg:w-auto lg:mx-3 lg:border-b-4 lg:border-b-transparent  lg:hover:border-primary transition-left ease-in-out duration-300">
              <Link className="text-black hover:text-primary text-base font-semibold transition-left ease-in-out duration-300" href="#">
                FEATURES
              </Link>
            </li>

            <li className="border-b py-3 pb-5 w-full lg:w-auto lg:mx-3 lg:border-b-4 lg:border-b-transparent  lg:hover:border-primary transition-left ease-in-out duration-300">
              <Link className="text-black hover:text-primary text-base font-semibold transition-left ease-in-out duration-300" href="#">
                FOR INDIVIDUALS
              </Link>
            </li>
            <li className="border-b py-3 pb-5 w-full lg:w-auto lg:mx-3 lg:border-b-4 lg:border-b-transparent  lg:hover:border-primary transition-left ease-in-out duration-300">
              <Link className="text-black hover:text-primary text-base font-semibold transition-left ease-in-out duration-300" href="#">
                FOR TEAMS
              </Link>
            </li>
          </ul>
          {token ? 
            <>
            <div className="dropdown inline-block relative">
              <button className="rounded-full inline-flex items-center">
                <Image src={photo} width={40} height={40} alt="" className="mx-auto bg-gray-400 rounded-full" />
              </button>
              <ul className="dropdown-menu hidden absolute bg-gray-100 rounded-lg shadow-md lg:-right-14 text-black pt-1 w-56  flex-col items-center">
                <li className="mb- p-3">
                  <img src={photo} width={60} height={60} alt="" className="mx-auto bg-gray-400 rounded-full"/>
                </li>
                <li className="mb-4">
                  <h1 className="text-center uppercase">{tokenDecode?.name}</h1>
                </li>
                <li className="text-start border-t border-gray-500">
                  <a  onClick={logOut}  className="rounded-t  bg-gray-100 hover:bg-gray-200  font-semibold py-2 px-4 block whitespace-no-wrap text-left" href="#">Log&nbsp;Out</a>
                </li>
              </ul>
            </div>
            </>
            :
          <div className="flex items-center justify-center">
            <Link href='/login' className="bg-primary text-white mt-5 lg:mt-0 w-fit px-5 py-2 rounded-lg hover:bg-primaryHover transition-left ease-in-out duration-300">
              Login
            </Link>
            <Link href='/signUp' className="ms-2 bg-primary text-white mt-5 lg:mt-0 w-fit px-5 py-2 rounded-lg hover:bg-primaryHover transition-left ease-in-out duration-300">
              Sign&nbsp;Up
            </Link>
          </div>
          }
        </div>
        <p onClick={toggleMenu} className="text-3xl cursor-pointer lg:hidden text-black">
          {menuOpen ? <RxCross1 /> : <AiOutlineMenu />}
        </p>
      </nav>
    </header>
  );
};

export default NavBar;