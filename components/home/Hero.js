import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <div>
            <section className="font-roboto">
                <div className="container mx-auto flex flex-col items-center px-4 pt-40 pb-20 text-center ">
                    <h1 className="text-4xl font-bold leadi sm:text-5xl">Tame your work, organize your life
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-xl">Remember everything and tackle any project with your notes, tasks, and schedule all in one place.</p>
                    <div className="flex flex-wrap justify-center">
                        <Link href='/signUp'>
                            <button type="button" className="w-full btn-primary">Sign Up For Free</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;