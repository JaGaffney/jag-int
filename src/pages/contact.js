import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />

    <div className="contact-form__container">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/"
        className="contact-form"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <input type="text" name="name" placeholder="Name*" required />
        </p>
        <p>
          <input type="email" name="email" placeholder="Email*" required />
        </p>
        <p>
          <input
            type="text"
            name="phone"
            placeholder="Contact number*"
            required
          />
        </p>
        <p>
          <input type="text" name="subject" placeholder="Subject*" required />
        </p>
        <p>
          <textarea
            name="message"
            placeholder="Enquiry"
            rows="10"
            cols="50"
          ></textarea>
        </p>

        <button className="svg-wrapper form-submit" type="submit">
          <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect className="shape" height="60" width="320" />
          </svg>
          <div className="text">Send</div>
        </button>
      </form>
    </div>
  </Layout>
)

export default ContactPage
