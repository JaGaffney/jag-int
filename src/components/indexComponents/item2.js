import React from "react"

import { Link } from "gatsby"
import SVG1 from "../../images/svg1"

const Item2 = () => {
  return (
    <div className="item2__container">
      <div className="item2__image">
        <div className="svg-container">
          <SVG1 />
        </div>
      </div>

      <div className="item2__text">
        <h1>Why Choose Us?</h1>
        <p>
          <span>JAG Integrated Services</span>, strives for ....
        </p>

        <Link className="item__button" to="/about">
          <div className="svg-wrapper">
            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
              <rect className="shape" height="60" width="320" />
            </svg>
            <div className="text">Explore</div>
          </div>
        </Link>
      </div>
    </div>
  )
}
export default Item2
