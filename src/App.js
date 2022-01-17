import React, { useState } from "react";
import images from "./images";
import { GlobalStyle } from "./components/styles/Global";
import { v4 as uid } from "uuid";
import Card from "./components/Card";
import {
  Container,
  Board,
  NewGameBtn
} from "./components/styles/Container.styled";


const imagesArray = [...images, ...images]
    .map( image => ({ ...image, id: uid() }) );

const shuffleArray = (array) => {
    return array.sort( () => Math.random() - 0.5 )
}

const App = () => {

  const [images, setImages] = useState(shuffleArray([...imagesArray]));
  const [firstChoice, setFirstChoice] = useState(null);

  const cardClickHandler = (flippedImg) => {
      //checking if the card is clicked for the first time
      if(!flippedImg.isFlipped){
        //change flipped state to true
        setImages( prevState => {
            return prevState.map( image => {
                if(image.id === flippedImg.id){
                    return {...image , isFlipped: true}
                }
                return image;
            })
        })

        //checking if 1st or 2nd choice
        if(firstChoice){
            const cardsMatch = compareCards(firstChoice, flippedImg);
            if(cardsMatch){
                //leave them flipped
            }else{
                //flip them back cause they do not match
                setTimeout(() => {
                    setImages( prevState => {
                        return prevState.map( image => {
                            if(image.index === flippedImg.index || image.index === firstChoice.index){
                                return {...image , isFlipped: false}
                            }
                            return image;
                        })
                    })
                }, 1000);
            }
            setFirstChoice(null)
        }else{
            setFirstChoice(flippedImg);
        }

      }//else do nothing cause its already flipped
  }

  const compareCards = (firstCard, secondCard) => {
    return firstCard.index === secondCard.index;
  }

  const newGameHandler = () => {
    setImages(shuffleArray([...imagesArray]));
  }

  const shuffledImagesList = images
    .map((image) => ( <Card key={image.id} image={image} cardClickHandler={cardClickHandler}/> ));

  return (
    <Container>
      <GlobalStyle />
      <Board>{shuffledImagesList}</Board>
      <NewGameBtn onClick={newGameHandler}>New Game</NewGameBtn>
    </Container>
  );
};

export default App;
