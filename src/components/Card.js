import React from "react";
import { CardStyled, CardBack, CardFront } from "./styles/Container.styled";
import cardBackImg from "../assets/cardback.jpg";

const Card = ({ image, cardClickHandler }) => {
  return (
    <CardStyled>
      <CardFront frontSideVisible={image.isFlipped}>
        <img src={image.imageSrc} alt="front card photo" />
      </CardFront>
      <CardBack
        frontSideVisible={image.isFlipped}
        onClick={() => cardClickHandler(image)}
      >
        <img src={cardBackImg} />
      </CardBack>
    </CardStyled>
  );
};

export default Card;
