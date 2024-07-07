import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { register } from 'swiper/element/bundle';
import { PreRegister } from "./components/preRegister";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { OriginalImgPosition } from "../../components/navigator";

const styleIndex0 = {
    top: "400px",
    left: "50%",
    width: "300px"
}

export const Home = () => {
    const swiperElRef = useRef(null);

    useEffect(() => {
        register();

        // Object with parameters
        const params = {
            slidesPerView: 1,
            pagination: true,
            direction: "vertical",
            mousewheel: true,
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
      Object.assign(swiperElRef.current, params);
  
      // initialize swiper
      swiperElRef.current.initialize();
    }, []);

    return (
        <StyledHomeContainer>
            <swiper-container 
                init="false"
                ref={swiperElRef}
            >
                <swiper-slide></swiper-slide>
                <swiper-slide><PreRegister/></swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
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
        background: #1f1f1f;

        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
`