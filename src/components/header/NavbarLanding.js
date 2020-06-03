import React, { useEffect, useRef, useState } from "react"
import { BsPersonLinesFill } from "react-icons/bs"
import { FaMailBulk } from "react-icons/fa"
import { MdBusiness } from "react-icons/md"
import { CSSTransition } from "react-transition-group"

function NavItem(props) {
  return (
    <li className="nav-item">
      <button
        className="nav-icon-button header-icon header-icon-landing "
        onClick={() => props.onOpenHandler()}
        id="hamburgerElement"
      >
        <div
          className={`hamburger-container ${props.open && "hamburger-change"}`}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </button>
      {props.open && props.children}
    </li>
  )
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main")
  const [menuHeight, setMenuHeight] = useState(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight + 50)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight
    setMenuHeight(height + 50)
  }

  function DropdownItem(props) {
    return props.type === "internal" ? (
      <a
        href={`/#landing-${props.link}`}
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
        aria-label={`Go to ${props.children} page`}
      >
        <span className="icon-button">{props.leftIcon}</span>
        <span>{props.children}</span>
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    ) : (
      <a
        href={props.link ? props.link : "#"}
        className="menu-item"
        onClick={() => {
          props.goToMenu && setActiveMenu(props.goToMenu)
          document.getElementById("hamburgerElement").focus()
        }}
        style={props.firstElement ? { marginBottom: props.firstElement } : {}}
        aria-label={`Vist my ${props.children} page`}
      >
        <span className="icon-button">{props.leftIcon}</span>
        <span>{props.children}</span>
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    )
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<BsPersonLinesFill />}
            link="about"
            type="internal"
          >
            About us
          </DropdownItem>
          <DropdownItem
            leftIcon={<MdBusiness />}
            link="services"
            type="internal"
          >
            Services
          </DropdownItem>
          <DropdownItem
            leftIcon={<FaMailBulk />}
            link="contact"
            type="internal"
          >
            Contact
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  )
}

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()

  useEffect(() => {
    document.addEventListener("mousedown", handleClick)
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return
    }
    setOpen(false)
  }

  const onOpenHandler = () => {
    setOpen(!open)
  }

  return (
    <div ref={node} className="nav-bar-icon">
      <NavItem onOpenHandler={onOpenHandler} open={open}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </div>
  )
}

export default Navbar
