import React from "react";
import {
  SECTION_3,
  Points,
  Image1,
  Image2,
  SECTION_3_IMAGE_CONTAINER,
} from "./Section3-style";

import Image_1 from "../../Assets/Image1.png"
import Image_2 from "../../Assets/Image2.png"

import { BlueText, HeadingPosition2 } from "../Utils/Utils-style";

const SECTION3 = () => {
  return (
    <SECTION_3 >
      <div>
        <BlueText >FEW WORDS ABOUT US</BlueText>
        <HeadingPosition2 >
          We Are Leaders in It Solutions
        </HeadingPosition2>
        <p>
          Aliquam a diam gravida, pretium justo non, facilisis eros. Integer
          posuere semper condimentum. Praesent tortor dui, auctor a condimentum
          vitae, aliquam at quam. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse consequat lacus a sapien pretium, sit
          amet finibus ex.
        </p>
        <Points >
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </Points>
      </div>
      <SECTION_3_IMAGE_CONTAINER>
        <Image1 src={Image_1} alt="" />
        <Image2 src={Image_2} alt="" />
      </SECTION_3_IMAGE_CONTAINER>
    </SECTION_3>
  );
};

export default SECTION3;
