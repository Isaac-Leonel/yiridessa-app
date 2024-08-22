import React from 'react'
import styled from 'styled-components'

export const ClasseCard = ({ url, raceName, onClick, active }) => {
    return (
        <CardContainer onClick={onClick} active={active}>
            <Card url={url} active={active} />
        </CardContainer>    
    )
}

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 100px;
    width: 250px;
    border-radius: 10px;
`

const Card = styled.div`
    width: ${props => (props.active ? '120px' : '80px')};
    height: ${props => (props.active ? '120px' : '80px')};
    margin-left: ${props => (props.active ? '60px' : '20px')};;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props => '/img/' + props.url});
    transition: width 0.3s ease-in-out, height 0.3s ease-in-out, margin 0.4s;
`

const JobName = styled.h1`
    font-family: FireFlight;
    color: white;
    font-size: 1.6rem;
    font-weight: 100;
    margin-left: 20px;
    letter-spacing: 0.2rem;
    text-align: left;
`
