import React from 'react';
import TextInput from './TextInput';

// L = Liskoves substitution principle i.e a component of PassWord can easily replace a TextInput component and not break
export default function PassWordComp(){
    return (
        <TextInput placeholder="Password" isPassword={true} />
    )
}