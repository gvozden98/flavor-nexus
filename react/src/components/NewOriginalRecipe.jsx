import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { putOriginalRecipe } from "./putOriginalRecipe";

function NewRecipe() {
    const [user] = useOutletContext();
    const [formData, setFormData] = useState({
        user_id: user.id,
        title: "",
        opis: "",
        slika: "",
        vreme: "",
        sastojci: "",
        uputstvo: "",
    });
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Perform form submission actions here, such as API requests or validation
        putOriginalRecipe(formData);
        console.log(formData);
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    return (
        <div className="container text-center mt-3">
            <div className="row">
                <div className="col-xl-9" style={{ border: "1px solid red" }}>
                    <div className="card mb-3">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="card my-2">
                                        <div className="card-header text-start fs-2">
                                            New Review
                                        </div>

                                        <div
                                            className="card-body"
                                            style={{ textAlign: "left" }}
                                        >
                                            <form
                                                onSubmit={handleFormSubmit}
                                                method="POST"
                                            >
                                                <div className="form-group">
                                                    <label
                                                        htmlFor="title"
                                                        className="fs-4"
                                                    >
                                                        Title:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="title"
                                                        name="title"
                                                        value={formData.title}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                    ></input>
                                                </div>
                                                <div className="form-group">
                                                    <label
                                                        htmlFor="opis"
                                                        className="fs-4"
                                                    >
                                                        Opis:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="opis"
                                                        name="opis"
                                                        value={formData.opis}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                    ></input>
                                                </div>
                                                <div className="form-group">
                                                    <label
                                                        htmlFor="sastojci"
                                                        className="fs-4"
                                                    >
                                                        Vreme:
                                                    </label>
                                                    <input
                                                        rows="4"
                                                        type="text"
                                                        className="form-control"
                                                        id="vreme"
                                                        name="vreme"
                                                        value={formData.vreme}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                    ></input>
                                                </div>
                                                <div className="form-group">
                                                    <label
                                                        htmlFor="sastojci"
                                                        className="fs-4"
                                                    >
                                                        Sastojci:
                                                    </label>
                                                    <textarea
                                                        rows="4"
                                                        type="text"
                                                        className="form-control"
                                                        id="sastojci"
                                                        name="sastojci"
                                                        value={
                                                            formData.sastojci
                                                        }
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                    ></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <label
                                                        htmlFor="uputstvo"
                                                        className="fs-4"
                                                    >
                                                        Uputstvo:
                                                    </label>
                                                    <textarea
                                                        rows="4"
                                                        type="text"
                                                        className="form-control"
                                                        id="uputstvo"
                                                        name="uputstvo"
                                                        value={
                                                            formData.uputstvo
                                                        }
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                    ></textarea>
                                                </div>

                                                <br />
                                                <div className="text-center">
                                                    <button
                                                        className="btn mx-2 color-accent accent-button fs-5 text"
                                                        type="submit"
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer text-body-secondary">
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="col-xl-3"
                    style={{ border: "1px solid red" }}
                ></div>
            </div>
        </div>
    );
}

export default NewRecipe;
