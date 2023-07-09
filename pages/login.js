import LoginPage from '@/components/login/LoginPage';
import Head from 'next/head';
import React from 'react';

const Login = () => {
    return (
        <div>
            <Head>
                <title>Login</title>
            </Head>
            <main>
                <LoginPage/>
            </main>
        </div>
    );
};

export default Login;