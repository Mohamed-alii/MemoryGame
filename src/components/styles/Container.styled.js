import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: #1C1525;
    padding: 1rem 2rem;
    flex-direction: column;
    min-height: 100vh;

    @media (max-width: 850px) {
        padding: 1rem 0;
    }

`

export const NewGameBtn = styled.button`
    margin: 1rem auto;
    background-color: transparent;
    border: white solid 2px;
    padding: 0.3rem 1rem;
    color: white;
    cursor: pointer;
    border-radius: 5px;
`

export const Board = styled.div`

    display: grid;
    align-items: center;
    justify-content: center;
    margin: auto;
    grid-gap: 0.7rem;
    grid-template-columns: repeat(9 , auto);


    @media (max-width: 850px) {
        grid-template-columns: repeat(6 , 13.5%);
    }
    @media (max-width: 600px) {
        grid-template-columns: repeat(6 , 14.5%);
    }
    @media (max-width: 600px) {
        grid-template-columns: repeat(4 , 20%);
    }
`

export const CardStyled = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 5px;


`

export const CardFront = styled.div`

    width: 100%;
    height: 100%;
    transition: all 0.3s;
    transition-delay: ${( {frontSideVisible} ) => frontSideVisible ? '0.3s' : '0s'};
    transform: ${( {frontSideVisible} ) => frontSideVisible ? 'rotateY(360deg)' : 'rotateY(270deg)'};
    img 
    {
        display: block;
        max-width: 100%;
    }
`
export const CardBack = styled.div`

    transition: all 0.3s ;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    transform: ${( {frontSideVisible} ) => frontSideVisible ? 'rotateY(90deg)' : 'rotateY(0deg)'};
    transition-delay: ${( {frontSideVisible} ) => frontSideVisible ? '0s' : '0.3s'};

    img 
    {
        display: block;
        max-width: 100%;
    }
`

