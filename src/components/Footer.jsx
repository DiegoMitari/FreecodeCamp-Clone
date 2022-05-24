import React from "react";
import '../style/Footer.css';

function Footer() {
    return (
        <footer>
            {/* historia */}
            <div className="first-column">
                <p>freeCodeCamp is a donor-supported tax-exempt 501(c)(3) 
                    nonprofit organization (United States Federal 
                    Tax Identification Number: 82-0779546)</p>
                <p>Our mission: to help people learn to code for free. 
                    We accomplish this by creating thousands of videos, articles,
                     and interactive coding lessons - all freely available to the public. 
                     We also have thousands of freeCodeCamp study groups around the world.</p>
                <p>Donations to freeCodeCamp go toward our education initiatives,
                     and help pay for servers, services, and staff.</p>
                <p>You can <a href="">make a tax-deductible donation here</a>.</p>
            </div>
            {/* enlaces */}
            <div className="second-column">
                <div>
                    <h3>Trending Guides</h3>
                </div>
                <div className="column-grid">
                <div className="footer-col">
                    <a className="link-footer" href="">Javascript Split()</a>
                    <a className="link-footer" href="">HTML Bullet Points</a>
                    <a className="link-footer" href="">What is UX Design?</a>
                    <a className="link-footer" href="">Dark Mode on Google</a>
                    <a className="link-footer" href="">Contraction Grammar</a>
                    <a className="link-footer" href="">What is a JSON file?</a>
                    <a className="link-footer" href="">Python String Format</a>
                    <a className="link-footer" href="">Python Tuple vs List</a>
                    <a className="link-footer" href="">What is Programming?</a>
                    <a className="link-footer" href="">Check GPU in Windows</a>
                </div>
                <div className="footer-col">
                    <a className="link-footer" href="">Span HTML</a>
                    <a className="link-footer" href="">SQL Count</a>
                    <a className="link-footer" href="">HTML Comment</a>
                    <a className="link-footer" href="">Python strip()</a>
                    <a className="link-footer" href="">HTML Select Tag</a>
                    <a className="link-footer" href="">Insert into SQL</a>
                    <a className="link-footer" href="">MVC Architecture</a>
                    <a className="link-footer" href="">What is the DOM?</a>
                    <a className="link-footer" href="">HTML Button Type</a>
                    <a className="link-footer" href="">SCP Linux Command</a>
                </div>
                <div className="footer-col">
                    <a className="link-footer" href="">HTML File Text Editor</a>
                    <a className="link-footer" href="">Responsive Web Design</a>
                    <a className="link-footer" href="">Online Coding Classes</a>
                    <a className="link-footer" href="">Python String to Array</a>
                    <a className="link-footer" href="">Lambda Function Python</a>
                    <a className="link-footer" href="">SQL Distinct Statement</a>
                    <a className="link-footer" href="">HEIC to JPG on Windows</a>
                    <a className="link-footer" href="">Insert Checkbox in Word</a>
                    <a className="link-footer" href="">Drop Pin on Google Maps</a>
                    <a className="link-footer" href="">Rotate Screen Windows 10</a>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;