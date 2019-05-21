import React, { Component } from "react";
import styled from "styled-components";

import heroData from "../cardData";
import HeroCard from "./HeroCard";

class Hero extends Component {
  state = {
    currentCard: 0,
    interval: null
  };

  componentDidMount() {
    if (this.state.interval === null)
      this.setState({ interval: setInterval(this.changeCard, 10000) });
  }

  isVisible = id => {
    return id === this.state.currentCard ? 1 : 0;
  };

  changeCard = _ => {
    this.setState(prevState => ({
      currentCard: (prevState.currentCard + 1) % Object.keys(heroData).length
    }));
  };
  render() {
    return (
      <HeroWrapper>
        <HeroContainer>
          {heroData &&
            heroData.map(card => (
              <HeroCard
                opacity={this.isVisible(card.id)}
                id={card.id}
                key={card.id}
                {...card}
              />
            ))}
        </HeroContainer>
      </HeroWrapper>
    );
  }
}

export default Hero;

const HeroContainer = styled.div`
  position: relative;
  align-self: center;
  min-width: 300px;
  width: 75%;
  padding-top: calc(75% / 2);
  border: 2px inset grey;
  margin: 0 auto;
`;

const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-contents: center;
  align-items: center;
  height: 100vh;
`;
