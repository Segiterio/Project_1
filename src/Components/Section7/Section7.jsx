import React from "react";

import {
  SECTION_7,
  TeamContainer,
  DeveloperCard,
  SocialLinksContainer,
} from "./Section7-style";

import { BlueText, HeadingPosition2 } from "../Utils/Utils-style";

import Facebook from "../../Assets/Facebook.svg";
import Twitter from "../../Assets/Twitter.svg";
import LinkedIn from "../../Assets/LinkedIn.svg";

import Rectangle_20_1 from "../../Assets/Team/Rectangle_20_1.png";
import Rectangle_20_2 from "../../Assets/Team/Rectangle_20_2.png";
import Rectangle_20 from "../../Assets/Team/Rectangle_20.png";

const SECTION7 = () => {
  return (
    <SECTION_7 >
      <div>
        <BlueText >TEAM</BlueText>
        <HeadingPosition2 >
          Our certified experts
        </HeadingPosition2>
      </div>
      <TeamContainer >
        <DeveloperCard >
          <img src={Rectangle_20_1} alt="team" />
          <h4>SEBASTIAN DOE</h4>
          <p>Code Expert</p>
          <SocialLinksContainer >
            <img src={Facebook} alt="social_icon" />
            <img src={Twitter} alt="social_icon" />
            <img src={LinkedIn} alt="social_icon" />
          </SocialLinksContainer>
        </DeveloperCard>
        <DeveloperCard >
          <img src={Rectangle_20_2} alt="rect" />
          <h4>SEBASTIAN DOE</h4>
          <p>Design Expert</p>
          <SocialLinksContainer >
            <img src={Facebook} alt="social_icon" />
            <img src={Twitter} alt="social_icon" />
            <img src={LinkedIn} alt="social_icon" />
          </SocialLinksContainer>
        </DeveloperCard>
        <DeveloperCard >
          <img src={Rectangle_20} alt="rect" />
          <h4>SEBASTIAN DOE</h4>
          <p>Human Resources</p>
          <SocialLinksContainer >
            <img src={Facebook} alt="social_icon" />
            <img src={Twitter} alt="social_icon" />
            <img src={LinkedIn} alt="social_icon" />
          </SocialLinksContainer>
        </DeveloperCard>
      </TeamContainer>
    </SECTION_7>
  );
};

export default SECTION7;
