import React from "react";
import styled from "styled-components";

export const ButtonYiridessa = ({text, onClick}) =>{

    const handleClick = (e) =>{
        if(onClick) onClick(e)
    }

    return(
        <StyledButton onClick={handleClick}>{text??""}</StyledButton>
    )
}

const StyledButton = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: #AA2B2B;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.2rem;
    font-weight: 500;
    font-size: 1.2rem;
    &:hover{
        background: #8f2323;
        cursor: pointer;
        box-shadow: 11px 6px 26px 0px rgba(0,0,0,0.4);
        -webkit-box-shadow: 11px 6px 26px 0px rgba(0,0,0,0.4);
        -moz-box-shadow: 11px 6px 26px 0px rgba(0,0,0,0.4);
        transition: 0.3s;
    }
`