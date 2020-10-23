import { ValidateEmail } from '../Validations/index';

export function doLogin(email){
    console.log(email)
    const isValid = ValidateEmail(email)
    return isValid;
}
