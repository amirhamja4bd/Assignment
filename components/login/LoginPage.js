import React from 'react';
import logo from '../../assects/images/brand.svg'
import apple from '../../assects/images/apple.svg'
import google from '../../assects/images/google.svg'
import Image from 'next/image';
import Link from 'next/link';

const LoginPage = () => {
    const backgroundImage = "https://www.evernote.com/static/static_css_resources/bb6ce0ce7affff91989d4aab2ba9fa53.png";

    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` , minHeight: "100vh" , top: '-5'}}>
            <div className="flex items-center justify-center h-fit font-roboto">
            <div className="w-full max-w-md p-4 shadow-lg sm:p-8 my-3 bg-white text-gray-400 rounded-lg">
                {/* <h1 className="my-3 text-3xl text-black font-bold pt-2">Login</h1> */}
                <div className="text-black flex justify-center">
                    <Image src={logo} alt="" />
                </div>
                <p className="text-base mt-6 mb-10 text-center text-black">Remember everything important. </p>
                <div className="my-6 space-y-4">
                    <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ri focus:ri border-gray-400 hover:bg-gray-100 focus:ri">
                       <Image src={google} alt='not f' width={20} />
                        <p className='text-gray-600'>Login with Google</p>
                    </button>
                    <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ri focus:ri border-gray-400 hover:bg-gray-100 focus:ri">
                       <Image src={apple} alt='not f' width={20} />
                        <p className='text-gray-600'>Login with Google</p>
                    </button>
                    
                </div>
                <div className="flex items-center w-full mb-6">
                    <hr className="w-full text-black"/>
                    <p className="px-3 text-gray-400 text-sm">or</p>
                    <hr className="w-full text-black"/>
                </div>
                <form action="" className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <input type="email" name="email" id="email" placeholder="Enter Email" className="form_control " />
                        </div>
                        <div className="space-y-2">
                            <input type="password" name="password" id="password" placeholder=" Enter Password" className="form_control " />
                        </div>
                        <label class="md:w-2/3 block text-gray-600">
                            <input class="mr-2 leading-tight" type="checkbox"/>
                            <span class="text-sm">
                                Remember me
                            </span>
                        </label>

                    </div>
                    <button type="button" className="w-full btn-primary">Login</button>
                        <p className="text-sm text-center text-gray-600">Dont have account?
                            <Link href="/signUp" className="focus:underline hover:underline text-primary ps-2">Sign up here</Link>
                        </p>
                </form>
            </div>
            </div>
        </div>
    );
};

export default LoginPage;