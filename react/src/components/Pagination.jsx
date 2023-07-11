/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Pagination({ next, previous }) {
    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        {/* <Link
                            className="page-link"
                            to="/category/eat"
                            state={{
                                click: true,
                                previousPage: previous,
                            }}
                            tabIndex="-1"
                        >
                            Previous
                        </Link> */}
                    </li>
                    <li className="page-item">
                        <Link
                            className="page-link"
                            to="/category/eat"
                            state={{
                                nextPage: next,
                            }}
                        >
                            Next
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;
