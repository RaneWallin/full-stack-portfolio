import React from "react";
import styled from "styled-components";

const HeroCard = props => {
  const { styles } = props;
  return (
    <Card {...styles} {...props}>
      <h2>{props.headline}</h2>
      <p>{props.content}</p>
      {props.icons && addIcons(props.icons)}
    </Card>
  );
};

export default HeroCard;

const addIcons = icons => {
  return icons.map(icon => (
    <Icon key={icon.src} src={icon.src} top={icon.top} left={icon.left} />
  ));
};

const Card = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 50%;
  opacity: ${props => props.opacity};
  ${styles => styles.background};
  h2 {
    ${styles => styles.headlineStyles};
    z-index: 2;
  }

  p {
    ${styles => styles.contentStyles};
    z-index: 3;
  }

  @media (max-width: 600px) {
    padding-top: 100%;
  }

  @media (max-width: 400px) {
    padding-top: 135%;
    height: 80vh;
  }
`;

const Icon = styled.img`
  position: absolute;
  //background-color: pink;
  width: 15%;
  opacity: 0.5;
  //border: 1px solid pink;
  top: ${props => props.top};
  left: ${props => props.left};
`;
