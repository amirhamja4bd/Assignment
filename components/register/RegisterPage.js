import React, { useState } from 'react';
import logo from '../../assects/images/brand.svg'
import apple from '../../assects/images/apple.svg'
import google from '../../assects/images/google.svg'
import Image from 'next/image';
import Link from 'next/link';
import axiosInstance from "../../helper/axiosInstance";
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';

const RegisterPage = () => {
    const backgroundImage = "https://www.evernote.com/static/static_css_resources/bb6ce0ce7affff91989d4aab2ba9fa53.png";

    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if (!name || !email || !password) {
            toast.error('Please enter name , email and password');
            return;
          }
        try{
            setLoading(true);
            const { data } = await axiosInstance.post(
                `/register`, {name, email, password});
            console.log( data);
            setLoading(false);
            if(data?.error){
                toast.error(data?.error)
                setLoading(false);
            }

            else{
                toast.success(" Registration Successful")
                router.push('/login')
            }
        }
        catch(error){
            console.log(error);
            toast.error(error?.response?.data?.error || " Registration Faild. Try again.")
            setLoading(false);
        }
    };

    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` , minHeight: "100vh" , top: '-5'}}>
            <div className="flex items-center justify-center h-fit font-roboto">
            <div className="w-full max-w-md p-4 shadow-lg sm:p-8 my-3 bg-white text-gray-400 rounded-lg ">
                {/* <h1 className="my-3 text-3xl text-black font-bold pt-2">Login</h1> */}
                <div className="text-black flex justify-center">
                    <Image src={logo} alt="" />
                </div>
                <p className="text-base mt-6 mb-10 text-center text-black">Remember everything important. </p>
                <div className="my-6 space-y-4">
                    <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-1.5 space-x-4 border rounded-md focus:ri focus:ri border-gray-400 hover:bg-gray-100 focus:ri">
                       <Image src={google} alt='not f' width={20} />
                        <p className='text-gray-600'>Login with Google</p>
                    </button>
                    <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-1.5 space-x-4 border rounded-md focus:ri focus:ri border-gray-400 hover:bg-gray-100 focus:ri">
                       <Image src={apple} alt='not f' width={20} />
                        <p className='text-gray-600'>Login with Google</p>
                    </button>
                    
                </div>
                <div className="flex items-center w-full mb-6">
                    <hr className="w-full text-black"/>
                    <p className="px-3 text-gray-400 text-sm">or</p>
                    <hr className="w-full text-black"/>
                </div>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                placeholder="Enter Your Name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                className="form_control " 
                            />
                        </div>
                        <div className="space-y-2">
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder="Enter Your Email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                className="form_control " 
                            />
                        </div>
                        <div className="space-y-2">
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder=" Enter Password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                className="form_control " 
                            />
                        </div>
                        {/* <label className" block text-gray-600">
                            <input className"mr-2 leading-tight" type="checkbox"/>
                            <span className"text-xs">
                            By creating an account, you are agreeing to our Terms of Service and Privacy Policy.
                            </span>
                        </label> */}
                    </div>
                    <button type="submit" className="w-full btn-primary" disabled={loading}>{loading? 'Submitting...' : 'Sign Up'}</button>
                    <div className="md:w-60 mx-auto -pt-4">
                    {/* <small className='text-xs text-gray-600 text-center'>By creating an account, you are agreeing to our Terms of Service and Privacy Policy.</small> */}
                    </div>
                        <p className="text-sm text-center text-gray-600">Already have an account?
                            <Link href="/login" className="focus:underline hover:underline text-primary ps-2">Login</Link>
                        </p>
                </form>
            </div>
            </div>
        </div>
    );
};

export default RegisterPage;