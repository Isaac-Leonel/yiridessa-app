import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { RaceCard } from "./components/raceCard";
import { OriginalImgPosition } from "../../components/navigator";
import { RaceModal } from "./components/raceModal"; 

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { CircleButton } from "../../components/circleButton";


export const Races = () => {
    const swiperElRef = useRef(null);
    const [kingdom, setKingdom] = useState("Aetherya");

    
    useEffect(() => { 
     
        const img = document.getElementById('yiridessaLogo')
        if (!img) return
        img.style.top = OriginalImgPosition.top
        img.style.left = OriginalImgPosition.left
        img.style.width = OriginalImgPosition.width

    }, []);


    const handleClick = (value, index) => {
        setKingdom(value);
    }

    return (
        <StyledSection>
            <StyledKingdomContainer>
                    <StyledKingdom>{kingdom}</StyledKingdom>
                    <h3>Selecione o Reino:</h3>
                    <CircleButton 
                        onClick={() => handleClick("Aetherya")} 
                        radius="110"
                        active={kingdom === "Aetherya" ? true : false}
                        imageName="Aetherya_icon.png"
                        
                    />
                    <CircleButton 
                         onClick={() => handleClick("Ydris")} 
                        radius="110"
                        active={kingdom === "Ydris" ? true : false}
                        imageName="Ydris_icon.png"
                    />
                    <CircleButton 
                         onClick={() => handleClick("Umbrovea")} 
                        radius="110"
                        active={kingdom === "Umbrovea" ? true : false}
                        imageName="Umbrovea_icon.png"
                    />
            </StyledKingdomContainer>
            <StyledRaceContainer>
                <RaceModal
                    kingdom={kingdom}
                >

                </RaceModal>
            </StyledRaceContainer>
        </StyledSection>
    )
}


const StyledSection = styled.section`
    padding: 100px 0px 0px 0px;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-shadow: inset 0px 0px 10vw 5vw rgb(0, 0, 0);
    font-family: FireFlight;
    background-image: url('/img/races_background.jpg');
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const StyledKingdomContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 15%;
    height: 100%;
    margin-top: -80px;

    h3{
        font-family: Georgia, serif;
        color: #FDF0D5;
        font-size: 20px;
        width: 100px;
        text-align: center;
    }
`

const StyledRaceContainer = styled.div`
  width: 85%;
  height: 100%;
`

const StyledKingdom = styled.h1`
    padding: 10px;
    border-radius: 10px;
    width: 150px;
    text-align: center;
    font-size: 30px;
    color: #FDF0D5;
    background: rgba(15, 15, 15, 0.445);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.6px);
    -webkit-backdrop-filter: blur(6.6px);
    border: 1px solid rgba(255, 255, 255, 0.3);
`