import React from "react"

import { Link } from "gatsby"
import SVG2 from "../../images/svg2"

const Item1 = () => {
  return (
    <div className="item1__container">
      <div className="item1__text">
        <h1>Tag line of whats special</h1>
        <p>
          When you engage <span>JAG Integrated Services</span>, you benefit from
          our industry experience, operational efficiency and commitment to
          exceptional site presentation standards.{" "}
        </p>
        <p>
          If you want to know how we can faciliate your needs, please feel free
          to contact us.{" "}
        </p>

        <Link className="item__button" to="/contact">
          <div className="svg-wrapper">
            <svg
              height="60"
              width="320"
              xmlns="http://www.w3.org/2000/svg"
              alt="australia-map"
            >
              <rect className="shape shape-light" height="60" width="320" />
            </svg>
            <div className="text text-light">Get in Touch</div>
          </div>
        </Link>
      </div>

      <div className="item1__image">
        <div className="svg-container">
          <SVG2 />
        </div>
      </div>
    </div>
  )
}

export default Item1
