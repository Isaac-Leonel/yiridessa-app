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
                <RaceModal 
                    raceName={races[slide].raceName ?? ""}
                    imageUrl={races[slide].imageUrl ?? ""} 
                    racialImage={races[slide].racialImage ?? []}
                    kingdom={races[slide].kingdom ?? ""}
                    bonus={races[slide].bonus ?? ""}
                    racialPoints={races[slide].racialPoints ?? []}
                    views={races[slide].views ?? []}
                />
            </StyledRacesContainer>
        </StyledSection>
    )
}

const StyledRacesContainer = styled.div`
    width: 100%;
    height: 80vh;
    margin-top: 15vh;
    padding: 0px 0% 0px 02%;
    display: flex;
    flex-direction: row;
    backdrop-filter: blur(05px); /* Ajuste o valor do blur conforme necessário */
    -webkit-backdrop-filter: blur(05px);
`

const StyledSection = styled.section`
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    display: flex;
    overflow-x: hidden;
    justify-content: center;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-shadow: inset 0px 0px 15vw 15vw rgb(0, 0, 0);
    font-family: FireFlight;
    background-image: url('/img/races_background.jpg');
`

const StyledArrow = styled.img`
    width: 01.5%;
    margin-bottom: 3vh;
    margin-right: 30px;
`