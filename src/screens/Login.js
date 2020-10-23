import React, {useState} from 'react';
import TextInput from '../components/TextInput';
import PassWordComp from '../components/PassWordComp';
import ButtonComp from '../components/ButtonComp';
import { doLogin } from '../Actions/AuthActions';
import { normalButton } from '../Styles/ButtonStyles';
import { normalInput } from '../Styles/inputStyles';
import UsersData from '../components/UsersData';

export default function Login (){
    const [showUsers, toggleShowUsers] = useState(false);
    const [email, setEmail] = useState(null);

    function perFormLogin(){
        let show = doLogin(email);
        toggleShowUsers(show);
    }
    function updateEmailText(text){
        setEmail(text)
    }

    if(showUsers){
        return(
            <UsersData/>
        )
    }
    return (
        <div>
            <TextInput placeholder={"Username"} styles={normalInput} onChange={updateEmailText} value={email} />
            <PassWordComp placeholder={"password"}/>
            <ButtonComp title={"Login"} onClick={perFormLogin} styles={normalButton} />
            <input type="checkbox" placeholder="Premium user"/>
        </div>
    )
}