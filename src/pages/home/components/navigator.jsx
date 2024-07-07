import React from "react";
import styled from "styled-components";

export const Navigator = () => {
    return(
        <StyledNav>
            <StyledLink>
                <StyledAimg><StyledImg src="/img/logo_grande.png"/></StyledAimg>
                <StyledA><span>LIVROS</span></StyledA>
                <StyledA><span>PROFISSÔES</span></StyledA>
                <StyledA><span>REGRAS</span></StyledA>
                <StyledA disabled><span>RAÇAS</span></StyledA>
                <StyledA disabled><span>CLASSES</span></StyledA>
                <StyledA disabled><span>ALLOWLIST</span></StyledA>
            </StyledLink>
            <StyledIconsContainer>
                <StyledAicon><i className="fab fa-discord"></i></StyledAicon>
                <StyledAicon><i className="fab fa-youtube"></i></StyledAicon>
            </StyledIconsContainer>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    width: 100%; 
    padding: 1rem; 
    position: fixed;  
    z-index: 2;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const StyledA = styled.div`
	color: ${props => props.disabled ? "rgb(133, 133, 133)" : "#fff"};
	padding: 2rem;
    letter-spacing: .2em;
    z-index: 10;
    font-size: 0.7vw;

    span, img, i {
        transition: all 0.3s ease, color 0.3s ease;
        display: inline-block;
    }

    ${props => !props.disabled ? `
        :hover{
            cursor: pointer;
            color: rgb(175, 175, 175);
            transform: scale(1.1);
        }
    ` : `
        :hover{
            cursor: not-allowed;
        }
    `};
`

const StyledAicon = styled(StyledA)`
    padding: 0;

    i {
        font-size: 2rem;
        padding: 0 !important;
    }
`

const StyledAimg = styled(StyledA)`
    padding: 10px 0px 0px 0px;
`

const StyledLink = styled.div`
    display: flex;
    overflow: hidden;
    align-items: center;
`

const StyledIconsContainer = styled.div`
    overflow: hidden;
    display: flex;
    gap: 20px;
    padding-right: 50px;
`

const StyledImg = styled.img`
    width: 09vw;
    margin-top: -10px;
`