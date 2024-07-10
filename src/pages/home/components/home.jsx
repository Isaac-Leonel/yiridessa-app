import React from "react";
import styled from "styled-components";
import { ButtonYiridessa } from "../../../components/button";

export const HomeContainer = () =>{


    return(
        <StyledContainerHome>
            <StyledSubstitleContainer>
                <StyledH2>Desvende segredos ancestrais em um reino onde lendas são forjadas!</StyledH2>
            </StyledSubstitleContainer>
            <StyledImgContainer>
                <StyledImg src="/img/yiridessa_home_elf.png"></StyledImg>
            </StyledImgContainer>
        </StyledContainerHome>
    )
}

const StyledContainerHome = styled.div`
    width: 100vw;
    height: 110vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    z-index: 1;
    background: linear-gradient(to right, #070000 25%, transparent 70%);
`
const StyledSubstitleContainer = styled.div`
    margin-left: 150px;
    text-align: left;
`

const StyledImgContainer = styled.div`
    height: 100vh;
    margin-right: 150px;
    display: flex;
    flex-direction: row;
    align-items: end;
`

const StyledImg = styled.img`
    width: 45vw;
    margin-bottom: -45px;
`

const StyledH2 = styled.h2`
    font-size: 01.8vw;
    letter-spacing: 0.2rem;
    font-weight: 400;
    width: 30vw;
    margin-top: 50px;
`

const StyleImgContainer = styled.div`
    width: 300px;
    height: 50px;
`