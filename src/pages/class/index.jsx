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
                    modifier: 0,
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
                    <swiper-container
                        init="false" 
                        ref={swiperElRef}
                        id={"mySwiper"}
                    >
                        {
                            classes.map((race, index) => {
                                
                                return (
                                    <swiper-slide key={index}>
                                        <CircleButton 
                                            onClick={console.log("clicou")} 
                                            radius="100"
                                            active={slide == index}
                                            imageName={race.iconURL} 
                                        />
                                    </swiper-slide>
                                
                                )
                            })
                        }
                    </swiper-container>
                    <StyledLine></StyledLine>
                </StyledRacesContainer>
                <ClasseModal 
                    className={classes[slide].className ?? ""}
                    description={classes[slide].description ?? ""}
                    evolution={classes[slide].evolution}
                    videoEmbed={classes[slide].videoEmbed}
                    armor={classes[slide].armor}
                    weapons={classes[slide].weapons}
                    passives={classes[slide].passive}
                    classAttributes={classes[slide].classAttributes ?? []}

                />
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