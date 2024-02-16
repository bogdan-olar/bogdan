
export default function validation( inputName: string, inputValue: string ) {

    if ( inputName === 'numele' ) {
        
        if ( inputValue.length < 1 ) {
             return '*This field is required and cannot be empty!'
        }

        if ( inputValue.length > 80 ) {
            return '*Why is your name so long? Max. 80 characters!'
        }

    }

    if ( inputName === 'email' ) {

        if ( inputValue.length < 1 ) {
             return '*Email required!'
        }
        
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputValue) ) {
             return '*Invalid email address!'
        }

    }

    if ( inputName === 'mesaj' ) {
        
        if ( inputValue.length < 1 ) {
             return '*This field is required and cannot be empty!'
        }

        if ( inputValue.length > 5000 ) {
            return "*I absolutely can't read long texts! Max. 5000 characters!"
        }

    }

    return ''
    
}