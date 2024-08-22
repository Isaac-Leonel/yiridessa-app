import React from "react";
import styled from 'styled-components'

export const ContentContainer = ({title, children}) => {
    return (
        <StyledContainer>
            <StyledContainerTitle>{title}</StyledContainerTitle>
            {children}
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #1C070A;
    border-radius: 10px;
    border: 1px solid #FDF0D5;
`

const StyledContainerTitle = styled.h1`
    background: #540B0E;
    align-items: center;
    display: flex;
    font-size: 25px;
    padding: 20px;
    width: 100%;
    height: 20%;
    border-radius: 10px;
    border: 1px solid #FDF0D5;
`

const StyledContentContainer = styled.div`
    font-family: Georgia, serif;
    justify-content: center;
    display: flex;
    padding: 10px;
`