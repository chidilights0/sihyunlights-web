import React from "react";
import "./Footer.css"

function Footer() {
    return (
        <footer>
            <p>© 2024 sihyunlights</p>
            <div id="footerMenu">
                <a href="mailto:mail@sihyunlights.com">send mail</a>
                <div className="divider"></div>
                <a href="https://github.com/sihyunlts/sihyunlights-web" target="_blank" rel="noopener noreferrer">
                help my website (repository)
                </a>
            </div>
        </footer>
    );
}

export default Footer;