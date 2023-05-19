/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const HeaderStyle = styled.div`
    background-color: {
    }
    font-family: "Zen Dots", cursive;
`;

function Eat({ header, headers, headerColor, link, cardTitles, cardContents }) {
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
                            <div className="card-body">
                                <h6 className="card-title">
                                    Different tortilla wrap – recept koji želiš
                                    nositi na posao
                                </h6>
                                <p className="card-text">
                                    Da ti predstavim jedan ukusan i praktičan
                                    recept za različite tortilla wrapove koje
                                    ćeš jedva dočekati da poneseš sa sobom na
                                    posao! Ovaj recept će oživjeti tvoju
                                    uobičajenu ručnu pauzu i donijeti svježinu i
                                    raznolikost u tvoj radni dan.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card my-2">
                            <div className="card-header text-start fs-6">
                                {headers[1]}
                            </div>
                            <div className="card-body">
                                <h6 className="card-title">Card title</h6>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card my-2">
                            <div className="card-header text-start fs-6">
                                {headers[2]}
                            </div>
                            <div className="card-body">
                                <h6 className="card-title">Card title</h6>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-footer text-body-secondary">2 days ago</div>
        </div>
    );
}

export default Eat;
