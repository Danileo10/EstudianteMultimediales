import {createContext, useState, useEffect} from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext()

export default AuthContext;



export const AuthProvider = ({children}) => {

    //localStorage.getItem('authTokens')
    let [authTokens, setAuthTokens] = useState(null)
    let [user, setUser] = useState(null)
    let navigate = useNavigate();

    let loginUser = async (e) => {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username' : e.target.username.value,
                'password' : e.target.password.value
            })    
        })
        let data = await response.json()
        console.log('response:', response)
        if (response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate.push('/')
        }else{
            alert('algo salio mal')
        }

    }

    let logoutUser() => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate.push('/login')
    }

    let contextData = {
        user:user,
        loginUser:loginUser,
        logoutUser : logoutUser
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}