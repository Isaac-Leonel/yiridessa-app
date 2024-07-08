import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import { OriginalImgPosition } from "../../components/navigator";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import { BookCard } from "./components/bookCard";
import books from './books';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { register } from "swiper/element";

export const Books = () => {
    const swiperElRef = useRef(null);
    const [slide, setSlide] = useState(0)

    useEffect(() => {
        
        const asyncFunction = async () => {
            // Object with parameters
            const params = {
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: "auto",
                coverflowEffect: {
                    rotate: 20,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                },
                pagination: true,
                modules: [EffectCoverflow, Pagination],
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
        <StyledBooksContainer>
            <StyledGIF>
                <BlurOverlay />
                <StyledContainer>
                    <swiper-container 
                        init="false" 
                        ref={swiperElRef}
                        id={"mySwiper"}
                    >
                        {
                            books.map((book, index) => {
                                return (
                                    <swiper-slide key={index}><BookCard imageName={book.img} active={slide == index}/></swiper-slide>
                                )
                            })
                        }
                    </swiper-container>
                </StyledContainer>
            </StyledGIF>
        </StyledBooksContainer>
       
    )
}

const StyledBooksContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: #110000;
`

const StyledGIF = styled.div`
    background-image: url('/gif/background_yiri.gif');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BlurOverlay = styled.div`
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(20px); /* Ajuste o valor do blur conforme necessário */
    -webkit-backdrop-filter: blur(10px); /* Compatibilidade com Safari */
`;

const StyledContainer = styled.div`
    height: 60vh;
    width: 90vw;
    background: rgba(71, 15, 15, 0.801); /* Fundo semi-transparente */
    border-radius: 20px;
    box-shadow: 11px 6px 26px 0px rgba(0,0,0,0.4);
    -webkit-box-shadow: 11px 6px 26px 0px rgba(0,0,0,0.4);
    -moz-box-shadow: 11px 6px 26px 0px rgba(0,0,0,0.4);
    backdrop-filter: blur(10px); /* Desfoque de fundo */
    -webkit-backdrop-filter: blur(10px); /* Desfoque de fundo para Safari */

    #mySwiper {
        width: 100%;
        height: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    swiper-slide {
        background-position: center;
        background-size: cover;
        width: 300px;
        height: 100%;
    }
`