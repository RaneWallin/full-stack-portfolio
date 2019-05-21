import React from "react";
import styled from "styled-components";

import { HeadingWrapper } from "./styled";
import Hero from "./Hero";

const Home = () => {
  return (
    <HomeWrapper>
      <Hero />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
  width: 100%;
  //border: 4px solid green;
  max-width: 1366px;
  margin: 7vh auto;
  padding-top: 15px;
  background-color: #1e1e1e;
  height: 93vh;
`;
