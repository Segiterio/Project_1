import styled from "styled-components";

export const SECTION_7 = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > :first-child {
    max-width: 450px;
    text-align: center;
    align-self: center;
  }
`;

export const SECTION7First = styled.div``;

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media screen and (min-width: 481px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }

  @media screen and (min-width: 1025px){
    flex-wrap: nowrap;
  }
`;

export const DeveloperCard = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.1);
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
