import React from 'react';
import { normalInput } from '../../Styles/inputStyles';

//S = Single responsibility principle treated here
// O = Open for modifications and can be extensible
export default function TextInput({isPassword, placeholder, styles, onChange, value}){
    return (
        <div>
            <input 
                placeholder={placeholder} 
                type={`${ isPassword ? "password" : "email" }`}
                style={styles ? styles : normalInput}
                onChange={(e) => onChange(e.target.value)}
                value={value}
            />
        </div>
    )
}