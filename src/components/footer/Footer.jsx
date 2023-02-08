import React from "react";
import "./footer.css";
import Logo from "../../assest/footer-logo.png";

const Footer = () => {
  return (
    <section className="container section bg-color">
      <div className="contact-us">
        <div className="contact-us-title">
          Get in Touch with us Today to discover How we can help your Business
          reach new Heights.
        </div>
        <div className="contact-us-button">
          <button className="button">Contact Us</button>
        </div>
      </div>
      <div className="footer">
        <div className="footer-info">
          <div className="footer-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="footer-description">
            We are dedicated to delivering cutting-edge solutions that help
            businesses achieve their goals and reach new heights.
          </div>
          <div className="footer-social-links">
            <ui className="footer-social-link">
              <li>
                <a href="#!">
                  <i class="bx bxl-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i class="bx bxl-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i class="bx bxl-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i class="bx bxl-linkedin"></i>
                </a>
              </li>
            </ui>
          </div>
        </div>

        <div className="footer-quick-link">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#!" className="quick-link">
                <i class="bx bx-chevron-right bx-flip-vertical"></i>About us
              </a>
            </li>
            <li>
              <a href="#!" className="quick-link">
                <i class="bx bx-chevron-right bx-flip-vertical"></i>Services
              </a>
            </li>
            <li>
              <a href="#!" className="quick-link">
                <i class="bx bx-chevron-right bx-flip-vertical"></i>Portfolio
              </a>
            </li>
            <li>
              <a href="#!" className="quick-link">
                <i class="bx bx-chevron-right bx-flip-vertical"></i>Our team
              </a>
            </li>
            <li>
              <a href="#!" className="quick-link">
                <i class="bx bx-chevron-right bx-flip-vertical"></i>Contact us
              </a>
            </li>
            <li>
              <a href="#!" className="quick-link">
                <i class="bx bx-chevron-right bx-flip-vertical"></i>Terms and
                Condition
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <ul>
            <li>
              <a href="#!">
                <i class="bx bxs-map bx-flip-horizontal"></i>Nashik, Maharashtra
              </a>
            </li>
            <li>
              <a href="#!">
                <i class="bx bxs-phone-call"></i>(+91) 9209237239
              </a>
            </li>
            <li>
              <a href="#!">
                <i class="bx bxs-envelope"></i>flareglobalsoft@gmail.com
              </a>
            </li>
            <li>
              <a href="#!">
                <i class="bx bx-globe"></i>www.flareglobalsoft.tech
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyrigth">
        <p>©Copyright Flare Global Soft 2023 All Rights Reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
