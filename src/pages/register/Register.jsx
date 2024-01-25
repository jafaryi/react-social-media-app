import './Register.css'
// import { useContext, useRef } from 'react'
// import { loginCall } from '../../apiCalls'
// import { AuthContext } from '../../context/AuthContext'
// import { CircularProgress } from '@material-ui/core'

export default function Register() {

    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social App</h3>
                    <span className="loginDesc"> Connect with her friends and world around you</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="UserName" type="email" className="loginInput"/>
                        <input placeholder="Email" type="email" className="loginInput"/>
                        <input placeholder="Password" type="email" className="loginInput"/>
                        <input placeholder="Password Again" type="password" className="loginInput"/>
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}