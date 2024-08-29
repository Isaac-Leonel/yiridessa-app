import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components'
import { Pagination, EffectCoverflow, Mousewheel } from 'swiper/modules';
import { register } from "swiper/element";
import { ContentContainer } from "../../../components/contentContainer";
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
import { CircleButton } from "../../../components/circleButton";



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
                <div style={{width: "50%", height: "330px"}}>
                    <ContentContainer title={className}>
                        <StyledDescription>{description}</StyledDescription>
                    </ContentContainer>
                </div>
                <div style={{width: "50%", height: "120px"}}>
                    <ContentContainer title="Passivas">
                        <StyledContainerAt>
                            {
                                passives.map((passive) => {
                                    return (
                                        
                                            <StyledAtriContainer>{passive}</StyledAtriContainer>
                                    
                                    )
                                })
                            }
                         </StyledContainerAt> 
                    </ContentContainer>
                </div>
                <div style={{width: "50%", height: "180px"}}>
                    <ContentContainer title="Atributos">
                        <StyledContainerAt>
                            {
                        
                                classAttributes.map((atr) => {
                                    return (
                                        
                                            <StyledBonusContainer>
                                                <span>{atr.type + "º Atributo"}</span>
                                                <strong>{atr.bonusName}</strong>
                                            
                                            </StyledBonusContainer>
                                    
                                    )
                                })
                            }
                        </StyledContainerAt>
                    </ContentContainer>
                    
                </div>
                <div style={{width: "50%", height: "150px"}}>
                    <ContentContainer title="Armas">
                        <StyledContainerAt>
                            {
                                weapons.map((weapon) => {
                                    return (
                                        
                                            <StyledAtriContainer>{weapon}</StyledAtriContainer>
                                    
                                    )
                                })
                            }
                         </StyledContainerAt> 
                    </ContentContainer>
                </div>
                <div style={{width: "50%", height: "150px"}}>
                    <ContentContainer title="Armadura">
                        <StyledContainerAt>
                            {
                                armor.map((armor) => {
                                    return (
                                        
                                            <StyledAtriContainer>{armor}</StyledAtriContainer>
                                    
                                    )
                                })
                            }
                         </StyledContainerAt> 
                    </ContentContainer>
                </div>
            </StyledModal>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    display: flex;
    width: 70%;
    height: 85%;
`

const StyledModal = styled.div`
    backdrop-filter: blur(10px); /* Ajuste o valor do blur conforme necessário */
    -webkit-backdrop-filter: blur(10px);
    background-color: #110202a6;
    border: 1px solid #FDF0D5;
    color: #FDF0D5;
    display: flex;
    flex-direction: column;
    margin-right: 100px;
    flex-wrap: wrap;
    border-radius: 20px;
    padding: 30px;
    width: 100%;
    max-width: 1300px;
    height: 100%;
    gap: 10px;
    

    p{
        font-family: Arial, Helvetica, sans-serif;
    }

    h1{
        letter-spacing: 0.2rem;
    }
`

const StyledDescription = styled.p`
    padding: 10px;
    margin-top: -15px;
    font-size: 14px;
`

const StyledAtriContainer = styled.h2`
    background: #FDF0D5;
    color: #110202;
    display: flex;
    border-radius: 10px;
    align-items: center;
    padding: 10px;
    font-size: 15px;
    font-family: Georgia, serif;
`

const StyledBonusContainer = styled.div`
    background: #FDF0D5;
    color: #110202;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 300px;
    justify-content: center;
    height: 100px;
    align-items: center;
    padding: 10px;
    font-size: 15px;
    font-family: Georgia, serif;
    text-align: center;
`

const StyledContainerAt = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: row;
    gap: 10px;
`