import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const OriginalImgPosition = {
    top: "20px",
    left: "50px"
}

export const Navigator = React.forwardRef((props, ref) => {
    return(
        <StyledNav ref={ref}>
            <StyledLinkDiv>
                <StyledLinkIconImg to={""}><StyledImg id="yiridessaLogo" src="/img/logo_grande.png"/></StyledLinkIconImg>
                <StyledLink to={"books"}><span>LIVROS</span></StyledLink>
                <StyledLink to={"jobs"}><span>PROFISSÔES</span></StyledLink>
                <StyledA href="https://docs.google.com/document/d/1A4ojlRQrGWAfnfwq84Bv6AGVr5Ne1g5na9hX0MHhs1c/preview" target="_blank"><span>REGRAS</span></StyledA>
                <StyledLink disabled to={""}><span>RAÇAS</span></StyledLink>
                <StyledLink disabled to={""}><span>CLASSES</span></StyledLink>
                <StyledLink disabled to={""}><span>ALLOWLIST</span></StyledLink>
            </StyledLinkDiv>
            <StyledIconsContainer>
                <StyledLinkIcon><i className="fab fa-discord"></i></StyledLinkIcon>
                <StyledLinkIcon><i className="fab fa-youtube"></i></StyledLinkIcon>
            </StyledIconsContainer>
        </StyledNav>
    )
})

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

const StyledLink = styled(Link)`
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

const StyledA = styled.a`
	color: #fff;
	padding: 2rem;
    letter-spacing: .2em;
    z-index: 10;
    font-size: 0.7vw;

    span {
        transition: all 0.3s ease, color 0.3s ease;
        display: inline-block;
    }

    :hover{
        cursor: pointer;
        color: rgb(175, 175, 175);
        transform: scale(1.1);
    }
`

const StyledLinkIcon = styled(StyledLink)`
    padding: 0;

    i {
        font-size: 2rem;
        padding: 0 !important;
    }
`

const StyledLinkIconImg = styled(StyledLinkIcon)`
    padding: 0px 0px 0px 0px;
`

const StyledLinkDiv = styled.div`
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
    position: fixed;
    left: ${OriginalImgPosition.left};
    top: ${OriginalImgPosition.top};
`