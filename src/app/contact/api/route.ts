import { adaugaMesaj } from "./db"

export async function POST( req: Request, ) {
    const mesajBody = await req.json()

    const databaseResponse = await adaugaMesaj(mesajBody.numele, mesajBody.email, mesajBody.mesaj)

    if ( databaseResponse === 0 ) {
            return new Response( '0',
            {
                headers: {"Content-Type":"application/json"},
                status: 503
            })
    }

    return new Response( '1', 
    {
        headers: {"Content-Type":"application/json"},
        status: 201
    })

}