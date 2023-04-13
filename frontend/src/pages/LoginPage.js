import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {
    let {loginUser} = useContext(AuthContext)

    return (
        <div>
            <form onSubmit={loginUser}>
                <input type="text" name="username" placeholder="Ingrese Usuario"/>
                <input type="password" name="password" placeholder="Ingrese Contraseña"/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default LoginPage
