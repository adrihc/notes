import React, { Fragment, useState } from "react";

export function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        const response = fetch('http://localhost:8081/login', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(posts => {
                const expiration = posts.expiration;
                const token = posts.token;
                localStorage.setItem('expiration', expiration)
                localStorage.setItem('token', token);
                console.log(localStorage)
            })
        window.location.replace('/notes')    
    }

    return (
        <Fragment>
            <input type="text" placeholder="Username" onChange={(input) => { setUsername(input.target.value) }} />
            <input type="text" placeholder="Password" onChange={(input) => { setPassword(input.target.value) }} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={() => { window.location.replace('/signup') }}>Signup</button>
        </Fragment>
    )
}