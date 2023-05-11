import { Link } from "react-router-dom";
import styled from "styled-components";
import { useRef } from "react";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/contextProvider";
const Title = styled.h1`
    font-family: "Zen Dots", cursive;
`;

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { setToken, setUser } = useStateContext();
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("register");
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirm: passwordConfirmRef.current.value,
        };

        console.log(payload);
        axiosClient
            .post("api/signup", payload)
            .then(({ data }) => {
                setToken(data.token);
                setUser(data.user);
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    console.log(response.data.errors);
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
                                <div className="form-floating mb-3">
                                    <input
                                        ref={passwordConfirmRef}
                                        type="password"
                                        className="form-control"
                                        id="floatingPasswordConfirmation"
                                        placeholder="Password"
                                    ></input>
                                    <label htmlFor="floatingPasswordConfirmation">
                                        Password confirmation
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary mx-2 px-2 mb-2"
                                >
                                    Register
                                </button>
                                <span>Already have an account?</span>
                                <Link
                                    to="/login"
                                    className="btn btn-secondary mx-2 px-2 mb-2"
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
