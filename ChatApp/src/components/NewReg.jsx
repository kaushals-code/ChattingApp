import React from "react";
import "./Login.css"

function NewReg() {
    return (
        <>
            <div className="full">
                <div className="login-box">
                    <h1>Register here</h1>
                    <input type="text" name="username" placeholder="Username" />
                    <input type="text" name="email" placeholder="Email" />
                    <input type="text" name="phone" placeholder="Phone" />
                    <input type="password" name="password" placeholder="Password" />
                    <button>Sign up!</button>
                </div>
            </div>
        </>
    );
}

export default NewReg;