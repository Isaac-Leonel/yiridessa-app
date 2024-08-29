import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ClasseCard } from "./components/classeCard";
import { OriginalImgPosition } from "../../components/navigator";
import { ClasseModal } from "./components/classeModal"; 
import { CircleButton } from "../../components/circleButton.jsx";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { register } from "swiper/element";
import { Pagination, EffectCoverflow, Mousewheel } from 'swiper/modules';
import classes from './classes.js';

export const Classes = () => {
    const swiperElRef = useRef(null);
    const [classe, setClasse] = useState({})
    const [slide, setSlide] = useState(0)

    useEffect(() => { 
        const asyncFunction = async () => {
            // Object with parameters
            const params = {
                direction: "vertical",
                effect: "coverflow",
                centeredSlides: true,
                slidesPerView: 6,
                mousewheel: true,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 0,
                    slideShadows: false,
                },
                pagination: false,
                keyboard: false,
                modules: [EffectCoverflow, Pagination, Mousewheel],
                on: {
                    init(s) {
                        setSlide(s.activeIndex)
                        setClasse(classes[0])
                    },
                    slideChange(s) {
                        setSlide(s.activeIndex)
                        setClasse(classes[s.activeIndex])
                    },
                }
            };
        
            // Assign it to swiper element
            await Object.assign(swiperElRef.current, params);
        
            // initialize swiper
            swiperElRef.current.initialize();
        }

        register();
        asyncFunction();

        const img = document.getElementById('yiridessaLogo')
        if (!img) return
        img.style.top = OriginalImgPosition.top
        img.style.left = OriginalImgPosition.left
        img.style.width = OriginalImgPosition.width

    }, []);

    return (
        <StyledSection>
            <div className="backdrop">
                <StyledRacesContainer>
                    <swiper-container
                        init="false" 
                        ref={swiperElRef}
                        id={"mySwiper"}
                    >
                        {
                            classes.map((race, index) => {
                                if(race.subClasse == false)
                                return (
                                    <swiper-slide key={index}>
                                        <CircleButton 
                                            onClick={() => {setSlide(index); setClasse(race)}} 
                                            radius="100"
                                            active={slide == index}
                                            imageName={race.iconURL} 
                                        />
                                    </swiper-slide>
                                
                                )
                            })
                        }
                    </swiper-container>
                </StyledRacesContainer>
                <ClasseModal 
                    className={classe.className ?? ""}
                    description={classe.description ?? ""}
                    evolution={classe.evolution ?? []}
                    videoEmbed={classe.videoEmbed ?? ""}
                    armor={classe.armor ?? []}
                    weapons={classe.weapons ?? []}
                    passives={classe.passive ?? []}
                    classAttributes={classe.classAttributes ?? []}
                />
                <StyledEvolucoesContainer>
                    <StyledKingdom>Evoluções</StyledKingdom>
                    <div style={{display: 'flex', gap: '20px', flexDirection: 'column'}}>
                        {
                            classe.evolution?.map(ev => {
                                return (
                                    classes.map((subC, index) => {
                                        if(subC.className === ev){
                                            return (
                                                <CircleButton 
                                                    onClick={() => {setClasse(classes.find(x => x.className === subC.className))}} 
                                                    radius="100"
                                                    active={classe.className === subC.className}
                                                    imageName={subC.iconURL} 
                                            />
                                        )
                                    }
                                        
                                    })
                                )
                            })
                            
                        }
                    </div>
                    
                </StyledEvolucoesContainer>
            </div>
        </StyledSection>
    )
}

const StyledRacesContainer = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;

    swiper-container {
        width: 100%;
    }
`

const StyledEvolucoesContainer = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    margin-top: 130px;
    align-items: center;
    flex-direction: column;
`

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
    justify-content: center;

    .backdrop {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;

    }
`

const StyledArrow = styled.img`
    width: 20px;
    margin-bottom: 3vh;
    margin-right: 30px;
`

const StyledLine = styled.div`
    background-color: #FDF0D5;
    width: 90px;
    height: 2px;
    position: absolute;
    top: 54vh;
    left: 21.3vw;
    
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
    margin-bottom: 30px;
`