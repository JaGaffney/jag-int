import React from "react"

import { Link } from "gatsby"
import SVG1 from "../../images/svg1"

const Item2 = () => {
  return (
    <div className="item2__container" id="landing-about">
      <div className="item2__image">
        <div className="svg-container">
          <SVG1 />
        </div>
      </div>

      <div className="item2__text">
        <h1>Why Choose Us?</h1>
        <p>
          In most market sectors, businesses and organisations rely on us to
          provide the essential day to day property support services such as
          cleaning, security, waste disposal, hygiene services and grounds
          maintenance, leaving them free to concentrate on core activities. The
          provision of individual services only scratches the surface of what we
          do. Our management teams are experienced in working within your
          organisation to become a seamless extension of your business, working
          with you to provide a total integrated management service. We have the
          experience and capability to help you achieve excellence. We are an
          emerging company which is developing our focus in market sectors such
          as healthcare, education, local government, commercial, industrial and
          retail. We will continually adjust our practices to become part of the
          fabric of our clients’ organisations.
        </p>

        {/* <Link className="item__button" to="/about">
          <div className="svg-wrapper">
            <svg
              height="60"
              width="320"
              xmlns="http://www.w3.org/2000/svg"
              alt="business-meeting"
            >
              <rect className="shape" height="60" width="320" />
            </svg>
            <div className="text">Explore</div>
          </div>
        </Link> */}
      </div>
    </div>
  )
}
export default Item2
