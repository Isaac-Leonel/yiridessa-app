import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { register } from 'swiper/element/bundle';
import { PreRegister } from "./components/preRegister";
import { Annuncement } from "./components/announcement";
import { HomeContainer } from "./components/home";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { OriginalImgPosition } from "../../components/navigator";
import { ToastContainer } from "react-toastify";
import { VideoContainer } from "./components/videoContainer";

const styleIndex0 = {
    top: "12vw",
    left: "5vw",
    width: "400px"
}

export const Home = () => {
    const swiperElRef = useRef(null);

    useEffect(() => {
        const asyncFunction = async () => {
            // Object with parameters
            const params = {
                slidesPerView: 1,
                pagination: false,
                scrollbar: {
                    enabled: true,
                    draggable: true,
                    clickable: false
                },
                noSwiping: false,
                direction: "vertical",
                mousewheel: true,
                keyboard: false,
                watchOverflow: false,
                allowTouchMove: false,
                paginationClickable: false,
                on: {
                    init(s) {
                        const img = document.getElementById('yiridessaLogo')
                        img.style.top = styleIndex0.top
                        img.style.left = styleIndex0.left
                        img.style.width = styleIndex0.width
                    },
                    slideChange(s) {
                        const img = document.getElementById('yiridessaLogo')
                        if (!img) return;

                        if (s.activeIndex == 0) {
                            img.style.top = styleIndex0.top
                            img.style.left = styleIndex0.left
                            img.style.width = styleIndex0.width
                        } else {
                            img.style.top = OriginalImgPosition.top
                            img.style.left = OriginalImgPosition.left
                            img.style.width = OriginalImgPosition.width
                        }
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
    }, []);

    return (
        <StyledHomeContainer>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <swiper-container 
                init="false"
                ref={swiperElRef}
            >
                <swiper-slide>
                    <StyledGIF>
                        <BlurOverlay />
                        <HomeContainer/>
                    </StyledGIF>
                </swiper-slide>
                <swiper-slide>
                    <StyledGIF>
                        <BlurOverlay />
                        <PreRegister/>
                    </StyledGIF>
                </swiper-slide>
                <swiper-slide>
                    <StyledGIF>
                        <BlurOverlay />
                        <VideoContainer/>
                    </StyledGIF>
                </swiper-slide>
                <swiper-slide>
                    <StyledGIF>
                        <BlurOverlay />
                        <Annuncement/>
                    </StyledGIF>
                </swiper-slide>
            </swiper-container>
        </StyledHomeContainer>
    )
}

const StyledHomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: black;
    position: relative;
    overflow: hidden;

    swiper-container {
        width: 100%;
        height: 100%;
    }

    swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #110000;

        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
`

const StyledGIF = styled.div`
    background-image: url('/gif/background_yiri.gif');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;
`

const BlurOverlay = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(10px); /* Ajuste o valor do blur conforme necessário */
    -webkit-backdrop-filter: blur(10px); /* Compatibilidade com Safari */
`;
