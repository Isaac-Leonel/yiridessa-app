import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components'
import { Pagination, EffectCoverflow, Mousewheel } from 'swiper/modules';
import { register } from "swiper/element";
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



export const ClasseModal = ({ className, description, evolution, videoEmbed, armor, classAttributes, weapons, passives }) => {
    const swiperElRef = useRef(null);
    const [value, setValue] = useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => { 
        const asyncFunction = async () => {
            // Object with parameters
            const params = {
                lidesPerView: 1,
                navigation: false,
                mousewheel: false,
                loop: true,
                autoplay: {
                    enabled: true,
                    delay: 10000,
                    pauseOnMouseEnter: true,
                },
                on: {
                  
                }
            };
        
            // Assign it to swiper element
            await Object.assign(swiperElRef.current, params);
        
            // initialize swiper
            swiperElRef.current.initialize();
        }

        register();
        asyncFunction();

    }, []);


    return (
        <StyledContainer>
            <StyledModal>
               <StyledContainerInfos>
                    <h1>{className}</h1>
                    <p>{description}</p>
                    <StyledItem>
                        <h1>Passivas:</h1>
                        {
                            passives.map(bonus => {
                                return(
                                    <h2>{bonus}</h2>
                                )
                            })
                        }
                    </StyledItem>
                    <StyledItem>
                        <h1>Evolução:</h1>
                        {
                            evolution.map(bonus => {
                                return(
                                    <h2>{bonus}</h2>
                                )
                            })
                        }
                    </StyledItem>
                    <StyledItem>
                        <h1>Armas Principais:</h1>
                        {
                            weapons.map(bonus => {
                                return(
                                    <h2>{bonus}</h2>
                                )
                            })
                        }
                    </StyledItem>
                    <StyledItem>
                        <h1>Armadura:</h1>
                        <h2>{armor}</h2>
                    </StyledItem>
                    <h3>Atributos:</h3>
                        <StyledAttributes>
                            {
                                classAttributes.map((atr, index) => {
                                    return(
                                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                            <StyledCircle>
                                                <h1>{atr.type}</h1>
                                            </StyledCircle>
                                            <h2>{atr.bonusName}</h2>
                                        </div>
                                    )
                                }
                            )
                            }
                           
                        </StyledAttributes>
               </StyledContainerInfos>
               <StyledContainerVideo>
                  
               </StyledContainerVideo>
            </StyledModal>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100%;
`

const StyledModal = styled.div`
    backdrop-filter: blur(10px); /* Ajuste o valor do blur conforme necessário */
    -webkit-backdrop-filter: blur(10px);
    border-radius: 30px;
    font-family: FireFlight;
    background-color: #16161649;
    color: white;
    display: flex;
    flex-direction: row;
    height: 95%;
    width: calc(100% - 200px);

    p{
        font-family: Arial, Helvetica, sans-serif;
    }

    h1{
        letter-spacing: 0.2rem;
    }
`

const StyledContainerInfos = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px;

    h3{
        font-size: 2rem;
        letter-spacing: 0.1rem;
    }
`

const StyledContainerVideo = styled.div`
    width: 0%;
    height: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const StyledItem = styled.div`
    display: flex;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;

    h1{
        font-size: 1.5rem;
        font-family: Roboto;
        letter-spacing: 0.2rem;
        margin-top: 8px;
    }
    
    h2{
        padding: 5px 15px 5px 15px;
        margin: 10px;
        background-color: #5f1b1b;
        border-radius: 10px;
        font-size: 1.1rem;
        letter-spacing: 0.2rem;
    }
`

const StyledAttributes = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    
    h2{
        font-family: Roboto;
        font-size: 1.5rem;
    }
`

const StyledCircle = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 100px;
    background-color: #5f1b1b;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1{
        margin-top: 10px;
        font-size: 1.4rem;
        font-family: Roboto;
        margin-left: 4px;
    }
    
`