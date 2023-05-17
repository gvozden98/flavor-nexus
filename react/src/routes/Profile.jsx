import stockProfile from "../images/placeholder-profile-sq.jpg";
import { useStateContext } from "../contexts/contextProvider";
import axiosClient from "../axios-client";
import { useRef } from "react";
import { useState } from "react";

export default function Profile() {
    const { user, setUser } = useStateContext();
    const passwordRef = useRef();
    const changeRef = useRef();
    const { typeOfChange, setTypeOfChange } = useState("");
    
    // button should not change the pass but just spawn the input field maybe
    function changePassword() {
        setTypeOfChange("password");
        console.log("change password");
        const payload = {
            email: user.email,
            password: passwordRef.current.value,
        };
        axiosClient
            .post("/change-password", payload)
            .then(({ data }) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    function changeName() {
        setTypeOfChange("name");
        console.log("change name");
    }
    function deleteAccount() {}
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6 mb-3">
                    <div className="card">
                        <img
                            className="card-img-top"
                            src={stockProfile}
                            alt="profile photo"
                        ></img>
                        <div className="card-body">
                            <h1 className="card-title">
                                {user ? user.name : ""}
                            </h1>
                            <p className="card-text">
                                <span> {user ? user.email : ""}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header h2">Manage profile</div>

                        <div className="card-body">
                            <h5 className="card-title"></h5>
                            <p className="card-text"></p>
                            <div
                                className="btn-group mb-3"
                                role="group"
                                aria-label="Basic example"
                            >
                                <button
                                    type="button"
                                    className="btn color-accent"
                                    onClick={changePassword}
                                >
                                    Change Password
                                </button>
                                <button
                                    type="button"
                                    className="btn color-secondary"
                                    onClick={changeName}
                                >
                                    Change Name
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={deleteAccount}
                                >
                                    Delete Account
                                </button>
                            </div>
                            <p className="card-text h5">
                                Confirm your password to make changes
                            </p>
                            <div className="form-floating mt-4 mb-3">
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
                                <div className="form-floating mb-3">
                                    <input
                                        ref={changeRef}
                                        type="text"
                                        className="form-control"
                                        id="floatingChange"
                                    ></input>
                                    {/* This label needs to render on button click again probably useffect or smth like that*/}
                                    <label htmlFor="floatingChange">
                                        New {typeOfChange}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
