import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return(
    <div>
        <nav id="nav">
            <Link to={"/"}>All Players</Link>
            <Link to={"/SinglePlayerContainer"}>Single Player</Link>
            <Link to={"/NewPlayerFormContainer"}>New Player Form</Link> 
        </nav>
    </div>
    )
}

export default NavBar;