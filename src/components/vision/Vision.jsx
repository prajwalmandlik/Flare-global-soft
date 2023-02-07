import React from 'react'
import "./vision.css";
import VisionImg from "../../assest/vision.png";

const Vision = () => {
  return (
    <section className="vision container">
        <div className="vision-img">
            <img src={VisionImg} alt="" />
        </div>
        <div className="vision-content">
            <div className="vision-title">
                <h2>Make your business reach the highest level</h2>
            </div>

            <div className="vision-description">
                <p>We are dedicated to delivering cutting-edge solutions that help businesses achieve their goals and reach new heights.</p>
            </div>

            <div className="vision-subpoint">
                <div className="vision-icon"><i class='bx bx-run'></i></div>
                <div className="vision-subpoint-description">
                    <h3>Mission:</h3>
                    <p>Our mission is to empower businesses of all sizes with innovative technology solutions that drive growth, streamline processes, and enhance their competitive edge.</p>
                </div>
            </div>

            <div className="vision-subpoint">
            <div className="vision-icon"><i class='bx bx-bullseye'></i></div>
                <div className="vision-subpoint-description">
                    <h3>Vision:</h3>
                    <p>Our vision to deliver exceptional value to our clients through innovative products and services that help them achieve their goals and reach new heights.</p>
                </div>
            </div>

            <div className="vision-start-button">
                <button className="button">Get Started</button>
            </div>
        </div>
    </section>
  )
}

export default Vision
