import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Item3 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "cleaning.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      placeholderImage2: file(relativePath: { eq: "sec.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="item3__container">
      <div className="item3__wrapper">
        <div className="item3__image">
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </div>

        <div className="item3__text">
          <h1>Cleaning and Washroom</h1>
          <p>
            When you engage <span>JAG Integrated Services</span>, you benefit
            from our industry experience, operational efficiency and commitment
            to exceptional site presentation standards.
          </p>

          <Link className="item__button" to="/services/cleaning">
            <div className="svg-wrapper">
              <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                <rect className="shape" height="60" width="320" />
              </svg>
              <div className="text">Explore</div>
            </div>
          </Link>
        </div>
      </div>

      <div className="item3__wrapper">
        <div className="item3__image">
          <Img fluid={data.placeholderImage2.childImageSharp.fluid} />
        </div>

        <div className="item3__text">
          <h1>Security Personnel and Systems</h1>
          <p>
            When you engage <span>JAG Integrated Services</span>, you benefit
            from our industry experience, operational efficiency and commitment
            to exceptional site presentation standards.
          </p>

          <Link className="item__button" to="service/secuirty">
            <div className="svg-wrapper">
              <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                <rect className="shape" height="60" width="320" />
              </svg>
              <div className="text">Explore</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Item3
