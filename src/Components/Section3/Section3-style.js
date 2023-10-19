import styled from "styled-components";

export const SECTION_3 = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  width: 95%;
  display: grid;
  row-gap: 4rem;
  grid-template-rows: auto auto;
  align-items: center;

  & div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;

    & p:last-of-type {
      opacity: 0.6;
    }
  }

  @media screen and (min-width: 1025px) {
    display: grid;
    column-gap: 1.5rem;
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

export const SECTION_3_IMAGE_CONTAINER = styled.div`
  position: relative;
  width: 100%;
`;

export const Image1 = styled.img`
  position: relative;
  width: 80%;
  bottom: -2rem;
  left: 0;
  z-index: 10;
`;

export const Image2 = styled.img`
  position: absolute;
  width: 80%;
  top: -2rem;
  right: 0;
  z-index: 2;
`;

export const Points = styled.ul`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
