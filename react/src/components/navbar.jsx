/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Link } from "react-router-dom";

const Brand = styled.span`
    font-family: "Zen Dots", cursive;
`;

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-xl navbar-light bg-info">
            <div className="container-fluid">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Brand className="navbar-brand">Flavor NEXUS</Brand>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarBasic"
                    aria-controls="navbarBasic"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarBasic">
                    <ul className="navbar-nav me-auto mb-2 mb-xl-0">
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/home"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">
                                Profile
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link disabled"
                                href="#"
                                tabIndex="-1"
                                aria-disabled="true"
                            >
                                Disabled
                            </a>
                        </li>
                    </ul>
                    <span className="navbar-text fs-5 text">
                        {props.user ? props.user.email : ""}
                    </span>
                    <button className="btn btn-danger mx-2">Logout</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
