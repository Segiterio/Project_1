import React from 'react'
import { BlueText,HeadingPosition2 } from '../Utils/Utils-style'
import { SECTION_5,ClientCard,ClientContainer,ClientDetails,StarsContainer } from './Section5-style'
import FillStar from "../../Assets/FillStar.svg"
import EmptyStar from "../../Assets/EmptyStar.png"
import JuliaDoe2 from "../../Assets/JuliaDoe2.png"
import JuliaDoe from "../../Assets/JuliaDoe.png"
import RobertDoe from "../../Assets/RobertDoe.png"
import DoubleQuote from "../../Assets/DoubleQuote.svg"


const SECTION5 = () => {
  return (
    <SECTION_5 className="SECTION_5">
          <div>
            <BlueText className="blueText">TESTIMONIALS</BlueText>
            <HeadingPosition2 className="heading_position_2">Our successful clients</HeadingPosition2>
          </div>

          <ClientContainer className="client_container">
            <ClientCard className="client_card">
              <img src={DoubleQuote} alt="doubleQuote" />
              <p>
                Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas
                pretium aenean pharetra magna ac placerat vestibulum.
              </p>
              {/* <!-- starts / rating --> */}
              <StarsContainer className="starts_container">
                <img src={FillStar} alt="star" />
                <img src={FillStar} alt="star" />
                <img src={FillStar} alt="star" />
                <img src={FillStar} alt="star" />
                <img src={EmptyStar} alt="empty star" />
              </StarsContainer>
              <img src={JuliaDoe} alt="juilaDoe" />
              <ClientDetails className="client_details">
                <h4>Julia Doe</h4>
                <p>Businesswoman</p>
              </ClientDetails>
            </ClientCard>
            <ClientCard className="client_card">
              <img src={DoubleQuote} alt="doubleQuote" />
              <p>
                Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas
                pretium aenean pharetra magna ac placerat vestibulum.
              </p>
              {/* <!-- starts / rating --> */}
              <StarsContainer className="starts_container">
                <img src={FillStar} alt="star" />
                <img src={FillStar} alt="star" />
                <img src={FillStar} alt="star" />
                <img src={FillStar} alt="star" />
                <img src={EmptyStar} alt="star" />
              </StarsContainer>
              <img src={RobertDoe} alt="RobertDoe" />
              <ClientDetails className="client_details">
                <h4>ROBERT DOE</h4>
                <p>Businesswoman</p>
              </ClientDetails>
            </ClientCard>
            <ClientCard className="client_card">
              <img src={DoubleQuote} alt="double quote" />
              <p>
                Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas
                pretium aenean pharetra magna ac placerat vestibulum.
              </p>
              {/* <!-- starts / rating --> */}
              <StarsContainer className="starts_container">
                <img src={FillStar} alt="Star" />
                <img src={FillStar} alt="Star" />
                <img src={FillStar} alt="Star" />
                <img src={FillStar} alt="Star" />
                <img src={EmptyStar} alt="Star" />
              </StarsContainer>
              <img src={JuliaDoe2} alt="juliadoe2" />
              <ClientDetails className="client_details">
                <h4>Julia Doe</h4>
                <p>Businesswoman</p>
              </ClientDetails>
            </ClientCard>
          </ClientContainer>
        </SECTION_5>
  )
}

export default SECTION5