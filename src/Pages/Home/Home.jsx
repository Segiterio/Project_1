import React from "react";
import { Container, Main } from "./Home-style";
import Section1 from "../../Components/Section1/Section1";
import Section2 from "../../Components/Section2/Section2";
import Section3 from "../../Components/Section3/Section3";
import Section4 from "../../Components/Section4/Section4";
import Section5 from "../../Components/Section5/Section5";
import Section6 from "../../Components/Section6/Section6";
import Section7 from "../../Components/Section7/Section7";
import Header from "../../Components/Header/Header";

import Footer from "../../Components/Footer/Footer"

const Home = () => {
  return (
    <>
      <Container>
        <Main>
          <Header />
          <Section1 />
        </Main>
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
