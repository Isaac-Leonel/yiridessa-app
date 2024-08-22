/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useRef, useState } from "react";
import { Pagination, EffectCoverflow, Mousewheel } from 'swiper/modules';
import { register } from "swiper/element";
import styled from 'styled-components'
import races from '../races';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { CircleButton } from "../../../components/circleButton";



export const RaceModal = ({kingdom}) => {
    const swiperElRef = useRef(null);
    const [value, setValue] = useState(0);
    const [index, setIndex] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClick = (race, index) => {
        setIndex(race);
    }

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
            <StyledRaceContainer>
                {
                    races.map((race, indexS) => {
                        if(race.kingdom === kingdom) {
                            return (
                                <CircleButton
                                    onClick={() => handleClick(indexS)} 
                                    radius="80"
                                    active={indexS === index ? true : false}
                                    imageName={race.imageUrl}
                                />   
                            )
                        }
                        
                    })
                }
            </StyledRaceContainer>
               {
                races.map((race, indexI) => {
                    console.log(index)
                    if(indexI == index)
                    return (
                        <StyledModal>
                            <StyledContainerInfoText>
                                <StyledInfosContainer>
                                    <div>
                                        <div style={{display: "flex", gap:"20px", }}>
                                            <StyledTextContainer>{race.raceName}</StyledTextContainer>
                                        </div>
                                        <div style={{display: "flex", gap:"10px", marginTop: "10px"}}>
                                            {
                                                race.bonus.map((bonus) => {
                                                    return (
                                                        <StyledPassiveContainer>{bonus}</StyledPassiveContainer>
                                                    )
                                                })
                                            }
                                        </div>
                                        <StyledAttributeContainer>
                                            {
                                                race.racialPoints.map((atr, index) => {
                                                    return(
                                                        <div>
                                                            <StyledAttributeText>{atr.bonusName}</StyledAttributeText>
                                                            <div style={{display: "flex", gap:"2px", marginTop: "5px"}}>
                                                                <StyledAttributeBar active={atr.bonusValue >= 1 ? true : false}></StyledAttributeBar>
                                                                <StyledAttributeBar active={atr.bonusValue >= 2 ? true : false}></StyledAttributeBar>
                                                                <StyledAttributeBar active={atr.bonusValue >= 3 ? true : false}></StyledAttributeBar>
                                                                <StyledAttributeBar active={atr.bonusValue >= 4 ? true : false}></StyledAttributeBar>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </StyledAttributeContainer>
                            
                                    </div>
                                    <StyledIframe 
                                            src="https://www.youtube.com/embed/uf2bcEonBsE" 
                                            frameborder="0" 
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                            allowfullscreen>
                                    </StyledIframe>
                                </StyledInfosContainer>
                                <BodyDiv>
                                    <div className="backgroundPaper"></div>
                                    <div className="text">

                                        <TabContext 
                                            value={value}
                                        >
                                            <Box sx={{ borderRadius: "20",  borderBottom: 1, borderColor: 'divider',}}>
                                                <TabList style={{ margin: "10px 0px 0px 10px" }} onChange={handleChange} aria-label="tabs">
                                                    {
                                                        race.views.map((view, index) => {
                                                            return(
                                                                <Tab label={view.title} value={index} />
                                                            )
                                                        })
                                                    }
                                                </TabList>
                                            </Box>
                                            {
                                                race.views.map((view, index) => {
                                                    return(
                                                        <TabPanel sx={{height: '35vh', width: '100%', position: "relative"}} value={index}>
                                                            <StyledTextDiv dangerouslySetInnerHTML={{__html: view.content}} />
                                                        </TabPanel>
                                                    )
                                                })
                                            }
                                        </TabContext>
                                    </div>
                                </BodyDiv>
                            </StyledContainerInfoText>  
                            <StyledImageContainer>
                                    <StyledButtonContainer>
                                        <CircleButton
                                            onClick={console.log("clicou")} 
                                            radius="40"
                                            active={true}
                                            imageName="photo_icon.png"
                                        ></CircleButton>
                                    </StyledButtonContainer>
                                    <StyledRaceGif url={race.raceName + ".gif"}/>
                                    {/* <swiper-container
                                        init="false" 
                                        ref={swiperElRef}
                                        id={"mySwiper"}
                                    >  
                                        {
                                            race.racialImage.map(gender => {
                                                return (
                                                    <swiper-slide >
                                                        <StyledRaceGif url={gender}></StyledRaceGif>
                                                    </swiper-slide>
                                                )})
                                        }
                                    </swiper-container> */}
                            </StyledImageContainer>
                            
                           
                        </StyledModal>
                    )
                })
               }
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
`

const StyledRaceContainer = styled.div`
    width: 10%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 05px;
`

const StyledModal = styled.div`
    backdrop-filter: blur(10px); /* Ajuste o valor do blur conforme necessário */
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    background-color: #1d0908ba;
    display: flex;
    border: 1px solid #FDF0D5;
    margin: 20px;
    width: 90%;
    height: 90%;
`

const StyledTextContainer = styled.h1`
    background-color: #1C070A;
    border: 1px solid #FDF0D5;
    height: fit-content;
    padding: 10px;
    width: 20vw;
    border-radius: 10px;
    font-size: 25px;
    color: #FDF0D5;
    font-family: Georgia, serif;
`

const StyledIframe = styled.iframe`
    border: 1px solid #FDF0D5;
`

const StyledContainerInfoText = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    width: 80%;
    height: 100%;
    justify-content: space-between;
`

const StyledInfosContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 40%;
    justify-content: space-between;
    
    iframe {
        height: 220px;
        width: 400px;
        border-radius: 20px;
    }
`

const StyledImageContainer = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

    swiper-container {
        width: 100%;
        height: 100%;
    }
    swiper-slide {
        width: 100%;
        height: 100%;
    }
`

const StyledRaceGif = styled.div`
    background-image: url(${props => '/raceGifs/'+props.url});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    border-radius: 10px;
    border: 1px solid #FDF0D5;
    height: 100%;
`

const StyledPassiveContainer = styled.h2`
    background-color: #1C070A;
    border: 1px solid #FDF0D5;
    height: fit-content;
    padding: 5px;
    width: 120px;
    text-align: center;
    border-radius: 5px;
    font-size: 15px;
    color: #FDF0D5;
    font-family: Georgia, serif;
`


const BodyDiv = styled.div`
    display: flex;
    align-items: left;
    flex-direction: column;
    color: #5f1b1b;
    height: 60%;
    position: relative;

    .backgroundPaper {
        height: 90%;
        width: 100%;
        border-radius: 10px;
        left: 0;
        top: 0;
        position: absolute;
        box-shadow: 2px 3px 20px transparent, 0 0 125px #8f5922 inset;
        background: #fffef0;
        filter: url(#wavy2);
        background-image: url(data:image/png;base64,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);
    }

    .first-letter {
        line-height: normal;
        font-family: FireFlight;
        font-size: 30px;
    }
`


const StyledTextDiv = styled.div`
    text-align: justify;
    padding: 0px 30px 0px 30px;
    font-family: Roboto;
    overflow: auto;
    height: 100%;
    width: 100%;
    font-size: 15px;

    &::-webkit-scrollbar {
        margin-right: 10px;
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 100px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #5f1b1b;
        border-radius: 100px;
    }

    .closeButton {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }
`

const StyledAttributeContainer = styled.div`
    width: 30%;
    height: 50%;
    flex-direction: column;
    flex-wrap: wrap;
    display: flex;
    gap: 10px;
`

const StyledAttributeText = styled.h2`
    height: fit-content;
    width: 120px;
    font-size: 18px;
    color: #FDF0D5;
    font-family: Georgia, serif;
`

const StyledAttributeBar = styled.div`
    width: 45px;
    height: 10px;
    border-radius: 5px;
    background: ${props => (props.active ? '#FDF0D5' : '#1C070A')};
`


const StyledImg = styled.div`
    width: 250px;
    height: 500px;
    border: none;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props => '/img/'+props.url});
`

const StyledButtonContainer = styled.div`
    position: absolute;
    top: 30px;
    right: 30px;
`