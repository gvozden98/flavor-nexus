/* eslint-disable react/prop-types */
import { useOutletContext } from "react-router-dom";
import { deleteReview } from "./deleteReview";

function Review({ reviews }) {
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
    // const handleReviewDeletion = (id) => {
    //     deleteReview(id);
    // };

    reviews ? console.log(reviews) : console.log("no reviews");
    user.admin === 1 ? console.log("admin") : console.log("not admin");

    return (
        <div className="container text-center mt-3">
            <div className="row">
                <div className="col">
                    <div className="card mb-3">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    {/* nisi zavrsio ovo  */}
                                    {reviews.map((review, index) => {
                                        return (
                                            <div
                                                className="card my-2"
                                                key={index}
                                            >
                                                <div className="card-header text-start fs-2">
                                                    {review.title}
                                                </div>
                                                {review.slika ? (
                                                    <img
                                                        src={review.slika}
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
                                                    <p>{review.uvod}</p>
                                                    <h3>Sastav</h3>
                                                    <p>{review.sastav}</p>
                                                    <h3>Cena</h3>
                                                    <p>{review.cena}</p>
                                                    <h3>Ukus i tekstura</h3>
                                                    <p>{review.ukus}</p>
                                                    <h3>Dizajn</h3>
                                                    <p>{review.dizajn}</p>
                                                    <h3>Zakljucak</h3>
                                                    <p>{review.zakljucak}</p>
                                                    <br />
                                                    <p></p>
                                                    {/* Delete review and refresh the page */}
                                                    {user.admin === 1 ? (
                                                        <button
                                                            type="button"
                                                            className="btn btn-danger"
                                                            onClick={() => {
                                                                deleteReview(
                                                                    review.id
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
                                                            review.created_at
                                                        )}{" "}
                                                        {/* Mora da se ide u bazu ovde,ovo vraca aktivnog usera, a ne onog ko je napisao review */}
                                                        by {user.email}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
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

export default Review;
