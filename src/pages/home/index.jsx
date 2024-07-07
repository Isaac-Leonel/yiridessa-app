import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { register } from 'swiper/element/bundle';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const Home = () => {
    const swiperElRef = useRef(null);

    useEffect(() => {
        register();

        // Object with parameters
        const params = {
            pagination: true,
            direction: "vertical",
            mousewheel: true,
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
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
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
        background: #fff;

        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`