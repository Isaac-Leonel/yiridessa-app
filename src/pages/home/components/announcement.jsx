import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



export const Annuncement = () =>{
    const swipperRef = useRef(null);
    return(
    <StyledDivContainer>
            <swiper-container 
                init="false"
                ref={swipperRef}
                loop={true}
            >
                <swiper-slide> <img src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide>
                <swiper-slide> TESTE2</swiper-slide>
                <swiper-slide> TESTE3</swiper-slide>
            </swiper-container>
    </StyledDivContainer>
    )
}


const StyledDivContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: #585858;

    swiper-container {
        width: 80%;
        height: 80%;
    }

    swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #1f1f1f;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

`