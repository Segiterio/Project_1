import styled from 'styled-components';

export const SECTION_1 = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  & > :first-child {
    color: white;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
  }

  @media screen and (min-width:1025px){
    flex-direction: row;
    & > div {
      width: 50%;
    }
  }
`;

export const ExploreButton = styled.button`
  background-color: #fff;
  color: black;
  border: 1px solid;
  width: fit-content;
  padding: 0.5rem 1rem;
  border-radius: 5px;
`;

export const ServiceImageContainer = styled.div`
  img {
    width: 100%;
  }
`;