import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export const OriginalImgPosition = {
    top: "11px",
    left: "23px",
    width: "150px"
}

export const Navigator = React.forwardRef((props, ref) => {
    const location = useLocation();
    const [pathName, setPathName] = useState("")

    useEffect(() => {
        setPathName(location.pathname.replace("/", ""))
    }, [location]);

    return(
        <StyledNav ref={ref}>
            <StyledLinkDiv>
                <StyledLinkIconImg to={""}><StyledImg id="yiridessaLogo" src="/img/logo_grande.png"/></StyledLinkIconImg>
                <StyledLink to={"books"} active={pathName == "books"}><span>LIVROS</span></StyledLink>
                <StyledLink to={"jobs"} active={pathName == "jobs"}><span>PROFISSÔES</span></StyledLink>
                <StyledA href="https://docs.google.com/document/d/1A4ojlRQrGWAfnfwq84Bv6AGVr5Ne1g5na9hX0MHhs1c/preview" target="_blank" active={pathName == "rules"}><span>REGRAS</span></StyledA>
                <StyledLink disabled to={""} active={pathName == "races"}><span>RAÇAS</span></StyledLink>
                <StyledLink disabled to={""} active={pathName == "classes"}><span>CLASSES</span></StyledLink>
                <StyledLink disabled to={""} active={pathName == "allowlist"}><span>ALLOWLIST</span></StyledLink>
            </StyledLinkDiv>
            <StyledIconsContainer>
                <StyledLinkIcon href="https://discord.gg/y4ZuCc9e8r" target="_blank"><i className="fab fa-discord"></i></StyledLinkIcon>
                <StyledLinkIcon href="https://www.youtube.com/channel/UCATS-dtbr1ODcyOXxNN5N-Q" target="_blank"><i className="fab fa-youtube"></i></StyledLinkIcon>
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
    background: linear-gradient(to bottom, #070000 70%, transparent 100%);
`

const StyledLink = styled(Link)`
	color: ${props => props.disabled ? "rgb(133, 133, 133)" : props.active ? "#961919" : "#fff"};
	padding: 2rem 0px 2rem 0px;
    letter-spacing: .2em;
    z-index: 10;
    font-size: 15px;

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
	padding: 2rem 0px 2rem 0px;
    letter-spacing: .2em;
    z-index: 10;
    font-size: 15px;

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

const StyledLinkIcon = styled(StyledA)`
    padding: 0;

    i {
        font-size: 2rem;
        padding: 0 !important;
    }
`

const StyledLinkIconImg = styled(StyledLink)`
    padding: 0px 0px 0px 0px;
`

const StyledLinkDiv = styled.div`
    display: flex;
    overflow: hidden;
    gap: 02vw;
    align-items: center;
    margin-left: 160px;
`

const StyledIconsContainer = styled.div`
    overflow: hidden;
    display: flex;
    gap: 20px;
    padding-right: 50px;
`

const StyledImg = styled.img`
    width: ${OriginalImgPosition.width};
    position: fixed;
    left: ${OriginalImgPosition.left};
    top: ${OriginalImgPosition.top};
`