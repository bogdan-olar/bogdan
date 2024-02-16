
import ContactData from "./(contactDataComp)/contactData"
import FormData from "./(formDataComp)/formData"

export default function Contact() {


    return (
        <div className="mt-8">
            <div className="container mx-auto max-w-4xl min-w-96 border-b border-slate-400 p-5 pt-8">
                <h1 className="text-3xl sm:text-4xl pb-3"> Hello </h1>
                <div className="text-base sm:text-lg"> Thank you for your interest, i'd love to hear from you. </div>
                <div className="text-base sm:text-lg">
                   Please get in touch in one of the following ways, or fill the form.
                </div>
            </div>

            <div className="m-5 p-4 container mx-auto max-w-4xl flex flex-col lg:flex-row">
                <ContactData />
                <FormData />
            </div>
        </div>

    )

}