import styled from "styled-components";

export const SECTION_4 = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  & > :first-child {
    max-width: 450px;
    text-align: center;
  }

  & > :last-child {
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    gap: 0.5rem;
  }

  @media screen and (min-width: 1025px) {
    & > :last-child {
      grid-template-columns: auto 1fr auto auto;
      gap: 1.5rem;
    }
  }
`;

export const ActiveVertical = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > img {
     max-width: 200px;
  }

  @media screen and (min-width: 1025px) {
    flex-direction: row;
    & > img {
        max-width: 300px;
        object-fit: cover;
    }
  }

`;

export const ActiveVerticalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  p {
    font-size: 12px;
    max-width: 600px;
  }

  h4 {
    font-size: 0.875rem;
  }

  @media screen and (min-width: 1025px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    gap: 0.5rem;

    p {
      font-size: 1rem;
    }

    h4 {
      font-size: 1.125rem;
    }
  }
`;

export const BlueButton = styled.button`
  font-size: 12px;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  background: #132577;
  color: white;
`;

export const VerticalText = styled.div`
  white-space: nowrap;
  writing-mode: vertical-lr;
  text-align: center;
  padding: 0 0.5rem;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.1);
  font-size: 0.875rem;
  border:${({$active}) => $active ? " 2px solid #132577" : "none"} ;
`;
