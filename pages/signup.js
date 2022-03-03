/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { useState } from "react";
import Head from "next/head";

const SignUp = () => {
    const [showPassword, setshowPassword] = useState(false);
    const [showConfPassword, setshowConfPassword] = useState(false);

    const togglePassword = () => {
        setshowPassword(!showPassword);
    };
    const toggleConfPassword = () => {
        setshowConfPassword(!showConfPassword);
    };
    return (
        <div className={"Signup_Wrapper"}>
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
            <div className={"Signup_Form"}>
                <div className={"Signup_Container"}>
                    <h1 className={"Login_Header"}>Sign up to continue</h1>
                    <h3 className={"Register_Header mb-4"}>
                        Already have an account? <a href="/login">Login</a>
                    </h3>
                    <div className={"Name_Container"}>
                        <div className={"Name"}>
                            <label htmlFor="fname">First Name</label>
                            <input
                                type="text"
                                name="fname"
                                className={"FirstName_Input"}
                                placeholder=""
                            />
                        </div>
                        <div className={"Name"}>
                            <label htmlFor="lname">Last Name</label>
                            <input
                                type="text"
                                name="lname"
                                className={"lastName_Input"}
                                placeholder=""
                            />
                        </div>
                    </div>{" "}
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        className={"Email_Input"}
                        placeholder=""
                    />{" "}
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="number"
                        name="phone"
                        className={"Phone_Input"}
                        placeholder=""
                    />{" "}
                    <div className={"Password_Container"}>
                        <label htmlFor="password">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className={"Password_Input"}
                            placeholder=""
                        />{" "}
                        <span className={"Pw_Icon"} onClick={togglePassword}>
                            <i className="fa-regular fa-eye"></i>{" "}
                        </span>
                    </div>
                    <div className={"Password_Container"}>
                        <label htmlFor="confirm_pw">Confirm Password</label>
                        <input
                            type={showConfPassword ? "text" : "password"}
                            name="confirm_pw"
                            className={"Confrm_Password_Input"}
                            placeholder=""
                        />
                        <span
                            className={"Pw_Icon"}
                            onClick={toggleConfPassword}
                        >
                            <i className="fa-regular fa-eye"></i>{" "}
                        </span>
                    </div>
                    <button className={"Signin_Button mb-2"}>Sign in</button>
                    <h3 className={"Register_Header"}>
                        By clicking Sign up, you agree to our
                        <a href="/"> Terms &amp; Condition</a> and{" "}
                        <a href="/">Privacy Policy</a>.
                    </h3>
                </div>
            </div>
        </div>
    );
};
export default SignUp;
