import React from 'react'
import styled from 'styled-components'

import { CircleButton } from '../../../components/circleButton'


export const JobCard = ({ url, jobName, onClick, active }) => {
    return (
        <CardContainer onClick={onClick} active={active}>
            <CircleButton 
                onClick={false} 
                radius="90"
                active={active}
                imageName={url}/>
            <JobName>{jobName}</JobName>
        </CardContainer>    
    )
}

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 100px;
    width: 250px;
    padding: 10px;
    border-radius: 10px;
    transition: box-shadow 0.3s ease-in-out;
`

const Card = styled.div`
    width: ${props => (props.active ? '100px' : '80px')};
    height: ${props => (props.active ? '100px' : '80px')};
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props => '/img/' + props.url});
    transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
`

const JobName = styled.h1`
    font-family: FireFlight;
    color: white;
    font-size: 1.8rem;
    font-weight: 100;
    margin-left: 20px;
    text-align: left;
`
