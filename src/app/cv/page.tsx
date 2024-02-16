import Link from "next/link"
import Image from "next/image"
import Calendar from "./calendar"
import LinkedInMic from "./linkedinMic"
import EmailMic from "./emailMic"
import PhoneMic from "./phoneMic"
import Location from "./location"

import poza from '../../../public/poza.jpg'

export default function Cv() {

    return (
        <div className="container mx-auto mt-8 p-6 max-w-screen-xl flex flex-col lg:flex-row">

            <div className="basis-1/3 border rounded-xl mx-10 pr-10 bg-albastru text-dark-bej flex flex-col md:flex-row md:justify-evenly lg:flex-col items-center">

                <div className=''>

                    <div className="ml-6">
                            <div>
                                <Image src={poza} alt='u' width={200} className='m-4 border border-sky-800 rounded-full shadow-lg' />
                            </div>

                            <div className="flex items-center container mx-auto py-2  px-5 gap-4 ">
                                <Location />
                                <div> Sibiu, Romania </div>
                            </div>

                            <div className="flex items-center container mx-auto py-2  px-5 gap-4 ">
                                <EmailMic />
                                <div> olarbogdan@rocketmail.com </div>
                            </div>
                        
                            <div className="flex items-center container mx-auto py-2 px-5 gap-4 " > 
                                <PhoneMic />
                                <div> 0752/171.440 </div>
                            </div>

                            <div className="flex items-center container py-2 px-5 gap-4 mx-auto">
                                <LinkedInMic />
                                <div className="underline">
                                    <Link href="https://www.linkedin.com/in/bogdan-olar-99239b18a"> Olar Bogdan </Link>
                                </div>
                            </div>
                    </div>
                </div>

                <div>
                        <div className="m-10">
                            <h3 className='text-xl font-medium underline underline-offset-4 m-3'> SKILLS </h3>
                            <ul className=''>
                                <li className="mx-3 mt-3"> HTML 5 </li>
                                <div className="flex mx-3">
                                    <div className="w-48 h-2 bg-teal-500 border border-teal-500 rounded-l-lg"></div>
                                    <div className="w-12 h-2 bg-slate-300 border border-slate-300 rounded-r-lg"></div>
                                </div>
                                <li className="mx-3 mt-3"> CSS 3 </li>
                                <div className="flex mx-3">
                                    <div className="w-40 h-2 bg-teal-500 border border-teal-500 rounded-l-lg"></div>
                                    <div className="w-20 h-2 bg-slate-300 border border-slate-300 rounded-r-lg"></div>
                                </div>
                                <li className="mx-3 mt-3"> Javascript (ES6) </li>
                                <div className="flex mx-3">
                                    <div className="w-44 h-2 bg-teal-500 border border-teal-500 rounded-l-lg"></div>
                                    <div className="w-16 h-2 bg-slate-300 border border-slate-300 rounded-r-lg"></div>
                                </div>
                                <li className="mx-3 mt-3"> React JS </li>
                                <div className="flex mx-3">
                                    <div className="w-40 h-2 bg-teal-500 border border-teal-500 rounded-l-lg"></div>
                                    <div className="w-20 h-2 bg-slate-300 border border-slate-300 rounded-r-lg"></div>
                                </div>
                                <li className="mx-3 mt-3">  Next JS </li>
                                <div className="flex mx-3">
                                    <div className="w-36 h-2 bg-teal-500 border border-teal-500 rounded-l-lg"></div>
                                    <div className="w-24 h-2 bg-slate-300 border border-slate-300 rounded-r-lg"></div>
                                </div>
                                <li className="mx-3 mt-3"> TypeScript </li>
                                <div className="flex mx-3">
                                    <div className="w-28 h-2 bg-teal-500 border border-teal-500 rounded-l-lg"></div>
                                    <div className="w-32 h-2 bg-slate-300 border border-slate-300 rounded-r-lg"></div>
                                </div>
                                <li className="mx-3 mt-3"> SQL </li>
                                <div className="flex mx-3">
                                    <div className="w-40 h-2 bg-teal-500 border border-teal-500 rounded-l-lg"></div>
                                    <div className="w-20 h-2 bg-slate-300 border border-slate-300 rounded-r-lg"></div>
                                </div>
                            </ul>
                        </div>

                        <div className="m-10">
                            <div className='text-xl font-medium underline underline-offset-4 m-3'> PERSONALITY </div>
                            <div className="m-2 mx-4"> Comunicativ </div>
                            <div className="m-2 mx-4"> Punctual </div>
                            <div className="m-2 mx-4"> Organizat </div>
                            <div className="m-2 mx-4"> Creativ </div>
                        </div>
                </div>

            </div>

        <div className="basis-2/3">
                                {/* educatie */}
                <div>
                    <div className="ml-8 mt-8 text-xl font-medium underline underline-offset-4"> EDUCATION </div>

                    <div className='m-8'> 
                        <div className='educatieContainer'>
                            <Calendar /> 2005 - 2007
                        </div> 
                        <div> University “Lucian Blaga” Sibiu - Faculty of Economic Science </div>
                        <div><b> Master - Financial Managament of Corporation </b></div>
                    </div>

                    <div className='m-8'>
                        <div className='educatieContainer'>
                            <Calendar /> 2001 - 2005
                        </div>
                        <div> University “Lucian Blaga” Sibiu - Faculty of Economic Science </div>
                        <div><b> Finance & Insurance </b></div>
                    </div>

                    <div className='m-8'>
                        <div className='educatieContainer'>
                            <Calendar /> 2000 - 2003
                        </div>
                        <div> University “Lucian Blaga” Sibiu  - College </div>
                        <div><b> Systems and computer science </b></div>
                        <div><b> Technical informatics </b></div>
                    </div>

                    <div className='m-8'>
                        <div className='educatieContainer'>
                            <Calendar /> 1996 - 2000
                        </div>
                        <div> High School “Gheorghe Lazar” Sibiu </div>
                        <div> Mathematics & Physics. </div> 
                    </div>
                </div>

                                    {/* experienta */}

                <div>
                    <h3 className='ml-8 text-xl font-medium underline underline-offset-4'> EXPERIENTA </h3>
                    <div className='m-8'>
                        <div className='educatieContainer'>
                            <Calendar /> 2005 – prezent
                        </div>
                        <div> ANAF - Directia Generala Regionala a Finantelor publice Brasov </div>
                        <div> Administratia Financiara a Judetului Sibiu </div>
                        <div> Sectorul de activitate: <b> fiscalitate </b></div>
                    </div>
                </div>

                <div>
                    <h3 className='ml-8 text-xl font-medium underline underline-offset-4'> PROJECTS </h3>
                        <div className='m-8'>
                            <h1 className="text-xl text-blue-500 indent-10 mb-4"> Financial Calculator </h1>
                            <div className="text-justify indent-10"> The financial calculator is based on the financial concept that the value of a currency today is worth more than the value of the same currency in the future. This financial calculator can be used to make strategic, long-term financial decisions such as whether to save money, invest or get a credit. </div>
                            <div className="flex justify-evenly mt-6">
                                <div>
                                    <Link href='https://financial-calculator-five.vercel.app'> Financial Calculator web page </Link>
                                </div>
                                <div>
                                    <Link href='https://github.com/bogdan-olar/financial-calculator.git'> Financial Calculator GitHub </Link>  
                                </div>
                            </div>
                        </div>
                        {/* <div className='m-8'>
                            <div>
                                eFactura - program cu ajutorul căruia un operator economic poat emite și gestiona facturi fiscale.
                            </div>
                            <div>
                                <Link href='https://e-factura.vercel.app'>  e-Factura web page. </Link>
                            </div>
                           <div>
                                <Link href='https://github.com/bogdan-olar/factura-frontend.git'> e-Factura GitHub </Link>
                            </div>
                            <div>
                                <Link href='https://github.com/bogdan-olar/factura-restfulAPI.git'> e-Factura API GitHub </Link>
                            </div>
                        </div>    */}
                </div>

        </div>

        </div>
    )

}