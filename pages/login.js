/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState } from "react";
import Head from "next/head";

const Login = () => {
    const [showPassword, setshowPassword] = useState(false);
    const togglePassword = () => {
        setshowPassword(!showPassword);
    };
    return (
        <div className={"Login_Wrapper"}>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                    integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
                    // eslint-disable-next-line react/no-unknown-property
                    crossorigin="anonymous"
                    referrerpolicy="no-referrer"
                />
            </Head>
            <div className={"Login_Form"}>
                <div className={"Login_Container"}>
                    <h1 className={"Login_Header"}>Login to Dokan</h1>
                    <h3 className={"Register_Header"}>
                        Don&apos;t have an account?{" "}
                        <a href="/signup">Register</a>
                    </h3>
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        className={"Email_Input"}
                        placeholder=""
                    />
                    <div className={"Password_Container"}>
                        <label htmlFor="password">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className={"Password_Input"}
                            placeholder=""
                        />
                        <span className={"Pw_Icon"} onClick={togglePassword}>
                            <i className="fa-regular fa-eye"></i>{" "}
                        </span>
                    </div>
                    <div className={"ForgetPassword_Wrapper"}>
                        <div className="_checkbox">
                            <input
                                type="checkbox"
                                name="remember"
                                className="CheckBox"
                            />
                            <label htmlFor="remember">keep me signed in</label>
                        </div>
                        <a
                            href="/forgot-password"
                            className={"ForgetPassword_Link"}
                        >
                            Forgot Password ?
                        </a>
                    </div>
                    <button className={"Signin_Button"}>Sign in</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
