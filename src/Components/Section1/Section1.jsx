import React from 'react'
import { SECTION_1,ExploreButton,ServiceImageContainer } from './Section1-style'
import ServicesImages from "../../Assets/ServiceIcons.png"

const SECTION1 = () => {
  return (
    <SECTION_1>
    <div>
      <h1>
        Software solution providers that help brands thrive and stand
        out
      </h1>
      <p>
        Since 2014, we have been exploring the world of design and
        development offering our expertise in web and mobile. It is
        perfect fusion of innovation, development and execution at one
        place.
      </p>
      <ExploreButton >EXPLORE MORE</ExploreButton>
    </div>
    <ServiceImageContainer>
      <img src={ServicesImages} alt="servicesIcons" />
    </ServiceImageContainer>
  </SECTION_1>
  )
}

export default SECTION1