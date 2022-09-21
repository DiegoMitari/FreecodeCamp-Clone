import React from "react";
import '../style/SectionBusiness.css';

function SectionBusiness() {
    return (
        <div className="section-business">
            <p className="">As seen in:</p>
            <div className="logo-business">
                <span>  <ion-icon name="logo-github"></ion-icon>        </span>
                <span>  <ion-icon name="logo-twitch"></ion-icon>        </span>
                <span>  <ion-icon name="logo-discord"></ion-icon>       </span>
                <span>  <ion-icon name="logo-twitch"></ion-icon>        </span>
                <span>  <ion-icon name="logo-bitcoin"></ion-icon>       </span>
                <span>  <ion-icon name="logo-dribbble"></ion-icon>      </span>
                <span>  <ion-icon name="logo-figma"></ion-icon>         </span>
                <span>  <ion-icon name="logo-behance"></ion-icon>       </span>
                <span>  <ion-icon name="logo-buffer"></ion-icon>        </span>
                <span>  <ion-icon name="logo-stackoverflow"></ion-icon> </span>
            </div>
        </div>
    );
}

export default SectionBusiness;

