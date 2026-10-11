import React from "react"
import { Link } from "react-router-dom";
import HomePage from "./home/HomePage";

function NotFound(){
    return (
        <div className="container p-5 mb-5 mt-5">
            <div className="row">
                <p>404</p>
                <h1 className="mb-3 text-muted">Kiaan couldn’t find that page</h1>
                <p>We couldn’t find the page you were looking for.<br/> Visit   
                <Link to="/"> Zerodha's Home Page</Link></p>
            </div>
        </div>
    )
}

export default NotFound;