import ErrorIcon from "./errorIcon"

export default function Insucces() {

    return (
        <div className="absolute inset-x-0 bottom-0 flex bg-red-200 rounded-xl text-center">
            <div className="basis-3/4 p-5">
                There was an error trying to send your message. Please try again later.
            </div>
            <div className="basis-1/4 pl-8 pt-6">
                <ErrorIcon />
            </div>
        </div>
    )
}