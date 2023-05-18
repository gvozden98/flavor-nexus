import stockProfile from "../images/placeholder-profile-sq.jpg";
import { useStateContext } from "../contexts/contextProvider";
import axiosClient from "../axios-client";
import { useRef } from "react";
import { useState } from "react";

export default function Profile() {
    const { user, setUser, setToken } = useStateContext();
    const passwordRef = useRef();
    const changeRef = useRef();
    const [typeOfChange, setTypeOfChange] = useState("password");
    const [errors, setErrors] = useState(null);
    const [success, setSuccess] = useState(null);

    // button should not change the pass but just spawn the input field maybe
    function changePassword() {
        setErrors(null);
        setSuccess(null);
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
                setSuccess(data.message);
                passwordRef.current.value = "";
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
        setErrors(null);
        setSuccess(null);
        console.log("change name");
        const payload = {
            name: user.name,
            password: passwordRef.current.value,
            change: changeRef.current.value,
        };
        axiosClient
            .post("/change-name", payload)
            .then(({ data }) => {
                console.log(data);
                setUser(data.user);
                setSuccess(data.message);
                passwordRef.current.value = "";
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
    function deleteAccount() {
        setErrors(null);
        setSuccess(null);
        console.log("Delete account");
        const payload = {
            email: user.email,
            password: passwordRef.current.value,
            change: changeRef.current.value,
        };
        axiosClient
            .post("/delete-acc", payload)
            .then(({ data }) => {
                console.log(data);
                setSuccess(data.message);
                passwordRef.current.value = "";
                setUser({});
                setToken(null);
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
    function changeBtn() {
        setSuccess(null);
        console.log("change btn");
        if (typeOfChange === "password") {
            changePassword();
        }
        if (typeOfChange === "name") {
            changeName();
        }
        if (typeOfChange === "deleteAcc") {
            deleteAccount();
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
                                    onClick={() => {
                                        setTypeOfChange("password");
                                        setSuccess(null);
                                        setErrors(null);
                                    }}
                                >
                                    Change Password
                                </button>
                                <button
                                    type="button"
                                    className="btn color-secondary"
                                    onClick={() => {
                                        setTypeOfChange("name");
                                        setSuccess(null);
                                        setErrors(null);
                                    }}
                                >
                                    Change Name
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => {
                                        setTypeOfChange("deleteAcc");
                                        setSuccess(null);
                                        setErrors(null);
                                    }}
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
                            {success && (
                                <div className="container mt-3">
                                    <div
                                        className="alert alert-success"
                                        role="alert"
                                    >
                                        <p>{success}</p>
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
                                {typeOfChange === "password"
                                    ? "New Password"
                                    : typeOfChange === "name"
                                    ? "New Name"
                                    : typeOfChange === "deleteAcc"
                                    ? "Confirm Password"
                                    : ""}
                            </p>
                            <div className="form-floating mb-3">
                                <input
                                    ref={changeRef}
                                    type={
                                        typeOfChange === "password"
                                            ? "password"
                                            : typeOfChange === "deleteAcc"
                                            ? "password"
                                            : "text"
                                    }
                                    className="form-control"
                                    id="floatingChange"
                                    placeholder={
                                        typeOfChange === "password"
                                            ? "New Password"
                                            : typeOfChange === "name"
                                            ? "Name"
                                            : typeOfChange === "deleteAcc"
                                            ? "Confirm password"
                                            : ""
                                    }
                                ></input>
                                <label htmlFor="floatingChange">
                                    {typeOfChange === "password"
                                        ? "New Password"
                                        : typeOfChange === "name"
                                        ? "New Name"
                                        : typeOfChange === "deleteAcc"
                                        ? "Confirm password"
                                        : ""}
                                </label>
                            </div>
                            <button
                                className={
                                    typeOfChange === "deleteAcc"
                                        ? "btn btn-danger"
                                        : typeOfChange !== "deleteAcc"
                                        ? "btn color-primary"
                                        : "btn"
                                }
                                onClick={changeBtn}
                            >
                                {typeOfChange === "password"
                                    ? "Change Password"
                                    : typeOfChange === "name"
                                    ? "Change Name"
                                    : typeOfChange === "deleteAcc"
                                    ? "Delete Account"
                                    : ""}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
