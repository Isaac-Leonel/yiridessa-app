import React from "react";
import styled from "styled-components";

export const CircleButton = ({onClick, radius, imageName, active}) =>{

    const handleClick = (e) =>{
        if(onClick) onClick(e)
    }

    return(
        <StyledActive onClick={handleClick} radius={radius * 1.20} active={active}>
            <StyledBorder radius={radius * 1.1}>
                <StyledButton radius={radius}>
                    <StyledImg url={imageName} radius={radius}></StyledImg>
                </StyledButton>
            </StyledBorder>
        </StyledActive>
    )
}

const StyledButton = styled.div`
    width: ${props => props.radius + "px"};
    height: ${props => props.radius + "px"};
    background: #210000;
    -webkit-box-shadow: inset 0px 0px 40px 5px rgba(0,0,0,0.75);
    -moz-box-shadow: inset 0px 0px 40px 5px rgba(0,0,0,0.75);
    box-shadow: inset 0px 0px 40px 5px rgba(0,0,0,0.75);
    border-radius: ${props => props.radius + "px"};
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledBorder = styled.div`
    width: ${props => props.radius  + "px"};
    height: ${props => props.radius  + "px"};
    border-radius: ${props => props.radius  + "px"};
    background: linear-gradient(45deg, #580C0C, #982C2C, #580C0C);
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledImg = styled.div`
    width: 100%;
    height: 100%;
    border-radius: ${props => props.radius  + "px"};
    background-size: cover;
    padding: 0px;
    color: #FDF0D5;
    margin: 0px;
    background-repeat: no-repeat;
    -webkit-box-shadow: inset 0px 0px 20px 5px rgba(0,0,0,0.75);
    -moz-box-shadow: inset 0px 0px 20px 5px rgba(0,0,0,0.75);
    box-shadow: inset 0px 0px 20px 5px rgba(0,0,0,0.75);
    background-image: url(${props => '/img/' + props.url});
`

const StyledActive = styled.div`
    background: transparent;
    border: ${props => (props.active ? '2px solid #FDF0D5' : 'none')};
    width: ${props => props.radius  + "px"};
    height: ${props => props.radius  + "px"};
    border-radius: ${props => props.radius  + "px"};
    display: flex;
    justify-content: center;
    align-items: center;
`