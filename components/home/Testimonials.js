import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Testimonials = ()=> {
  const slides = [
    {
        comment: 'Ipsum dolor sit amet consectetur adipisicing elit. Facilis beatae sapiente laborum molestiae. Nesciunt quod eaque illum odio cum magni ipsum sequi deserunt.',
        url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        name: "Md. Parvej",
        designation: "Mern Stack Developer"
    },
    {
        comment: 'Dolor sit amet consectetur adipisicing elit. Facilis beatae sapiente laborum molestiae. Nesciunt quod eaque illum odio cum magni ipsum sequi deserunt.',
        url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        name: "Alomgir Hossain",
        designation: "Mern Stack Developer"
    },

    {
        comment: 'consectetur adipisicing elit. Facilis beatae sapiente laborum molestiae. Nesciunt quod eaque illum odio cum magni ipsum sequi deserunt.',
        url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        name: "Shakil Hossain",
        designation: "Mern Stack Developer"
    },
    {
        comment: 'Adipisicing elit. Facilis beatae sapiente laborum molestiae. Nesciunt quod eaque illum odio cum magni ipsum sequi deserunt.',
        url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        name: "Shohidul Islam",
        designation: "Mern Stack Developer"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='bg-gray-50 font-roboto'>
        <div className='w-full m-auto py-16 px-4 group'> 
            <div className="container mx-auto">
                <div className="max-w-3xl mx-auto">
                    <div className="container flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 text-black">
                        <img src={slides[currentIndex].url} alt="" className="w-20 h-20 rounded-full bg-gray-500" />
                        <blockquote className="max-w-lg text-xl italic font-normal text-center"> {slides[currentIndex].comment} </blockquote>
                        <div className="text-center text-gray-700">
                            <p className='font-light text-sm'>{slides[currentIndex].name}</p>
                            <p className='font-light text-xs'>{slides[currentIndex].designation}</p>
                        </div>
                    </div>
                </div>
                {/* Left Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 lg:left-20  xl:left-40 2xl:left-80 text-2xl rounded-full p-2 bg-[#14034242] text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 lg:right-20 xl:right-40 2xl:right-80 p-2 rounded-full bg-[#14034242] text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} className=''/>
                </div>
                <div className='flex top-4 justify-center py-2 '>
                    {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer  text-[#140342] '
                    >
                        <RxDotFilled />
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}

export default Testimonials;