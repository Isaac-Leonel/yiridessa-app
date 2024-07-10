import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { RaceCard } from "./components/raceCard";
import { OriginalImgPosition } from "../../components/navigator";
import { RaceModal } from "./components/raceModal"; 

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { register } from "swiper/element";
import { Pagination, EffectCoverflow, Mousewheel } from 'swiper/modules';
import races from './races';


export const Races = () => {
    const swiperElRef = useRef(null);
    const [race, setRace] = useState({})
    const [modalOpen, setModalOpen] = useState(false)
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
                    modifier: 1,
                    slideShadows: false,
                },
                pagination: false,
                keyboard: false,
                modules: [EffectCoverflow, Pagination, Mousewheel],
                on: {
                    init(s) {
                        setSlide(s.activeIndex)
                    },
                    slideChange(s) {
                        setSlide(s.activeIndex)
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
                    <StyledArrow src="/img/arrow_scroll.svg"></StyledArrow>
                    <swiper-container
                        init="false" 
                        ref={swiperElRef}
                        id={"mySwiper"}
                    >
                        {
                            races.map((race, index) => {
                                
                                return (
                                    <swiper-slide key={index}>
                                        <RaceCard 
                                            url={race.imageUrl} 
                                            raceName={race.raceName}
                                            active={slide == index} 
                                        />
                                    </swiper-slide>
                                
                                )
                            })
                        }
                    </swiper-container>
                </StyledRacesContainer>
                <RaceModal 
                    raceName={races[slide].raceName ?? ""}
                    imageUrl={races[slide].imageUrl ?? ""} 
                    racialImage={races[slide].racialImage ?? []}
                    kingdom={races[slide].kingdom ?? ""}
                    bonus={races[slide].bonus ?? ""}
                    racialPoints={races[slide].racialPoints ?? []}
                    views={races[slide].views ?? []}
                />
            </div>
        </StyledSection>
    )
}

const StyledRacesContainer = styled.div`
    width: 250px;
    min-width: 250px;
    max-width: 250px;
    
    height: 100%;
    
    display: flex;
    flex-direction: row;

    swiper-container {
        width: 250px;
        min-width: 250px;
        max-width: 250px;
    }
`

const StyledSection = styled.section`
    padding: 15vh 0px 0px 45px;
    width: 100vw;
    height: 100vh;
    min-height: 100vh;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-shadow: inset 0px 0px 15vw 15vw rgb(0, 0, 0);
    font-family: FireFlight;
    background-image: url('/img/races_background.jpg');

    .backdrop {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;

    }
`

const StyledArrow = styled.img`
    width: 20px;
    margin-bottom: 3vh;
    margin-right: 30px;
`