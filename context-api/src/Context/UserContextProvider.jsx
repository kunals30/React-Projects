/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({children})=>{
    const [user, setUser] = React.useState(null);
    return(
        <UserContext.Provider value={{user, setUser}}>
            { children }
        </UserContext.Provider>
    )
}

export default UserContextProvider;