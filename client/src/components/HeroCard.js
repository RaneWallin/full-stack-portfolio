import React from "react";
import styled from "styled-components";

const HeroCard = props => {
  const { styles } = props;
  return (
    <Card {...styles} {...props}>
      <h2>{props.headline}</h2>
      <p>{props.content}</p>
    </Card>
  );
};

export default HeroCard;

const Card = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 50%;
  opacity: ${props => props.opacity};
  ${styles => styles.background};
  h2 {
    ${styles => styles.headlineStyles}
  }

  p {
    ${styles => styles.contentStyles}
  }
`;
