import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 1240px;
  width: 95%;
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 1rem;
  justify-content: flex-end;

  & > div:first-of-type {
    color: white;
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  & > div:last-of-type {
    color: white;
    display: none;
  }

  @media screen and (min-width: 900px) {
    & > #hamMenu {
      display: none;
    }

    & > div:last-of-type {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
`;
