import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import HeroSection from "../heroForOthersection/HeroSection";

const Intership = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    //   emailjs.sendForm('service_0zbwjhy', 'template_1i4pf5w', form.current, 'vG8UL_ZLcqLx4SONE')
    emailjs
      .sendForm(
        "service_n1fv6ef",
        "template_1az9wjy",
        form.current,
        "tsu26D7OjQBrjfvw1"
      )
      .then(
        (result) => {
          //   console.log(result.text);
          toast.success("Message send");
        },
        (error) => {
          //   console.log(error.text);
          toast.error("error");
        }
      );
  };

  return (
    <>
      <HeroSection name={"Internship"} />
      <section className="section cantainer contact-form">
        <div className="section contact-form">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="contact-form-cantainer"
            >

            <div className="form-fild-title">Personal Details</div>

            <div className="form-fild">
              <label htmlFor="name">
                Name <sup>*</sup>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name here"
                required
              />
            </div>

            <div className="form-fild">
              <label htmlFor="email">
                Email <sup>*</sup>
              </label>
              <input
                type="email"
                name="eamil"
                id="email"
                placeholder="Your email here"
                required
              />
            </div>

            <div className="form-fild">
              <label htmlFor="mobile-no">
                Mobile No <sup>*</sup>
              </label>
              <input
                type="tel"
                name="mobile-no"
                id="mobile-no"
                placeholder="Your mobile number here"
                required
              />
            </div>

            <div className="form-fild">
              <label htmlFor="linkdin">
                Linkdin Profile 
              </label>
              <input
                type="url"
                name="linkdin"
                id="linkdin"
                placeholder="paste your linkdin profile link"
              />
            </div>

            <div className="form-fild-title">Skills</div>

            <div className="form-fild">
              <label htmlFor="filed">
                Intersted Filed <sup>*</sup>
              </label>
              <select name="filed" id="filed">
              <option value="none" disabled selected  className="option fild">Select any one</option>
              <option value="web Development">Web Development</option>
              <option value="App Development">App Development</option>
              <option value="Python Development">Python Development</option>
              <option value="Graphics Desing">Graphics Desing</option>
              </select>
            </div>

            <div className="form-fild">
              <label htmlFor="skills">
                Add your skills 
              </label>
              <input
                type="text"
                name="skills"
                id="skills"
                placeholder="add multiple skills by comma"
                multiple
              />
            </div>

            <div className="form-fild">
              <label htmlFor="project">
                Project  
              </label>
              <input
                type="url"
                name="project"
                id="project"
                placeholder="paste project github link"
                multiple
              />
            </div>

            <div className="form-fild">
              <label htmlFor="certificate">
              Certificate
              </label>
              <input
                type="url"
                name="certificate"
                id="certificate"
                placeholder="paste certificate link"
                multiple
              />
            </div>

            <div className="form-fild-title">Collage Details</div>

            <div className="form-fild collage-name">
              <label htmlFor="collage">
              Collage Name
              </label>
              <input
                type="text"
                name="collage"
                id="collage"
                placeholder="enter collage name"
              />
            </div>

            <div className="form-fild">
              <label htmlFor="branch">
              Branch
              </label>
              <input
                type="text"
                name="collage"
                id="collage"
                placeholder="enter collage name"
              />
            </div>


            <div className="form-fild">
              <label htmlFor="year-of-study">
              Year of Study
              </label>
              <input
                type="text"
                name="collage"
                id="collage"
                placeholder="enter collage name"
              />
            </div>

            <div className="form-fild form-textarea">
              <label htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="4"
                required
                placeholder="Tell us about your self"
              ></textarea>
            </div>

              <div className="form-fild">
                <button type="submit" className="button">
                    send your application
                </button>
              </div>
            </form>

            <Toaster position="top-center" reverseOrder={false} />
          </div>
      </section>
    </>
  );
};

export default Intership;
