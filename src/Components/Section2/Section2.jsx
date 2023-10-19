import React from "react";
import {
  Card,
  CardHeading,
  CardPara,
  SECTION_2,
  CardContainer,
  LearnMore,
} from "./Section2-style";

import { BlueText,HeadingPosition2 } from "../Utils/Utils-style";

const SECTION2 = () => {
  return (
    <SECTION_2>
      <div>
        <BlueText>Services</BlueText>
        <HeadingPosition2>
          We provide All-in-one Solution for every IT job
        </HeadingPosition2>
      </div>

      <CardContainer>
        <Card>
          <CardHeading>Software Development</CardHeading>
          <CardPara>
            Posuere morbi leo urna molestie at elementum eu egestas.
          </CardPara>
          <LearnMore>Learn more</LearnMore>
        </Card>
        <Card>
          <CardHeading>AI Programmer & Technical</CardHeading>
          <CardPara>
            Posuere morbi leo urna molestie at elementum eu egestas.
          </CardPara>
          <LearnMore>Learn more</LearnMore>
        </Card>
        <Card>
          <CardHeading>System Application Development</CardHeading>
          <CardPara>
            Posuere morbi leo urna molestie at elementum eu egestas.
          </CardPara>
          <LearnMore>Learn more</LearnMore>
        </Card>
        <Card>
          <CardHeading>Server and Network Solutions</CardHeading>
          <CardPara>
            Posuere morbi leo urna molestie at elementum eu egestas.
          </CardPara>
          <LearnMore>Learn more</LearnMore>
        </Card>
      </CardContainer>
    </SECTION_2>
  );
};

export default SECTION2;
