import { useState } from "react";

import { useOutletContext } from "react-router-dom";

function NewReview() {
    //outlet context omogucava da se podaci proslede iz jednog komponenta u drugi, user u ovom slucaju
    const [user] = useOutletContext();
    const [formData, setFormData] = useState({
        user_id: user.id,
        title: "",
        uvod: "",
        sastav: "",
        cena: "",
        ukus: "",
        dizajn: "",
        zakljucak: "",
    });
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Perform form submission actions here, such as API requests or validation
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
                                            <form onSubmit={handleFormSubmit}>
                                                <div className="form-group">
                                                    <label
                                                        htmlFor="formGroupExampleInput"
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
                                                        htmlFor="formGroupExampleInput2"
                                                        className="fs-4"
                                                    >
                                                        Uvod:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="uvod"
                                                        name="uvod"
                                                        value={formData.uvod}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                    ></input>
                                                </div>
                                                <div className="form-group">
                                                    <label
                                                        htmlFor="formGroupExampleInput2"
                                                        className="fs-4"
                                                    >
                                                        Sastav:
                                                    </label>
                                                    <textarea
                                                        rows="4"
                                                        type="text"
                                                        className="form-control"
                                                        id="sastav"
                                                        name="sastav"
                                                        value={formData.sastav}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                    ></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <label
                                                        htmlFor="formGroupExampleInput2"
                                                        className="fs-4"
                                                    >
                                                        Cena:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="cena"
                                                        name="cena"
                                                        value={formData.cena}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                    ></input>
                                                </div>
                                                <div className="form-group">
                                                    <label
                                                        htmlFor="formGroupExampleInput2"
                                                        className="fs-4"
                                                    >
                                                        Ukus:
                                                    </label>
                                                    <textarea
                                                        rows="4"
                                                        type="text"
                                                        className="form-control"
                                                        id="ukus"
                                                        name="ukus"
                                                        value={formData.ukus}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                    ></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <label
                                                        htmlFor="formGroupExampleInput2"
                                                        className="fs-4"
                                                    >
                                                        Dizajn:
                                                    </label>
                                                    <textarea
                                                        rows="4"
                                                        type="text"
                                                        className="form-control"
                                                        id="dizajn"
                                                        name="dizajn"
                                                        value={formData.dizajn}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                    ></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <label
                                                        htmlFor="formGroupExampleInput2"
                                                        className="fs-4"
                                                    >
                                                        Zakljucak:
                                                    </label>
                                                    <textarea
                                                        rows="4"
                                                        type="text"
                                                        className="form-control"
                                                        id="zakljucak"
                                                        name="zakljucak"
                                                        value={
                                                            formData.zakljucak
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

export default NewReview;
