import React, {useCallback, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import { OriginalImgPosition } from "../../components/navigator";
import { Pagination, EffectCoverflow, Mousewheel } from 'swiper/modules';
import { BookCard } from "./components/bookCard";
import books from './books';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { register } from "swiper/element";
import _ from "lodash";

export const Books = () => {
    const swiperElRef = useRef(null);
    const containerRef = useRef(null);
    const refExpandDiv = useRef(null)
    const [slide, setSlide] = useState(0)
    const [expanded, setExpanded] = useState(0)

    useEffect(() => { 
        const asyncFunction = async () => {
            // Object with parameters
            const params = {
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: "auto",
                mousewheel: true,
                coverflowEffect: {
                    rotate: 20,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                },
                pagination: false,
                keyboard: false,
                modules: [EffectCoverflow, Pagination, Mousewheel],
                on: {
                    init(s) {
                        setSlide(s.activeIndex)
                        handlePosition(s.slides[s.activeIndex])
                    },
                    slideChange(s) {
                        setSlide(s.activeIndex)
                    },
                    slideChangeTransitionEnd (s) {
                        handlePosition(s.slides[s.activeIndex])
                    },
                    slideChangeTransitionStart (s) {
                        if (refExpandDiv.current) refExpandDiv.current.style.zIndex = 0;
                    },
                    beforeSlideChangeStart (s) {
                        if (refExpandDiv.current) refExpandDiv.current.style.zIndex = 0;
                    }
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

    const handlePosition = (slide) => {
        if (!refExpandDiv.current) return;

        const rect = slide.getBoundingClientRect()

        refExpandDiv.current.style.top = `${rect.top}px`
        refExpandDiv.current.style.left = `${rect.left}px`
        refExpandDiv.current.style.width = `${rect.width}px`
        refExpandDiv.current.style.height = `${rect.height}px`
    }

    useEffect(() => {
        if (!swiperElRef || !swiperElRef.current || !swiperElRef.current.swiper) return;
        handlePosition(swiperElRef.current.swiper.slides[slide])
    }, [swiperElRef, refExpandDiv])

    const expandDiv = (text, divRef) => {
        if (!refExpandDiv.current) return;

        setExpanded(true)
        const rect = containerRef.current.getBoundingClientRect()
    
        _.debounce(() => {
            refExpandDiv.current.style.opacity = 1;
            refExpandDiv.current.style.zIndex = 99;
            refExpandDiv.current.children[1].children[0].innerHTML = `<div>${text}</div>`;
            refExpandDiv.current.style.width = `${rect.width}px`
            refExpandDiv.current.style.height = `${rect.height}px`
            refExpandDiv.current.style.top = `${rect.top}px`
            refExpandDiv.current.style.left = `${rect.left}px`
            refExpandDiv.current.style.textAlign = "justify";
            refExpandDiv.current.divRef = divRef
            refExpandDiv.current.focus()
        }, 100)()
    }

    const handleClose = useCallback((e) => {
        handlePosition(swiperElRef.current.swiper.slides[slide])
        setExpanded(false)
        
        _.debounce(() => {
            refExpandDiv.current.style.zIndex = 0;
            refExpandDiv.current.style.opacity = 0;
            refExpandDiv.current.divRef.current.firstChild.style.transform = ""
            refExpandDiv.current.style.textAlign = "left";
        }, 700)()
    }, [slide])

    const handleKeyDown = (e) => {
        if (e.key == "Escape") {
            handleClose()
        }
    }

    return (
        <StyledBooksContainer>
            <div className="expandDiv" ref={refExpandDiv} onKeyDown={handleKeyDown} tabIndex="0">
                <div className="backgroundPaper"></div>
                <div className="text">
                    <div></div>
                    {
                        expanded &&
                        <div className="closeButton">
                            <i className="fas fa-times" onClick={handleClose}></i>
                        </div>
                    }
                </div>
            </div>
            <StyledGIF>
                <BlurOverlay />
                <StyledContainer ref={containerRef}>
                    <swiper-container 
                        init="false" 
                        ref={swiperElRef}
                        id={"mySwiper"}
                    >
                        {
                            books.map((book, index) => {
                                return (
                                    <swiper-slide key={index}>
                                        <BookCard 
                                            imageName={book.img} 
                                            active={slide == index} 
                                            text={book.text ?? ""} 
                                            title={book.title ?? ""}
                                            callExpandDiv={expandDiv}
                                        />
                                    </swiper-slide>
                                )
                            })
                        }
                    </swiper-container>
                </StyledContainer>
            </StyledGIF>
            <svg>
                <filter id="wavy2">
                    <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1" />
                    <feDisplacementMap in="SourceGraphic" scale="20" />
                </filter>
            </svg>
        </StyledBooksContainer>
       
    )
}

const StyledBooksContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: #110000;
    color: white;
    overflow: hidden;
    
    .backgroundPaper {
        height: 99%;
        width: 99%;
        left: 0;
        top: 0;
        position: absolute;
        box-shadow: 2px 3px 20px transparent, 0 0 125px #8f5922 inset;
        background: #fffef0;
        filter: url(#wavy2);
        background-image: url(data:image/png;base64,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);
    }

    .text {
        position: relative;
        overflow: auto;
        height: 100%;
        padding: 20px 25px 20px 20px;
        color: #5f1b1b;

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
    }

    .first-letter {
        line-height: normal;
        font-family: FireFlight;
        font-size: 30px;
    }

    .expandDiv {
        padding: 20px;
        border-radius: 20px;
        position: fixed;
        left: 50%;
        background: transparent;
        overflow: hidden;
        opacity: 0;

        -webkit-transition: width 1s, height 1s, margin 1s, left 1s, top 1s;
        -moz-transition: width 1s, height 1s, margin 1s, left 1s, top 1s;
        -ms-transition: width 1s, height 1s, margin 1s, left 1s, top 1s;
        transition: width 1s, height 1s, margin 1s, left 1s, top 1s;

        &:focus-visible {
            outline: none;
            box-shadow: none;
        }
    }
`

const StyledGIF = styled.div`
    background-image: url('/img/livros_background.jpg');
    box-shadow: inset 0px 0px 10vw 5vw rgb(0, 0, 0);
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
    backdrop-filter: blur(03px); /* Ajuste o valor do blur conforme necessário */
    -webkit-backdrop-filter: blur(03px); /* Compatibilidade com Safari */
`;

const StyledContainer = styled.div`
    height: 80vh;
    width: 90vw;
    background: rgba(71, 15, 15, 0); /* Fundo semi-transparente */
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 1s;

    #mySwiper {
        width: 100%;
        height: 100%;
        padding: 50px 20px 50px 20px;
    }

    swiper-slide {
        background-position: center;
        background-size: cover;
        width: 300px;
        height: 470px;
    }

    swiper-container {
        height: unset !important;
    }
`