import styled from "styled-components";

export const SECTION_5 = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > :first-child {
    max-width: 450px;
    text-align: center;
  }
`;

export const FirstChild5 = styled.div``;

export const ClientContainer = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem 0;

  @media screen and (min-width: 481px) {
    grid-auto-flow: column;
    grid-template-rows: 1fr 1fr;
    justify-content: center;

    & > :last-child {
      grid-row: 2 / span 1;
      grid-column: 1 / span 2;
    }
  }

  @media screen and (min-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: none;

    & :last-child {
      grid-row: unset;
      grid-column: unset;
    }
  }
`;

export const ClientCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 5px;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.1);
  overflow: visible;
  padding: 1.5rem;
`;

export const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const ClientDetails = styled.div`
  text-align: center;
`;
