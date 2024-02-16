import Image from "next/image"
import Link from "next/link"

import fc from '../../../public/fc.png'

export default function Proiecte() {

    return (
        <div className="container mx-auto mt-8 p-6 max-w-screen-xl">
            <Link href='https://financial-calculator-five.vercel.app'>
                <Image src={fc} alt='u' width={400} className="float-left m-8 border rounded-xl drop-shadow-xl"/>
            </Link>
            <div>
                <h1 className="text-3xl m-8"> Financial Calculator </h1>

                <p> The <span className="font-semibold text-blue-500">financial calculator</span> is based on the financial concept that the value of a currency today is worth more than the value of the same currency in the future. </p>
                <p> This is true because money you have now can be invested for a financial return and potentially grow into a larger amount in the future. </p>
                <p> This financial calculator can be used by investors, financial managers, and businesses to make strategic, long-term financial decisions such as whether to save money, make investment decisions invest or get a credit. </p>
                <p>  Most investors and businesses have the opportunity to spend their money in a variety of ways. They should make choices based on what the highest return of each will be. Understanding the time value of money will help make decisions on budgeting, cash flow management, financing, and investing, taking into consideration the impact of inflation, who will reduce the future value of the same amount of money. </p>
                <p> The time value of money can be analyzed in two ways: present value and future value. </p>
                <p> <span className="font-semibold text-blue-500">Future value</span>  is time value of money concept of finding the value of a series of cash flows at a point in time in the future. You'd be calculating the future value if you want to know what your $500 may be worth in 10 years if you invest in a certificate of deposit (CD), bonds, stoks e.t.c. You'd also be finding the future value if you want to find out what your retirement balance will be if you contribute $250 every month for 10 years. </p>
                <p> <span className="font-semibold text-blue-500">Present value</span> is the time value of money for a series of cash flow that calculates the value of the money today. For example, if you want to find the value of $1,000 to be received one year from now or the value of $2,500 to be received each month for the next two years, you are trying to find the present value. </p>

                <p className="text-right underline">
                 <Link href='https://financial-calculator-five.vercel.app' > Go to Financial Calculator </Link> <br />
                 <Link href='https://github.com/bogdan-olar/financial-calculator.git'> Financial Calculator on GitHub </Link>
                </p>
            </div>
        </div>
    )

}