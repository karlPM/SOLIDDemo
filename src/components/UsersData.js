import React from 'react';
import UserComponent from './UserComponent';
import withPremiumFeature from './PremiumUserComponent';
import usersData from '../DataSources/userData';

export default function UsersData() {
    const PremiumUser = withPremiumFeature(UserComponent)
    return (
        <div>
            {
                usersData.map((user) => {
                    if(user.premium){
                        return <PremiumUser userData={user} />
                    }
                    else{
                        return <UserComponent userData={user} />
                    }
                })
            }
        </div>
    )
}