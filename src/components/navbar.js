import React, { useState } from 'react'
import { Navbar, NavbarContainer, Logo, NavbarMenu, DropdownBars, MobileNavbar, PhoneLink, EmailLink } from '../CSS/navbarStyles'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import '../CSS/navbar.css'
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar>
      <NavbarContainer>
        <Link to="home" className="logo">
          <Logo />
        </Link>
        <NavbarMenu>
          {/* <Link to="services" className="menuLink">
              Services
          </Link> */}
          <Link to="location" className="menuLink">
              Location
          </Link>
          <Link to="photo" className="menuLink">
              Photo Gallery
          </Link>
          <Link to="location" className="contactButton">
            Contact Us
          </Link>
        </NavbarMenu>
        <DropdownBars onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </DropdownBars>
      </NavbarContainer>
      <MobileNavbar  isOpen={isOpen}>
        {/* <Link to="services" className="mobileNavbar">
            Services
        </Link> */}
        <Link to="location" className="mobileNavbar">
            Location
        </Link>
        <Link to="photo" className="mobileNavbar">
            Photo Gallery
        </Link>
        <PhoneLink href="tel:1-772-486-4042" className="mobileNavbar">
          Call Us
        </PhoneLink>
        <EmailLink href="mailto:AbleClosets@gmail.com" className="mobileNavbar">
          Email Us
        </EmailLink>
      </MobileNavbar>
    </Navbar>
  )
}

export default NavBar