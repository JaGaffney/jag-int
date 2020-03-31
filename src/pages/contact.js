import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  // need data validation

  <Layout>
    <SEO title="Contact" />
    <div className="generic-container">
      <div className="contact-form__container">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/contact/thank-you"
          className="contact-form"
        >
          <input type="hidden" name="form-name" value="contact" />

          <input type="text" name="name" placeholder="Name*" required />

          <input type="email" name="email" placeholder="Email*" required />

          <input
            type="text"
            name="phone"
            placeholder="Contact number*"
            required
          />

          <input type="text" name="subject" placeholder="Subject*" required />

          <textarea
            name="message"
            placeholder="Enquiry"
            rows="10"
            cols="50"
          ></textarea>

          <p style={{ display: "flex" }}>
            <button className="svg-wrapper form-submit" type="submit">
              <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                <rect className="shape" height="60" width="320" />
              </svg>
              <div className="text">Send</div>
            </button>
          </p>
        </form>
      </div>
    </div>
  </Layout>
)

export default ContactPage
