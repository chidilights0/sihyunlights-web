import React from "react";
import "./Pages.css"

function Projects() {
    return (
        <div class="sectionContainer">
            <div class="noBanner"></div>
            <section class="maxWidth titleCenter">
                <h1>projects</h1>
                <p>List of my projects in design, visual arts and music.</p>
            </section>
            <div className="hrWrapper maxWidth"><hr/></div>

            <section class="maxWidth">
                <h2>design</h2>
                <div className="List ListM">
                    <a href="https://x.com/siriusinyoursky" target="_blank" rel="noopener noreferrer">
                        <img src="/fluid.jpg" alt="fluid"></img>
                    </a>
                    <a href="https://www.instagram.com/p/C7JCNnTh7FX/" target="_blank" rel="noopener noreferrer">
                        <img src="/ReformParty.jpg" alt="Reform Party"></img>
                    </a>
                    <a href="https://www.instagram.com/p/C4srOTqpVyh/" target="_blank" rel="noopener noreferrer">
                        <img src="/Cable.jpg" alt="cable."></img>
                    </a>
                    <a href="https://www.instagram.com/p/C2PcizmhwEC/" target="_blank" rel="noopener noreferrer">
                        <img src="/PeopleLogistics.jpg" alt="People Logistics"></img>
                    </a>
                    <a href="https://www.instagram.com/p/C0ZL2yoBYfz/" target="_blank" rel="noopener noreferrer">
                        <img src="/PeopleParty.jpg" alt="Public Relations Manual for Prospective Candidates for People Power Party"></img>
                    </a>
                    <a href="https://www.behance.net/gallery/183282899/_" target="_blank" rel="noopener noreferrer">
                        <img src="/NewParty.jpg" alt="New Party"></img>
                    </a>
                </div>
            </section>
            <div className="hrWrapper maxWidth"><hr/></div>

            <section class="maxWidth">
                <h2>visual / cover</h2>
                <div className="List ListM">
                    <iframe src="https://www.youtube.com/embed/c0sW0KuZAok?color=white" title="YouTube Player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe src="https://www.youtube.com/embed/WV9Ho5fx4Lk?color=white" title="YouTube Player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe src="https://www.youtube.com/embed/CCoEz_RywPI?color=white" title="YouTube Player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </section>

            <section class="maxWidth">
                <h2>music <span className="unHighlight">(learning)</span></h2>
                <div className="List ListM">
                    <iframe title="SoundCloud Player" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1912390097&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                    <iframe title="SoundCloud Player" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1828652061&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                    <iframe title="SoundCloud Player" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1805972508&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </div>
            </section>
        </div>
    )
}

export default Projects;