import Link from "next/link"

export default function MiniMeniu( prosp: any ) {

    return (
        <div className="border bg-slate-100 p-2">
        <div>
            <div className="py-2 border-b" onClick={prosp.click}>
                <Link href='/' className="px-8 font-medium hover:text-blue-600 transition duration-500"> Home </Link>
            </div>
            <div className="py-2 border-b" onClick={prosp.click}>
                <Link href='/cv' className="px-8 font-medium hover:text-blue-600 transition duration-500"> Curiculum Vitae </Link>
            </div>
            <div className="py-2 border-b" onClick={prosp.click}>
                <Link href='/proiecte' className="px-8 font-medium hover:text-blue-600 transition duration-500"> Proiecte </Link>
            </div>
            <div className="py-2" onClick={prosp.click}>
                <Link href='contact' className="px-8 font-medium hover:text-blue-600 transition duration-500"> Contact </Link>
            </div>
        </div>
        </div>
    )

}