import React from 'react';

//Single responsibility principle 
export default function UserComponent(props){
    return (
        <div style={{borderColor: 'black', borderStyle: 'dashed', borderWidth: 2, width: '20%', margin: 20}}>
            <div>
                <p>User name: {props.userData.name}</p>
                <p>Age : {props.userData.age}</p>
            </div>
            {props.children}
        </div>
    )
}