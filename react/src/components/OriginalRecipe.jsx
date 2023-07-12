/* eslint-disable react/prop-types */
import { useOutletContext } from "react-router-dom";
import { deleteOriginalRecipe } from "./deleteOriginalRecipe";
function OriginalRecipe({ originalRecipes }) {
    const [user] = useOutletContext();
    const formatDatetime = (datetime) => {
        const formattedDatetime = new Date(datetime).toLocaleString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });
        console.log(formattedDatetime);
        return formattedDatetime;
    };
    originalRecipes ? console.log(originalRecipes) : console.log("no recipes");

    return (
        <div className="container text-center mt-3">
            <div className="row">
                <div className="col">
                    <div className="card mb-3">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    {/* nisi zavrsio ovo  */}
                                    {console.log(originalRecipes)}
                                    {originalRecipes.map(
                                        (originalRecipe, index) => {
                                            console.log(originalRecipe);
                                            return (
                                                <div
                                                    className="card my-2"
                                                    key={index}
                                                >
                                                    <div className="card-header text-start fs-2">
                                                        {originalRecipe.title}
                                                    </div>
                                                    {originalRecipe.slika ? (
                                                        <img
                                                            src={
                                                                originalRecipe.slika
                                                            }
                                                            alt="Slika proizvoda"
                                                        />
                                                    ) : (
                                                        <></>
                                                    )}
                                                    <div
                                                        className="card-body"
                                                        style={{
                                                            textAlign: "left",
                                                        }}
                                                    >
                                                        <h4>Opis</h4>
                                                        <p>
                                                            {
                                                                originalRecipe.opis
                                                            }
                                                        </p>
                                                        <h3>Vreme</h3>
                                                        <p>
                                                            {
                                                                originalRecipe.vreme
                                                            }
                                                        </p>
                                                        <h3>Sastojci</h3>
                                                        <p>
                                                            {
                                                                originalRecipe.sastojci
                                                            }
                                                        </p>
                                                        <h3>Uputstvo</h3>
                                                        <p>
                                                            {
                                                                originalRecipe.uputstvo
                                                            }
                                                        </p>

                                                        <br />
                                                        <p></p>
                                                        {user.admin === 1 ? (
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger"
                                                                onClick={() => {
                                                                    deleteOriginalRecipe(
                                                                        originalRecipe.id
                                                                    );
                                                                    setTimeout(
                                                                        () => {
                                                                            window.location.reload(
                                                                                true
                                                                            );
                                                                        },
                                                                        500
                                                                    );
                                                                }}
                                                            >
                                                                Delete
                                                            </button>
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </div>
                                                    <div className="card-footer text-body-secondary">
                                                        <p>
                                                            {formatDatetime(
                                                                originalRecipe.created_at
                                                            )}{" "}
                                                            {/* Mora da se ide u bazu ovde,ovo vraca aktivnog usera, a ne onog ko je napisao review */}
                                                            by {user.email}
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div
                    className="col-xl-3"
                    style={{ border: "1px solid red" }}
                ></div> */}
            </div>
        </div>
    );
}

export default OriginalRecipe;
