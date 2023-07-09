import RegisterPage from '@/components/register/RegisterPage';
import Head from 'next/head';
import React from 'react';

const SignUp = () => {
    return (
        <div>
            <Head>
                <title>Sign Up</title>
            </Head>
            <main>
                <RegisterPage/>
            </main>
        </div>
    );
};

export default SignUp;