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
            <a href="https://www.instagram.com">
              <i class="icon ion-social-instagram"></i>
            </a>
            <a href="https://web.whatsapp.com">
              <i class="icon ion-social-whatsapp"></i>
            </a>
            <a href="https://twitter.com">
              <i class="icon ion-social-twitter"></i>
            </a>
            <a href="https://www.facebook.com">
              <i class="icon ion-social-facebook"></i>
            </a>
          </div>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="/">Home</a>
            </li>
            <li class="list-inline-item">
              <a href="/service">Services</a>
            </li>
            <li class="list-inline-item">
              <a href="/about">About</a>
            </li>
            <li class="list-inline-item">
              <a href="/contact">Terms</a>
            </li>
            <li class="list-inline-item">
              <a href="/contact">Privacy Policy</a>
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
