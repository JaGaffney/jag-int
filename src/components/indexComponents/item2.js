import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Item2 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "office-clean.jpg" }) {
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
      <div className="item2__image">
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>

      <div className="item1__text">
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
