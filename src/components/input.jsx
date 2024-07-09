import React from "react";
import styled from "styled-components";

export const InputYiridessa = ({placeholder, onChange}) =>{
    
    const handleChange = (e) => {
        if(onChange) onChange(e)
    }

    return(
        <StyledInput placeholder={placeholder??""} onChange={handleChange}></StyledInput>
    )
}

const StyledInput = styled.input`
    padding: 03%;
    border: none;
    border-radius: 10px;
    width: 100%;
    font-size: 0.9vw;
    font-family: Roboto;

    &:focus-visible {
        outline: none;
        box-shadow: none;
    }
`