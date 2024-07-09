import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import _ from 'lodash'

export const BookCard = ({ imageName, text, title, active, callExpandDiv }) => {
    const refContainer = useRef(null)

    useEffect(() => {
        refContainer.current.firstChild.style.transform = "";
    }, [active])

    const handleClick = (e) => {
        if (!refContainer || !refContainer.current || !active) return

        refContainer.current.firstChild.style.transform = "rotateY(180deg)";
        
        _.debounce(() => {
            callExpandDiv(text,refContainer)
        }, [700])()
    }

    return(
        <StyledCardContainer ref={refContainer} onClick={handleClick} slideActive={active}>
            <div className="flip-card-inner">
                <div 
                    className="flip-card-front" 
                    style={{ 
                        background: `url(/img/${imageName})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                >
                    <span>{title}</span>
                </div>
                <div className="flip-card-back">
                    <div className="backgroundPaper"></div>
                    <div className="text" dangerouslySetInnerHTML={{__html: text}}></div>
                </div>
            </div>
        </StyledCardContainer>
    );
};

const StyledCardContainer = styled.div`
    background-color: transparent;
    width: 100%;
    height: 100%;
    perspective: 1000px;
    position: relative;
    filter: ${props => props.slideActive ? "brightness(1.1)" : "brightness(0.5)"};
    -webkit-transition: filter 1s;
    -moz-transition: filter 1s;
    -ms-transition: filter 1s;
    transition: filter 1s;

    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .flip-card-front {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: FireFlight;
        font-weight: 300;
        font-size: 3rem;
    }

    .flip-card-back {
        border-radius: 20px;
        transform: rotateY(180deg);
        position: relative;
        padding: 20px;
    }
`
