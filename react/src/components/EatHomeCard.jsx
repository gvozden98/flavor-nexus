/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const HeaderStyle = styled.div`
    background-color: {
    }
    font-family: "Zen Dots", cursive;
`;

function EatHomeCard({
    header,
    headers,
    headerColor,
    link,
    cardTitles,
    cardImages,
    cardContents,
    reviews,
    education,
}) {
    return (
        <div className="card mb-3">
            {/* Can't disable link styling */}
            <Link to={link} style={{ textDecoration: "none" }}>
                <HeaderStyle
                    className={`card-header text-start fs-5 ${headerColor}`}
                >
                    {header}
                </HeaderStyle>
            </Link>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card my-2">
                            <div className="card-header text-start fs-6">
                                {headers[0]}
                            </div>
                            <img
                                className="card-img-top"
                                src={cardImages[0] ? cardImages[0] : ""}
                                alt="Card image cap"
                            ></img>
                            <div className="card-body">
                                <h6 className="card-title">
                                    {cardTitles[0] ? cardTitles[0] : "title"}
                                </h6>
                                {cardContents[0].map((content, index) => {
                                    return (
                                        <li className="card-text" key={index}>
                                            {content}
                                        </li>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card my-2">
                            <Link to="/eat/reviews">
                                <div className="card-header text-start fs-6">
                                    {headers[1]}
                                </div>
                            </Link>
                            <img
                                className="card-img-top"
                                src={reviews[0].slika ? reviews[0].slika : ""}
                                alt="Card image cap"
                            ></img>
                            <div className="card-body">
                                <h6 className="card-title">
                                    {reviews[0].title
                                        ? reviews[0].title
                                        : "title"}
                                </h6>
                                <p className="card-text">
                                    {reviews[0].uvod ? reviews[0].uvod : "uvod"}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card my-2">
                            <div className="card-header text-start fs-6">
                                {headers[2]}
                            </div>
                            <div className="card-body">
                                <h6 className="card-title">
                                    {education[0].title
                                        ? education[0].title
                                        : "Title"}
                                </h6>
                                {education[0].uvod ? education[0].uvod : "Body"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-footer text-body-secondary"></div>
        </div>
    );
}

export default EatHomeCard;
