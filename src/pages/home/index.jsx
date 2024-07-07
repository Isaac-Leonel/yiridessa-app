import React from "react";
import { Navigator } from "./components/navigator";
import styled from "styled-components";

export const Home = () => {
    return (
        <StyledHomeContainer>
            <Navigator/>
        </StyledHomeContainer>
    )
}

const StyledHomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: black;
`