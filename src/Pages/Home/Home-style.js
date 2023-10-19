import styled from 'styled-components';
import BackgroundImage from "../../Assets/bannerBackground.svg"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  font-family: "Poppins", "sans-serif";
`;

export const Main = styled.main`
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 3rem 0;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`