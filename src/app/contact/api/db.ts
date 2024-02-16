import mysql from 'mysql2'

export async function adaugaMesaj( numele: string, emailul: string, mesajul: string ) {

    try {

        const conn = mysql.createConnection('mysql://toate_expression:b9219d08b34d1817ada30cc82adda9c391920a52@xt1.h.filess.io:3307/toate_expression').promise()
        const [rezultat] = await conn.query('INSERT INTO mesaje (numele, email, mesajul) VALUES ( ?, ?, ? )', 
                        [numele, emailul, mesajul]) 
        conn.end()
                
        return 1

    } catch(error) {
        console.log(error)
        return 0
        
    }

}





