import SuccesIcon from "./succesIcon"

export default function Succes() {

    return (
        <div className="absolute inset-x-0 bottom-0 flex bg-green-200 rounded-xl text-center">
                <div className="basis-3/4 p-5">
                    Thank you for getting in touch! I appreciate for contacting me and i will get back in touch with you as soon as possible! Have a great day!
                </div>
                <div className="basis-1/4 pl-8 pt-12">
                    <SuccesIcon />
                </div>
        </div>
    )
}