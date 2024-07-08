import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { register } from 'swiper/element/bundle';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const Annuncement = () =>{
    const swiperElRef = useRef(null);
    const swiperEl2Ref = useRef(null);

    useEffect(() => {
        const asyncFunc = async () =>  {
            const params2 = {
                slidesPerView: 4,
                navigation: false,
                mousewheel: false,
                freeMode: true,
                spaceBetween: 10,
                watchSlidesProgress: true,
                loop: true,
                grabCursor: true,
            };
            await Object.assign(swiperEl2Ref.current, params2);
            swiperEl2Ref.current.initialize();
    
            const params = {
                slidesPerView: 1,
                navigation: true,
                mousewheel: false,
                spaceBetween: 10,
                loop: true,
                thumbs: {
                    swiper: swiperEl2Ref.current
                }
            };
            await Object.assign(swiperElRef.current, params);      
            swiperElRef.current.initialize();
        }

        register();
        asyncFunc();
    }, []);

    return(
        <StyledDivContainer>
            <swiper-container 
                init="false"
                ref={swiperElRef}
                id={"mySwiper2"}
            >
                <swiper-slide> <img src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide>
                <swiper-slide> <img src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide>
                <swiper-slide> <img src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide>
                <swiper-slide> <img src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide>
            </swiper-container>
            <swiper-container 
                init="false"
                ref={swiperEl2Ref}
                id={"mySwiper"}
            >
                <swiper-slide> <img src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide>
                <swiper-slide> <img src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide>
                <swiper-slide> <img src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide>
                <swiper-slide> <img src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide>
            </swiper-container>
        </StyledDivContainer>
    )
}


const StyledDivContainer = styled.div`
    width: 100vw;
    height: 80vh;
    width: 90vw;
    margin-top: 10vh;
    background: transparent;
    overflow: hidden;
    border-radius: 20px;

    swiper-slide {
        background-size: cover;
        background-position: center;
    }

    #mySwiper2 {
        height: 80%;
        width: 100%;
    }

    #mySwiper {
        height: 20%;
        box-sizing: border-box;
        padding: 10px 0 0px 0;

        swiper-slide {
            width: 25%;
            height: 100%;
            opacity: 0.4;
        }
    }

    #mySwiper .swiper-slide-thumb-active {
        opacity: 1;
    }

    swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`