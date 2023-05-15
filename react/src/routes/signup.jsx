import { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/contextProvider";
import { useState } from "react";
const Title = styled.h1`
    font-family: "Zen Dots", cursive;
`;

export default function Signup() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const [errors, setErrors] = useState(null);
    const { setToken, setUser } = useStateContext();
    const onSubmit = (e) => {
        e.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        };

        console.log(payload);
        setErrors(null);
        axiosClient
            .post("/signup", payload)
            .then(({ data }) => {
                setToken(data.token);
                setUser(data.user);
                //console.log(data);
            })
            .catch((err) => {
                //console.log(err);
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors); //set errors for the alert
                }
            });
    };

    return (
        <div className="row">
            <div className="col-lg"></div>
            <div className="col-lg">
                <div className="container ">
                    <div className="card mt-5">
                        <div className="card-header text-center">
                            <Title>Register</Title>
                        </div>
                        <form onSubmit={onSubmit}>
                            {/* display error for wrong login */}
                            {errors && (
                                <div className="container mt-3">
                                    <div
                                        className="alert alert-danger"
                                        role="alert"
                                    >
                                        {Object.keys(errors).map((key) => (
                                            <p key={key}>{errors[key][0]}</p>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div className="card-body  bg-light-subtle">
                                <div className="form-floating mb-3">
                                    <input
                                        ref={nameRef}
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Name"
                                    ></input>
                                    <label htmlFor="floatingInput">Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        ref={emailRef}
                                        type="email"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                    ></input>
                                    <label htmlFor="floatingInput">
                                        Email address
                                    </label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        ref={passwordRef}
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        name="password"
                                    ></input>
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        ref={passwordConfirmationRef}
                                        type="password"
                                        className="form-control"
                                        id="password_confirmation"
                                        placeholder="Password"
                                        name="password_confirmation"
                                    ></input>
                                    <label htmlFor="password_confirmation">
                                        Password confirmation
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="btn color-accent accent-button mx-2 px-2 mb-2"
                                >
                                    Register
                                </button>
                                <span>Already have an account?</span>
                                <Link
                                    to="/login"
                                    className="btn color-secondary secondary-button mx-2 px-2 mb-2"
                                >
                                    Login
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-lg"></div>
        </div>
    );
}
