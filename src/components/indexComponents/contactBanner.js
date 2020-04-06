import React, { useState } from "react"

const ContactBanner = () => {
  const [contactEmail, setContactEmail] = useState("")

  return (
    <div className="contact-banner-container">
      <span>If your in need of our services</span>
      <form action={`/contact?email=${contactEmail}`} method="POST">
        <input
          placeholder="john-smith@email.com.au"
          onChange={e => setContactEmail(e.target.value)}
          value={contactEmail}
        ></input>
        <button>Get in touch</button>
      </form>
    </div>
  )
}

export default ContactBanner
