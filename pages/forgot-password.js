import React from "react";

const ForgotPassword = () => {
    return (
        <div className={"ForgotPassword_Wrapper"}>
            <div className={"ForgotPassword_Form"}>
                <div className={"ForgotPassword_Container"}>
                    <h1 className={"ForgotPassword_Header"}>Forgot Password</h1>
                    <h3 className={"ForgotPassword_Text"}>
                        Don&apos;t worry! We got your back. Enter your
                        registered Email address to get a reset link
                    </h3>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="number"
                        name="phone"
                        className={"Phone_Input"}
                        placeholder=""
                    />{" "}
                    <button className={"ForgotPassword_Button"}>
                        Send Password Reset Link
                    </button>
                    <h3 className={"ForgotPassword_Text"}>
                        Go back to
                        <a href="/login"> sign in </a>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
