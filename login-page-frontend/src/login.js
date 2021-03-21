import axios from 'axios'
import React, { useState } from 'react'

export default function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div>
            <form className="container">
                <h2>Log In</h2>
                <div className="form-group ">
                    <input type="text" placeholder="Enter Your Email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <input type="Password" placeholder="Enter Your Password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <button type="button" className="form-control" onClick={() => { props.signupHandler(email, password) }}>Sign up</button>
                </div>
                <div className="form-group">
                    <button type="button" className="form-control" onClick={() => { props.loginHandler(email, password) }}>Log In</button>
                </div>
            </form>
        </div>
    )
}
