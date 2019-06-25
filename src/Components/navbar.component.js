import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collpase navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                        <Link
                            to="/"
                            style={{
                                fontFamily: "monospace"
                            }}
                            className="col s5 brand-logo center black-text"
                        >
                            <i className="material-icons">book</i>
                           Bookservice
                        </Link>
                            <li className="navbar-item">
                                <Link to="/home" className="nav-link">Home</Link>
                            </li>
                        <li className="navbar-item">
                            <Link to="/book" className="nav-link">Books</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/news/addNews" className="nav-link">Add News</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/books/addBook" className="nav-link">Add Books</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/regulations" className="nav-link">Regulations</Link>
                        </li>
                        </ul>
                    </div>

                </nav>

        );
    }
}
export default Navbar;
