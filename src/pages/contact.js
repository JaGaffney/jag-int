import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  const urlParams = new URLSearchParams(
    typeof window !== "undefined" && window.location.search
  )
  const emailParamDefault = urlParams.get("email")

  let emailDefault = emailParamDefault
  if (emailParamDefault === null) {
    emailDefault = ""
  }

  const [contactEmail, setContactEmail] = useState(emailDefault)

  // need data validation
  return (
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

            <div className="contact-form__information">
              <label htmlFor="lname">Name or company name *</label>
              <input id="lname" type="text" name="name" required />

              <div className="contact-form__information-inner">
                <div>
                  <label htmlFor="lemail">Email *</label>
                  <input
                    id="lemail"
                    type="email"
                    name="email"
                    required
                    onChange={e => setContactEmail(e.target.value)}
                    value={contactEmail}
                  />
                </div>

                <div>
                  <label htmlFor="lnumber">Contact number *</label>
                  <input id="lphone" type="text" name="phone" required />
                </div>
              </div>
            </div>

            <hr className="contact-form__seperator" />

            <div className="contact-form__message">
              <label htmlFor="lsubject">Subject *</label>
              <input id="lsubject" type="text" name="subject" required />

              <label htmlFor="lmessage">Message *</label>
              <textarea
                id="lmessage"
                name="message"
                placeholder="Please enter your enquiry and we will get in touch."
                rows="6"
                cols="50"
              ></textarea>
            </div>

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
}

export default ContactPage
