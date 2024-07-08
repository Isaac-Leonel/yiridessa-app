import React from 'react'
import styled from 'styled-components'

export const JobCard = ({ url, jobName, onClick }) => {
    return (
        <CardContainer onClick={onClick}>
            <h1>{jobName}</h1>
            <Card url={url} />
        </CardContainer>    
    )
}

const CardContainer = styled.div`
    height: 400px;
    width: 260px;
    h1 {
        font-family: FireFlight;
        color: white;
        font-size: 1.6rem;
        text-align: center;
        font-weight: 100;
    }
`

const Card = styled.div`
    width: 200px;
    height: 300px;
    margin: 30px;
    border: none;
    cursor: pointer;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props => '/img/'+props.url});

    &:hover{
        transition: 0.5s;
        -webkit-box-shadow: 0px 0px 23px 0px rgba(255,255,255,1);
        -moz-box-shadow: 0px 0px 23px 0px rgba(255,255,255,1);
        box-shadow: 0px 0px 15px 0px rgba(255,255,255,1);
    }
`
