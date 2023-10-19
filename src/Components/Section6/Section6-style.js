import styled from "styled-components";

export const SECTION_6 = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > :first-child {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }

  & > :last-child {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }

  @media screen and (min-width: 1025px) {
    flex-direction: row;
     
    & > div {
        width: 50%;
    }

    & > div:last-of-type {
        justify-content: space-between;
    }
  }
`;

export const SECTION6First = styled.div``;

export const RectImages = styled.img`
  width: 100%;
`;

export const SECTION6Last = styled.div``;
