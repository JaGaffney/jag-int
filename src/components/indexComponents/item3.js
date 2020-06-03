import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { TiTick } from "react-icons/ti"

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

  const TickIcon = () => {
    return (
      <div className="tick-icon-container">
        <TiTick className="tick-icon-element" />
      </div>
    )
  }

  return (
    <div className="item3__container" id="landing-services">
      <div className="item3__wrapper">
        <div className="item3__image">
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            className="item3__image-override"
            alt="person-cleaning-office"
          />
        </div>
        <div className="item3__text-title">
          <h1>Cleaning and washroom</h1>
        </div>
        <div className="item3__text">
          <ul>
            <li>
              <TickIcon /> Provision and management of cleaning services
            </li>
            <li>
              <TickIcon /> Supplying of consumable products
            </li>
            <li>
              <TickIcon /> Waste and loading dock management
            </li>
            <li>
              <TickIcon /> Periodical management and Carpark management
            </li>
            <li>
              <TickIcon /> Builders Clean
            </li>
            <li>
              <TickIcon /> 24/7 cleaning services
            </li>
          </ul>
        </div>
      </div>

      <div className="item3__wrapper">
        <div className="item3__image">
          <Img
            fluid={data.placeholderImage2.childImageSharp.fluid}
            className="item3__image-override"
            alt="security-camera"
          />
        </div>
        <div className="item3__text-title">
          <h1>Security personnel and systems</h1>
        </div>
        <div className="item3__text">
          <ul>
            <li>
              <TickIcon /> Patrolling, guarding and protection of property and
              personnel
            </li>
            <li>
              <TickIcon /> Crowd Control
            </li>
            <li>
              <TickIcon /> Control Room Operation
            </li>
            <li>
              <TickIcon /> Cash Handling
            </li>
            <li>
              <TickIcon />
              Issuing and control of keys, access control and security passes
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="item3__wrapper-button">
        <Link className="item__button" to="/services">
          <div className="svg-wrapper">
            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
              <rect className="shape" height="60" width="320" />
            </svg>
            <div className="text">Explore</div>
          </div>
        </Link>
      </div> */}
    </div>
  )
}

export default Item3
