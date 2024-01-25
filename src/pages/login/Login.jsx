import './Login.css'
// import { useContext, useRef } from 'react'
// import { loginCall } from '../../apiCalls'
// import { AuthContext } from '../../context/AuthContext'
// import { CircularProgress } from '@material-ui/core'

export default function Login() {

    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social App</h3>
                    <span className="loginDesc"> Connect with her friends and world around you</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" type="email" className="loginInput"/>
                        <input placeholder="Password" type="password" className="loginInput"/>
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}