import Image from "next/image"

import ProjectImage from '../../../public/fc.png'

export default function Proiect() {

    return (
        <div className="flex">
            <div className="basis-2/3">
                <h1 className="text-3xl m-8"> Financial Calculator </h1>

                <p> The financial calculator is based on the financial concept that the value of a currency today is worth more than the value of the same currency in the future.
                This is true because money you have now can be invested for a financial return and potentially grow into a larger amount in the future.
                This financial calculator can be used to make strategic, long-term financial decisions such as whether to save money, invest or get a credit. </p>
                <p> <span className='font-semibold text-blue-500'> Future value </span> determines how much a cash flow received today will be worth in the future. </p>
                <p> <span className='font-semibold text-blue-500'> Present value </span> assesses how much a cash flow received in the future will be worth today. </p>
            </div>  
                  
            <div className="basis-1/3">
                <Image src={ProjectImage} alt='u' width={400} className="float-left m-8 border rounded-xl drop-shadow-xl"/>
            </div>
        </div>
    )

}