import React from 'react'
import { HeaderContainer } from './Header-style'

// Data
const nav1 = ["Home", "About Us", "Portofolio"];
const nav2 = ["Expertise", "Clients", "Services", "Contact Us"];
 const Header = () => {
  return (
    <HeaderContainer>
    <div>
      {nav1.map((val) => (
        <div>{val}</div>
      ))}
    </div>
    <div>
      {nav2.map((val) => (
        <div className="nav">{val}</div>
      ))}
    </div>
    <i
      className="fa-solid fa-bars"
      id="hamMenu"
      style={{ color: "white" }}
    ></i>
  </HeaderContainer>
  )
}

export default Header
