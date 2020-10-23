import React, {useState} from 'react';
import TextInput from '../components/Form/TextInput';
import PassWordComp from '../components/Form/PassWordComp';
import ButtonComp from '../components/Form/ButtonComp';
import { doLogin } from '../Actions/Authentication/AuthActions';
import { normalButton } from '../Styles/ButtonStyles';
import { normalInput } from '../Styles/inputStyles';
import UsersData from '../components/User/UsersData';

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