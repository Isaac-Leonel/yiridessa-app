import React from "react";
import styled from "styled-components";
import { ButtonYiridessa } from "../../../components/button";

export const AnnouncementComponent = ({imageName, title, description, onClick}) => {

    const handleClick = (e) =>{
        if(onClick) onClick(e)
    }

    return(
        <StyledBackgroundContainer url={imageName}>
            <StyledContainer>
                <StyledTitle>{title}</StyledTitle>
                <StyledDescription>{description}</StyledDescription>
                {
                    onClick &&
                    <StyledContainerButton><ButtonYiridessa onClick={handleClick}>SAIBA-MAIS</ButtonYiridessa></StyledContainerButton>   
                }
            </StyledContainer>
        </StyledBackgroundContainer>
    )
}

const StyledBackgroundContainer = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, black 10%, transparent 70%), url(${props => '/img/'+props.url});
    background-size: cover;
    background-repeat: no-repeat;
    text-align: left;
    flex-direction: column;
    display: flex;
    justify-content: end;
    padding-left: 80px;
    color: white;
`

const StyledContainer = styled.div`
    height: 55%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    
`

const StyledTitle = styled.h1`
    font-family: FireFlight;
    font-size: 3em;
`

const StyledDescription = styled.h2`
    width: 60%;
    font-weight: 300;
    font-size: 1.2em;
`

const StyledContainerButton = styled.div`
    width: 300px;
    height: 40px;
`