import stockProfile from "../images/placeholder-profile-sq.jpg";
import { useStateContext } from "../contexts/contextProvider";
import axiosClient from "../axios-client";
import { useRef } from "react";
import { useState } from "react";

export default function Profile() {
    const { user, setUser } = useStateContext();
    const passwordRef = useRef();
    const changeRef = useRef();
    const [typeOfChange, setTypeOfChange] = useState("");
    const [errors, setErrors] = useState(null);

    // button should not change the pass but just spawn the input field maybe
    function changePassword() {
        setErrors(null);
        console.log("change password");
        const payload = {
            email: user.email,
            password: passwordRef.current.value,
            change: changeRef.current.value,
        };
        axiosClient
            .post("/change-password", payload)
            .then(({ data }) => {
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
    }
    function changeName() {
        setTypeOfChange(null);
        console.log("change name");
    }
    function deleteAccount() {}
    function changeBtn() {
        console.log("change btn");
        if (typeOfChange === "password") {
            changePassword();
        }
    }
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
                                    onClick={() => setTypeOfChange("password")}
                                >
                                    Change Password
                                </button>
                                <button
                                    type="button"
                                    className="btn color-secondary"
                                    onClick={() => setTypeOfChange(null)}
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
                            </div>
                            <p className="card-text h5">
                                New {typeOfChange ? "Password" : "Name"}
                            </p>
                            <div className="form-floating mb-3">
                                <input
                                    ref={changeRef}
                                    type={typeOfChange ? "Password" : "text"}
                                    className="form-control"
                                    id="floatingChange"
                                    placeholder="New"
                                ></input>
                                <label htmlFor="floatingChange">
                                    New {typeOfChange ? "Password" : "Name"}
                                </label>
                            </div>
                            <button
                                className="btn color-primary"
                                onClick={changeBtn}
                            >
                                Change {typeOfChange ? "Password" : "Name"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
