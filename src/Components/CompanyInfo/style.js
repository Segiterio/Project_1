import styled from "styled-components";

export const CompanyInfo = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  width: 95%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid;

    @media screen and (min-width: 1025px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: none;
      gap: 1rem;
    }
  }
`;

export const Value = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ValueTitle = styled.p`
  font-size: 0.875rem;
`;
