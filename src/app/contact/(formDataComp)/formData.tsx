'use client'

import { useState } from "react"
import Succes from "./succes"
import Insucces from "./insucces"
import validation from "./validation"

export default function FormData() {

    const [ form, setForm ] = useState({
        numele: '',
        email: '',
        mesaj: ''
    })

    const [ blur, setBlur ] = useState({
        numele: false,
        email: false,
        mesaj: false
    })

    const [ error, setError ] = useState({
        numele: '*This field is required and cannot be empty!',
        email: '*This field is required and cannot be empty!',
        mesaj: '*This field is required and cannot be empty!'
    })

    const [ succes, setSucces ] = useState('')

    const handleChange = (e: any) => {
            const { name, value } = e.target 
            setForm( prevState => { return { ...prevState, [name]: value } })
            setError( prevState => { return {...prevState, [name]: validation(name, value)} })
    }

    const handleBlur = (e: any) => {
        const { name } = e.target
        setBlur( prevState => { return {...prevState, [name]: true} })
    }

    const handleSubmit = async (e: any) =>  {
            e.preventDefault()

            setBlur({numele: true, email: true, mesaj: true})

            const addMessage = async () => {

                const response = await fetch('./contact/api', {
                    method: 'POST',
                    headers: {"Content-Type":"application/json"},
                    body: JSON.stringify(form)
                })

                return await response.json()
            }

            if (error.numele === '' && error.email === '' && error.mesaj === '') {
                const res = await addMessage()
                setSucces(res.toString())
                setTimeout(() => {
                    setSucces('')
                }, 10000);
                if(res === 1 ) {
                    setForm({ numele: '', email: '', mesaj: '' })
                }  
            }
    }

    return (

        <div className="basis-1/2 container mx-auto relative lg:border-l lg:border-slate-400">
            
            <form onSubmit={handleSubmit} className="container mx-auto pl-6 xl:pl-20">

                <div className="formElement">
                    {/* <label htmlFor="numele"> Numele </label> */}
                    <input type="text" id="numele" name="numele" 
                           value={form.numele} onChange={handleChange} onBlur={handleBlur}
                           placeholder="Name*" className="inpDoi"
                        />
                    <span className="errMessage"> { (error.numele && blur.numele ) ? error.numele : '' } </span>
                </div>

                <div className="formElement">
                    {/* <label htmlFor="email"> EMAIL </label> */}
                    <input type="email" id="email" name="email" 
                           value={form.email} onChange={handleChange} onBlur={handleBlur} 
                           placeholder="Email*" className="inpDoi"
                        />
                     <span className="errMessage"> { (error.email && blur.email) ? error.email : '' } </span>
                </div>

                <div className="formElement">
                    {/* <label htmlFor="mesaj"> MESSAGE </label> */}
                    <textarea id="mesaj" name="mesaj" rows={4}
                              value={form.mesaj} onChange={handleChange} onBlur={handleBlur} 
                              placeholder="Please enter your message.*" className="inpDoi"
                        />
                    <span className="errMessage"> { (error.mesaj && blur.mesaj) ? error.mesaj : '' } </span>
                </div>

                <div className="container mx-auto w-96">
                    <p className="text"> All fields marked with * are required <br/> and must be filled. </p>
                </div>

                 <div className="container mx-auto w-96">
                    <button type="submit" className="btnDoi"> Send </button>
                 </div>
            </form>

            { succes === '1' && <Succes /> }
            { succes === '0' && <Insucces /> }

        </div>
    )

}