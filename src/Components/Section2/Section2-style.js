import styled from "styled-components";

export const SECTION_2 = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div:first-child {
    max-width: 450px;
    text-align: center;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  gap: 0.8rem;
  margin: 2rem 0;
  @media screen and (min-width: 481px) {
    grid-template: 1fr 1fr / 1fr 1fr;
  }
  @media screen and (min-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: none;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: flex-start;
  padding: 1.5rem;
  gap: 0.8rem;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.1);
  transition: background-color 150ms linear;
  justify-content: space-between;

  &:hover {
    background-color: #132577;
  }
`;

export const CardPara = styled.p`
  opacity: 0.6;
`;

export const CardHeading = styled.h2`
  color: #000; /* Default color */
  transition: color 150ms linear;
`;

export const LearnMore = styled.button`
  border: none;
  background-color: transparent;
  font-size: 0.875rem;
  text-decoration-line: underline;
  text-underline-offset: 0.2rem;
  color: #000; /* Default color */

  &.card:hover & {
    color: white;
  }
`;
