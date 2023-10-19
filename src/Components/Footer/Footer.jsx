import React from 'react'
import { FooterBottom,FooterTop,ContactInfo,ParentLinkContainer,LinksContainer,FooterContent,FooterContainer } from './Footer-style'

const Footer = () => {
  return (
    <FooterContainer>
    <FooterContent>
      <FooterTop>
        <ContactInfo>
          <p>
            Digital experience is always embedded in a physical
            experience.
          </p>
        </ContactInfo>
        <ParentLinkContainer className="parent_link_container">
          <h4>Services</h4>
          <LinksContainer className="links_container">
            <div>Web Hosting</div>
            <div>Domains</div>
            <div>Premium Hosting</div>
            <div>Private Server</div>
            <div>E-mail Hosting</div>
          </LinksContainer>
        </ParentLinkContainer>
        <ParentLinkContainer className="parent_link_container">
          <h4>Follow us</h4>
          <LinksContainer className="links_container">
            <div>Facebook</div>
            <div>Twitter</div>
            <div>Instagram</div>
            <div>Linkedin</div>
          </LinksContainer>
        </ParentLinkContainer>
        <ParentLinkContainer className="parent_link_container">
          <h4>Contact us</h4>
          <LinksContainer className="links_container">
            <a href="mailto:ak7859437@gmail.com">emailaddress@mail.com</a>
          </LinksContainer>
        </ParentLinkContainer>
      </FooterTop>
      <FooterBottom>
        <p>Design with love © Hardik Ramani 2023. All right reserved</p>
        <p>Claim Privacy Terms</p>
      </FooterBottom>
    </FooterContent>
  </FooterContainer>
  )
}

export default Footer