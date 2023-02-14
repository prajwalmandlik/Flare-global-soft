import React from 'react'

const ContactForm = () => {
  return (
    <section className="section cantainer contact-form">
        <div className="section contact-form">
        <div className="section-text">
          <h2 className="section_title">Get In Toch</h2>
          <span className="section_subtitle ">
            We are available 24/7 by e-mail and phone. You can also ask a
            question about our services through our contact form.
          </span>
        </div>

        <div>
          <form className="contact-form-cantainer">
            <div className="form-fild">
              <label htmlFor="name">
                Your Name <sup>*</sup>
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
                Your Email <sup>*</sup>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email here"
                required
              />
            </div>
            <div className="form-fild">
              <label htmlFor="subject">
                Your Subject <sup>*</sup>
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Your subject here"
                required
              />
            </div>
            <div className="form-fild">
              <label htmlFor="mobile">
                Contact Number <sup>*</sup>
              </label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                placeholder="Your phone number"
                required
              />
            </div>
            <div className="form-fild form-textarea">
              <label htmlFor="message">
                Message <sup>*</sup>
              </label>
              <textarea
                name=""
                id="message"
                cols="30"
                rows="4"
                required
                placeholder="Tell us few word"
              ></textarea>
            </div>

            <div className="form-fild">
              <button type="submit" className="button">
                Send Message
              </button> 
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm