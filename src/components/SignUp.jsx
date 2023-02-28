import React, { Fragment, useState } from "react";



export function Signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRep, setPasswordRep] = useState('')

    if(localStorage.getItem("token") != null){
        window.location.replace("/")
    }

    const handleSignUp = async () => {
        if(username === ''){
            alert('El nombre de usuario está vacío')
            return
        } else if( password === ''){
            alert('Introduce una contraseña')
            return
        } else if(passwordRep === ''){
            alert('Escriba de nuevo la contraseña')
            return
        }
        if (password === passwordRep) {
            const response = await fetch('http://localhost:8081/signup', {
                method: 'POST',
                body: JSON.stringify({
                    username: username,
                    password: password
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            });
            if(response.status === 409){
                alert("Ese usuario ya existe")
            } else if(response.status === 200){
                alert("Tu cuenta ha sido creada, por favor introduzca los datos de nuevo para iniciar sesión")
                window.location.replace('/')
            }
        } else { alert("Las contraseñas deben coincidir") }
    }

    return (
        <Fragment>
            <input value={username} type="text" placeholder="Username" onChange={(input) => { setUsername(input.target.value) }} />
            <input value={password} type="password" placeholder="Password" onChange={(input) => { setPassword(input.target.value) }} />
            <input value={passwordRep} type="password" placeholder="Repeat Password" onChange={(input) => { setPasswordRep(input.target.value) }} />
            <button onClick={handleSignUp}>SignUp</button>
        </Fragment>
    )
}