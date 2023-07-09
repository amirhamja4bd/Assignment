import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomePage  from '@/components/home/Index'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <Head>
            <title>Home</title>
        </Head>
        <main className='bg-radA'>
            <HomePage />
        </main>
    </>
  )
}
