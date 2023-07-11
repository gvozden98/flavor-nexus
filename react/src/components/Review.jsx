/* eslint-disable react/prop-types */
function Review({ reviews }) {
    {
        reviews ? console.log(reviews) : console.log("no reviews");
    }
    return (
        <div className="container text-center mt-3">
            <div className="row">
                <div className="col-xl-9" style={{ border: "1px solid red" }}>
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
                                                <img
                                                    src={review.slika}
                                                    alt="Slika proizvoda"
                                                />
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
                                                </div>
                                                <div className="card-footer text-body-secondary">
                                                    <p></p>
                                                </div>
                                            </div>
                                        );
                                    })}
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

export default Review;
