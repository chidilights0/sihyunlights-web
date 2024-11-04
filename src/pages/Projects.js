import React from "react";
import "./Pages.css"

function Projects() {
    return (
        <div class="sectionContainer">
            <div class="noBanner"></div>
            <section class="maxWidth">
                <h1>projects</h1>
                <p>In Progress</p>
            </section>
            <div className="hrWrapper maxWidth"><hr/></div>

            <section class="maxWidth">
                <h2>visual / cover</h2>
                <div className="List">
                    <iframe src="https://www.youtube.com/embed/6rP1taIiNu8?color=white" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe src="https://www.youtube.com/embed/c0sW0KuZAok?color=white" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </section>
        </div>
    )
}

export default Projects;