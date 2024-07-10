import React from 'react'
import styled from 'styled-components'

export const My404Component = () => {
    return (
        <StyledContainer>
            <StyledGIF>
                <BlurOverlay />
                <div className='texto'>
                    404 página não encontrada
                </div>
            </StyledGIF>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: black;
    position: relative;
    overflow: hidden;
`

const StyledGIF = styled.div`
    background-image: url('/gif/background_yiri.gif');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;

    .texto {
        font-family: FireFlight;
        position: relative;
        background: rgba(71, 15, 15, 0); /* Fundo semi-transparente */
        color: white;
        font-size: 8rem;
    }
`

const BlurOverlay = styled.div`
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(20px); /* Ajuste o valor do blur conforme necessário */
    -webkit-backdrop-filter: blur(10px); /* Compatibilidade com Safari */
`;