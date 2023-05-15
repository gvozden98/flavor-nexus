import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
    font-family: "Zen Dots", cursive;
`;

const onSubmit = (e) => {
    e.preventDefault();
    console.log("login");
};

export default function login() {
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
                            <div className="card-body  bg-light-subtle">
                                <div className="form-floating mb-3">
                                    <input
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
