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



export const RaceModal = ({ raceName, racialImage, kingdom, bonus, racialPoints, views }) => {

    const swiperElRef = useRef(null);
    const [slide, setSlide] = useState(0)
    const [value, setValue] = useState(1);
    const [kingdomImg, setKingdomImg] = useState(`/img/${kingdom}_icon.png`)

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
                    delay: 5000,
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
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column",
                                alignItems: "center"
                            }}>
                                
                                  <img src={kingdomImg}></img>
                                  <h1>{kingdom}</h1>
                            </div>
                        </StyledContainerFirstInfo>
                        
                      
                     
                        <BodyDiv>
                            <TabContext 
                                value={value}>
                            <Box sx={{ borderRadius: "20",  borderBottom: 1, borderColor: 'divider',}}>
                                <TabList onChange={handleChange} aria-label="tabs">
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
                                                <TabPanel sx={{height: '350px'}} value={index}>
                                                        <StyledTextDiv dangerouslySetInnerHTML={{__html: view.content}} />
                                                </TabPanel>
                                            )
                                        })
                                    }
                            </TabContext>
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
            </StyledContainer>
    
    )
}

const StyledContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100vw;
    color: white;
    height: auto; /* Compatibilidade com Safari */
`

const StyledModal = styled.div`
    border-radius: 30px;
    margin: 100px;
    font-family: FireFlight;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
`

const StyledContainerGender = styled.div`
    width: 300px;
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

const StyledContainerFirstInfo = styled.div`
    background: white;
    width: 100%;
    height: 380px ;
    display: flex;
    align-items: center;
    justify-content: space-around;

    img{
        width: 10vw;
        height: 20vh
    }
`


const StyledContainerRace = styled.div`
    background: white;
    width: 100%;
    height: 350px ;
`

const StyledContainerRacialPoints = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 600px;
`

const StyledContainerRacialInfos = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0px 0px 10px;

    h2{
        font-family: Roboto;
        background: #140000;
        color: white;
        font-size: 1rem;
        padding: 10px;
        margin: 5px;
        border-radius: 10px;
    }
`

const BodyDiv = styled.div`
    display: flex;
    align-items: left;
    flex-direction: column;
    background: #eeeeee;
    color: #000000;
    padding-bottom: 100px;
    height: 400px;
    margin: 10px;

    .first-letter {
        line-height: normal;
        font-family: FireFlight;
        font-size: 30px;
    }
`

const ScrollContainer = styled.div`
    width: 100%;
    height: 300px;
`

const StyledInfoDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    color: black;
    width: 90%;
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
    margin: 30px;
    width: 200px;
    height: 10px;
`

const AttributeName = styled.div`
    display: flex;
    justify-content: space-between;
    h1{
        font-size: 1.5rem;
        letter-spacing: 0.1rem;
    }
`

const BorderLinearProgress = styled(LinearProgress)`
    height: 10px !important;
    border-radius: 10px;
`