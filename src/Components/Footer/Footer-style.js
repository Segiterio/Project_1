import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #132577;
`;

export const FooterContent = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
`;

export const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;

  @media screen and (min-width: 1025px){
    justify-content: space-between;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  color: white;
  font-size: 0.825rem;

  a {
    text-decoration: none;
    color: white;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  color: #92989f;
  font-size: 0.625rem;
`;

export const ParentLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h4 {
    color: #92989f;
    font-weight: 600;
    font-size: 1.125rem;
  }

  @media screen and (min-width: 481px) {
    h4 {
      color: #92989f;
      font-weight: 600;
      font-size: 1.125rem;
    }
  }
`;

export const ContactInfo = styled.div`
  color: white;
  max-width: 400px;
  align-self: center;
  font-size: 0.825rem;


`;
