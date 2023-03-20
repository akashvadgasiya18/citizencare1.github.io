import React from "react";
import "react-bootstrap";
import "../../css/Footer.css";

const Footer = () => {
    return (
        <>
            <footer>
                <div class="footer-basic">
                    <div class="container">
                        <h2>Citizencare.com</h2>
                    </div>

                    <div class="social">
                        <a href="./Footer.js">
                            <i class="icon ion-social-instagram"></i>
                        </a>
                        <a href="./Footer.js">
                            <i class="icon ion-social-whatsapp"></i>
                        </a>
                        <a href="./Footer.js">
                            <i class="icon ion-social-twitter"></i>
                        </a>
                        <a href="./Footer.js">
                            <i class="icon ion-social-facebook"></i>
                        </a>
                    </div>
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <a href="./Footer.js">Home</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="./Footer.js">Services</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="./Footer.js">About</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="./Footer.js">Terms</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="./Footer.js">Privacy Policy</a>
                        </li>
                    </ul>
                    <div className="cpright">
                        <p class="copyright">Citizencare.com. copy right - © 2023-2040</p>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;
