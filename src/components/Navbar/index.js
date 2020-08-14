import React from 'react';
import "./style.css"

const Navbar = (props) => {

    return (
        <nav className="navbar">

            <div>
                <form className="form-inline">
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        onChange={props.search}
                    />
                </form>
            </div>
        </nav>
    )
}
export default Navbar;
