import React from 'react'

export default function home() {
    const handleLogin = () => {
        window.location.pathname = '/login';
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="">LOGO
                </a>
                <div className="container">
                <button className="home btn btn-primary" onClick={() => { handleLogin() }}>LogIn</button>
                
                </div>
            </nav>
            <h2 className="contant">Welcome to our Page</h2>
        </div>
    )
}
