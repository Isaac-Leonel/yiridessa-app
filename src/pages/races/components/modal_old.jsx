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



export const RaceModal = ({ raceName, racialImage, kingdom, Appearance, bonus, racialPoints, views, videoEmbed }) => {
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
                <StyledInfoDiv>
                    <StyledContainerFirstInfo>
                        <StyledContainerRace>
                            <StyledContainerRacialInfos>
                                <h1>{raceName}</h1>
                                <div style={{display: "flex"}}>
                                    {
                                        bonus.map(bonus => {
                                            return(
                                                <h2>{bonus}</h2>
                                            )
                                        })
                                    }
                                </div>
                            </StyledContainerRacialInfos>
                            <StyledContainerRacialPoints>
                                {
                                    racialPoints.map((points, index) => {
                                        return(
                                            <ContainerAttribute>
                                                <AttributeName>                    
                                                    <h1>{points.bonusName}</h1>
                                                    <h1>{points.bonusValue}</h1>
                                                </AttributeName>
                                                <Box sx={{ width: '100%' }}>
                                                    <BorderLinearProgress variant="determinate" value={points.percentage} />
                                                </Box>
                                            </ContainerAttribute>
                                        )
                                    })
                                }
                            </StyledContainerRacialPoints>
                        </StyledContainerRace>
                        <iframe 
                            src= {videoEmbed}
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                        <div className={"divImg"}>
                            
                                <img src={`/img/${kingdom}_icon.png`}></img>
                                <h1>{kingdom}</h1>
                        </div>
                        
                    </StyledContainerFirstInfo>
                    <BodyDiv>
                        <div className="backgroundPaper"></div>
                        <div className="text">

                            <TabContext 
                                value={value}
                            >
                                <Box sx={{ borderRadius: "20",  borderBottom: 1, borderColor: 'divider',}}>
                                    <TabList style={{ margin: "10px 0px 0px 10px" }} onChange={handleChange} aria-label="tabs">
                                        {
                                            views.map((view, index) => {
                                                return(
                                                    <Tab label={view.title} value={index} />
                                                )
                                            })
                                        }
                                    </TabList>
                                </Box>
                                {
                                    views.map((view, index) => {
                                        return(
                                            <TabPanel sx={{height: '240px', width: '100%', position: "relative"}} value={index}>
                                                <StyledTextDiv dangerouslySetInnerHTML={{__html: view.content}} />
                                            </TabPanel>
                                        )
                                    })
                                }
                            </TabContext>
                        </div>
                    </BodyDiv>
                </StyledInfoDiv>
                <StyledContainerGender>
                    <swiper-container
                        init="false" 
                        ref={swiperElRef}
                        id={"mySwiper"}
                    >  
                        {
                    racialImage.map(gender => {
                            return (
                                <swiper-slide >
                                    <StyledImg url={gender}></StyledImg>
                                </swiper-slide>
                            )})
                        }
                    </swiper-container>
                </StyledContainerGender>
            </StyledModal>
            {/* <svg>
                <filter id="wavy2">
                    <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1" />
                    <feDisplacementMap in="SourceGraphic" scale="20" />
                </filter>
            </svg> */}
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
    display: flex;
    height: 95%;
    width: calc(100% - 200px);
`

const StyledContainerGender = styled.div`
    width: 30%;
    min-width: 300px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    swiper-container {
        width: 80%;
        min-width: 250px;
        height: 100%;
    }
    swiper-slide {
        width: 100%;
        height: 100%;
    }
`

const StyledContainerFirstInfo = styled.div`
    width: 100%;
    padding: 20px;
    height: 300px;
    color: white;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .divImg {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        min-width: 150px;
        max-width: 150px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    iframe {
        height: 230px;
        width: 400px;
        border-radius: 20px;
    }
`


const StyledContainerRace = styled.div`
    height: 300px ;
    width: 500px;
`

const StyledContainerRacialPoints = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 600px;
`

const StyledContainerRacialInfos = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0px 0px 10px;

    h1 {
        margin-left: 15px;
    }

    h2 {
        font-family: Roboto;
        background: #5f1b1b;
        color: white;
        font-size: 1rem;
        padding: 10px;
        margin: 5px 5px 5px 15px;
        border-radius: 10px;
    }
`

const BodyDiv = styled.div`
    display: flex;
    align-items: left;
    flex-direction: column;
    /* background: #eeeeee; */
    color: #5f1b1b;
    padding-bottom: 100px;
    height: 280px;
    min-width: 61vw;
    margin: 10px;
    position: relative;

    .backgroundPaper {
        height: 100%;
        width: 100%;
        border-radius: 20px;
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

const StyledInfoDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #5f1b1b;
    width: 70%;
    height: 50%;
    font-weight: 400;
    font-size: 2rem;


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

const StyledImg = styled.div`
    width: 250px;
    height: 500px;
    border: none;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props => '/img/'+props.url});
`

const ContainerAttribute = styled.div`
    margin: 20px;
    width: 200px;
    height: 5px;
`

const AttributeName = styled.div`
    display: flex;
    justify-content: space-between;
    h1{
        font-size: 1.2rem;
        letter-spacing: 0.2rem;
    }
`

const BorderLinearProgress = styled(LinearProgress)`
    height: 10px !important;
    border-radius: 10px;
`