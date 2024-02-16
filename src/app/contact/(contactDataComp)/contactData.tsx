import Link from "next/link"
import LinkedIn from "./linkedin"
import Email from "./email"
import Phone from "./phone"

export default function ContactData() {

    return (
            <div className="basis-1/2 container mx-auto lg:border-r my-4 p-4">

                <div className="flex items-center gap-5 m-5 p-4 container mx-auto w-96">
                    <LinkedIn />
                    <div>
                        <div className="font-semibold"> LinkedIn: </div>
                        <div className="underline">
                            <Link href="https://www.linkedin.com/in/bogdan-olar-99239b18a"> Olar Bogdan </Link>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-5 m-5 p-4 container mx-auto w-96">
                    <Email />
                    <div>
                        <div className="font-semibold"> Email: </div>
                        <div> olarbogdan@rocketmail.com </div>
                    </div>
                </div>
               
                <div className="flex items-center gap-5 m-5 p-4 container mx-auto w-96" > 
                    <Phone />
                    <div>
                        <div className="font-semibold"> Phone: </div> 
                        <div> 0752/171.440 </div>
                    </div>
                </div>
            </div>
    )

}