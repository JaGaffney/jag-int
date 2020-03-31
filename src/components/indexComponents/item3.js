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
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            className="item3__image-override"
          />
        </div>
        <div className="item3__text-title">
          <h1>Cleaning and Washroom</h1>
        </div>
        <div className="item3__text">
          <ul>
            <li>Provision and management of cleaning</li>
            <li>Provision of consumable products</li>
            <li>Waste and loading dock management</li>
            <li>Periodical management and Carpark management</li>
            <li>Builders Clean</li>
            <li>24/7 cleaning services</li>
          </ul>
        </div>
      </div>

      <div className="item3__wrapper">
        <div className="item3__image">
          <Img
            fluid={data.placeholderImage2.childImageSharp.fluid}
            className="item3__image-override"
          />
        </div>
        <div className="item3__text-title">
          <h1>Security Personnel and Systems</h1>
        </div>
        <div className="item3__text">
          <ul>
            <li>Patrolling, guarding and protecting property and personnel</li>
            <li>Crowd Control</li>
            <li>Control Room Operation</li>
            <li>Cash Handling</li>
            <li>
              Issuing and control of keys, access control and security passes
            </li>
            <li style={{ listStyle: "none", color: "var(--background-main)" }}>
              .
            </li>
          </ul>
        </div>
      </div>
      <div className="item3__wrapper-button">
        <Link className="item__button" to="/services">
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

export default Item3
