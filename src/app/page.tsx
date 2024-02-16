import Image from 'next/image';
import Link from 'next/link';

import BoxIcon from './(homePageComp)/boxIcon';

import Img from '../../public/48.jpg'

export default function Home() {
  return (
    <main className='container mx-auto max-w-screen-2xl lg:flex gap-8 p-4 mt-12 xl:pt-20'>
        <div className='basis-2/5 pl-10 xl:pr-10 lg:pl-0 lg:flex lg:justify-end lg:items-center'>
          <Image src={Img} alt='u' width={380} className='border rounded-2xl shadow-xl bg-blend-lighten' />       
        </div> 
        <div className='lg:border-l lg:border-slate-400 basis-3/5 p-6 pl-10 pr-10 xl:pl-20'>
          <h3 className='text-xl py-4 text-blue-800'> Hi, my name is </h3>
          <h1 className='text-3xl font-bold inline-block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text'> Olar Bogdan. </h1>
          <h2 className='text-2xl my-2 text-blue-800'> I build awesome web applications. </h2>
          <div className='text-lg py-2 leading-loose'> I'm a junior front end developer, building web application used in financial world. Currently i'm building a financial calculator best suited for quantitative analysis. </div>
          <div className='border border-blue-600 w-64 text-center text-blue-600 py-4 my-8 hover:text-blue-800 transition duration-300 flex justify-evenly items-center'> 
            <Link href='/proiecte'> Check out my project! </Link> <BoxIcon />  
          </div>
        </div>
    </main>
  );
}
