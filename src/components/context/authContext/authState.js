import React, {useReducer} from 'react'
import AuthContext from './authContext'
import AuthReducer from './authReducer'
import {SET_USER} from '../types'


const AuthState = (props) => {
    //Initial State
    const initialState = {
        user: JSON.parse(localStorage.getItem('myValueInLocalStorage')) || null,
        tributes: []
    };
      
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //SIGNIN
    const setUser =(authUser) =>{
        dispatch({type: SET_USER, payload:authUser})
    }
    
    return (
        <AuthContext.Provider value={{
            user: state.user,
            tributes: state.tributes,
            setUser
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState
