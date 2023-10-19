import React from "react";
import { RectImages, SECTION_6 } from "./Section6-style";
import { BlueButton } from "../Section4/Section4-style";
import { BlueText, HeadingPosition2 } from "../Utils/Utils-style";
import Rectangle_15 from "../../Assets/Rectangle_15.png"
import Rectangle_16 from "../../Assets/Rectangle_16.png"
import Rectangle_17 from "../../Assets/Rectangle_17.png"
import Rectangle_18 from "../../Assets/Rectangle_18.png"

const SECTION6 = () => {
  return (
    <SECTION_6>
      <div>
        <div>
          <RectImages src={Rectangle_15} alt="rectangle" />
        </div>
        <div>
          <RectImages src={Rectangle_16} alt="rectangle" />
        </div>
        <div>
          <RectImages src={Rectangle_17} alt="rectangle" />
        </div>
        <div>
          <RectImages src={Rectangle_18} alt="rectangle" />
        </div>
      </div>
      <div>
        <BlueText>PROJECTS</BlueText>
        <HeadingPosition2>
          Our amazing project that has been completed
        </HeadingPosition2>
        <p>
          Turpis cursus in hac habitasse platea dictumst quisque sagittis purus.
          Ligula ullamcorper malesuada proin libero nunc consequat.
          <br />
          Dignissim sodales ut eu sem integer vitae justo. Tincidunt tortor
          aliquam nulla facilisi cras.
        </p>
        <BlueButton>Recent Projects</BlueButton>
      </div>
    </SECTION_6>
  );
};

export default SECTION6;
