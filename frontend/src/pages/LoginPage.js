import React from 'react'

const LoginPage = () => {
    return (
        <div>
            <form>
                <input type="text" name="username" placeholder="Ingrese Usuario"/>
                <input type="password" name="password" placeholder="Ingrese Contraseña"/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default LoginPage
