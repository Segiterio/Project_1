import React from 'react'
import { BlueText,HeadingPosition2 } from '../Utils/Utils-style'
import { VerticalText,SECTION_4,ActiveVertical,ActiveVerticalContent } from './Section4-style'
import { BlueButton } from './Section4-style'
import Image_1 from "../../Assets/Image1.png"


const SECTION4 = () => {
  return (
    <SECTION_4 className="SECTION_4">
    <div>
      <BlueText className="blueText">WE LOVE OUR WORK</BlueText>
      <HeadingPosition2 className="heading_position_2">FIND OUT MORE</HeadingPosition2>
    </div>

    <div>
      <VerticalText $active={true} className="vertical_text border_Active">Our Mission</VerticalText>
      <ActiveVertical className="active_vertical">
        <img src={Image_1} alt="person1" />
        <ActiveVerticalContent>
          <h4>Our Mission</h4>
          <p>
            Integer non velit nec nunc pulvinar porttitor. Vivamus
            euismod, mauris ac pellentesque commodo, est nunc dapibus
            metus, vel dapibus felis lacus sit amet urna. Curabitur
            feugiat bibendum ex, id mollis enim sollicitudin dictum.
            Aenean ullamcorper volutpat lacus.
          </p>
          <BlueButton className="blue_btn">Learn more</BlueButton>
        </ActiveVerticalContent>
      </ActiveVertical>
      <VerticalText className="vertical_text">Our Company</VerticalText>
      <VerticalText className="vertical_text">Our Customer</VerticalText>
    </div>
  </SECTION_4>
  )
}

export default SECTION4