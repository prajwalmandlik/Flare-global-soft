import React from "react";
import "./footer.css";
import Logo from "../../assest/footer-logo.png";
import { HashLink } from "react-router-hash-link";


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
          <h3 className="footer-title" >Quick Links</h3>
          <ul>
            <li>
              <HashLink to={"/About#about"} className="quick-link">
                <i class="bx bx-chevron-right bx-flip-vertical"></i>About us
              </HashLink>
            </li>
            <li>
              <HashLink to={"/Services#services"} className="quick-link">
                <i class="bx bx-chevron-right bx-flip-vertical"></i>Services
              </HashLink>
            </li>
            <li>
              <HashLink to={"/Services#portfolio"} className="quick-link">
                <i class="bx bx-chevron-right bx-flip-vertical"></i>Portfolio
              </HashLink>
            </li>
            <li>
              <HashLink to={"/About#team"} className="quick-link">
                <i class="bx bx-chevron-right bx-flip-vertical"></i>Our team
              </HashLink>
            </li>
            <li>
              <HashLink to={"/Contact#contact"} className="quick-link">
                <i class="bx bx-chevron-right bx-flip-vertical"></i>Contact us
              </HashLink>
            </li>
            <li>
              <HashLink to={"/About#about"} className="quick-link">
                <i class="bx bx-chevron-right bx-flip-vertical"></i>Terms and
                Condition
              </HashLink>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3 className="footer-title">Get in Touch</h3>
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
