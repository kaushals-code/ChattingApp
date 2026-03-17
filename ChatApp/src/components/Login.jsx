import React, { useState } from "react";
import "./Login.css";
import { giveStatus, auth } from "../Auth";
import { createSearchParams, useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [creds, changeCreds] = useState({
        username: "",
        password: ""
    })

    function handleChange(event) {
        changeCreds((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    }

    function handleLogin() {

        auth(creds.username, creds.password);
        const res = giveStatus();

        // console.log(res);
        if (res.status === "goodtogo") {
            navigate("/dashboard");
        } else {
            navigate("/login");
        }

    }

    return (
        <>
            <div className="full">
                <div className="login-box">
                    <h1>Login here</h1>
                    <input type="text" name="username" placeholder="Username or Email or Phone" value={creds.username} onChange={handleChange} />
                    <input type="password" name="password" placeholder="Password" value={creds.password} onChange={handleChange} />
                    <button onClick={handleLogin}>Log in!</button>
                    <button onClick={() => { navigate("/newreg") }}>New?  Sign up!</button>
                </div>
            </div>
        </>
    );
}

export default Login;