import React from "react";
import '../style/MainSection.css';

function MainSection() {
    return (
        <div className="main-section">
            <div className="section-information">
                <p>Learn to code — for free.</p>
                <p>Build projects.</p>
                <p>Earn certifications.</p>
                <p className="last-information">Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including:</p>
            </div>
            <div className="logos-row">
                <span className="logo-row"><ion-icon name="logo-apple"></ion-icon></span>
                <span className="logo-row"><ion-icon name="logo-google"></ion-icon></span>
                <span className="logo-row"><ion-icon name="logo-microsoft"></ion-icon></span>
                <span className="logo-row"><ion-icon name="logo-twitter"></ion-icon></span>
                <span className="logo-row"><ion-icon name="logo-amazon"></ion-icon></span>
            </div>
                <div className="div-cta">
                < button className="button-cta">Get Started (It's Free)</ button>
                </div>
        </div>
    );
}

export default MainSection;