import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { register } from 'swiper/element/bundle';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const Annuncement = () =>{
    const swiperElRef = useRef(null);
    const swiperEl2Ref = useRef(null);
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

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
                },
                autoplay: {
                    enabled: true,
                    delay: 5000,
                    pauseOnMouseEnter: true,
                },
                on: {
                    autoplayTimeLeft: onAutoplayTimeLeft
                }
            };
            await Object.assign(swiperElRef.current, params);      
            swiperElRef.current.initialize();
        }

        register();
        asyncFunc();
    }, []);

    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return(
        <StyledDivContainer>
            <swiper-container 
                init="false"
                ref={swiperElRef}
                id={"mySwiper2"}
            >
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
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

    .autoplay-progress {
        position: absolute;
        right: 16px;
        bottom: 16px;
        z-index: 10;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: #5f1b1b;
    }

    .autoplay-progress svg {
        --progress: 0;
        position: absolute;
        left: 0;
        top: 0px;
        z-index: 10;
        width: 100%;
        height: 100%;
        stroke-width: 4px;
        stroke: #5f1b1b;
        fill: none;
        stroke-dashoffset: calc(125.6px * (1 - var(--progress)));
        stroke-dasharray: 125.6;
        transform: rotate(-90deg);
    }

`