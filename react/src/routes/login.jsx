import { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/contextProvider";
import { useState } from "react";

const Title = styled.h1`
    font-family: "Zen Dots", cursive;
`;

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [errors, setErrors] = useState(null);
    const { setToken, setUser } = useStateContext();

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("login");
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        console.log(payload);
        setErrors(null);
        axiosClient
            .post("/login", payload)
            .then(({ data }) => {
                setToken(data.token);
                setUser(data.user);
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
                const response = err.response;
                if (response && response.status === 422) {
                    if (response.data.errors) {
                        setErrors(response.data.errors); //set errors for the alert
                    } else {
                        setErrors({ email: [response.data.message] });
                    }
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
                            <Title>Login</Title>
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
                                        id="floatingPassword"
                                        placeholder="Password"
                                    ></input>
                                    <label htmlFor="floatingPassword">
                                        Password
                                    </label>
                                </div>
                                <button
                                    href="#"
                                    className="btn accent-button color-accent mx-2 px-2 mb-2"
                                >
                                    Login
                                </button>
                                <span>Not registered?</span>
                                <Link
                                    to="/signup"
                                    className="btn color-secondary secondary-button mx-2 px-2 mb-2"
                                >
                                    Register
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
