import React from "react";
import styled from "styled-components";

export const BookCard = ({imageName}) => {
    return(
        <StyledCardContainer  url={imageName}>

        </StyledCardContainer>
    )
}

const StyledCardContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: url(${props => '/img/'+props.url});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`