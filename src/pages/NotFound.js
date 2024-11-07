import React from "react";
import "./Pages.css"

function NotFound() {
    return (
        <div className="sectionContainer">
        <div className="noBanner"></div>
        <section className="maxWidth titleCenter">
            <h1>Page Not Found</h1>
            <p>:(</p>
        </section>
        <div className="hrWrapper maxWidth"><hr/></div>
    </div>
    )
}

export default NotFound;