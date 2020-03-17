import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Item1 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "office.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

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
            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
              <rect className="shape" height="60" width="320" />
            </svg>
            <div className="text">Get in Touch</div>
          </div>
        </Link>
      </div>

      <div className="item1__image">
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
    </div>
  )
}

export default Item1
