import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { register } from 'swiper/element/bundle';
import { AnnouncementComponent } from "./announcementComponent";
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const banners = [
    {
        imageName: "banner1.png",
        title: "Yiridessa",
        description: "Liberte-se das amarras da realidade e mergulhe em um universo de magia, combate e intriga. No Yiridessa Roleplay, a fantasia ganha vida de maneira inigualável, e cada escolha que você fizer moldará o destino do seu personagem.",
        click: true,
        link: "https://www.youtube.com/channel/UCATS-dtbr1ODcyOXxNN5N-Q",
    },
    {
        imageName: "banner2.png",
        title: "Livros",
        description: "O primeiro exemplar da Biblioteca Yiridessa já está disponível! Venha conferir e prepare-se para uma emocionante aventura.",
        click: true,
        route: "/books"
    },
    {
        imageName: "banner3.png",
        title: "Profissoes",
        description: "Descubra os diversos caminhos que você pode seguir no mundo de Yiridessa. Prepare-se para vender, comprar e comercializar produtos únicos e jamais vistos.",
        click: true,
        route: "/jobs"
    },
    {
        imageName: "banner4.png",
        title: "Regras",
        description: "Liberte-se das amarras da realidade e mergulhe em um universo de magia, combate e intriga. No Yiridessa Roleplay, a fantasia ganha vida de maneira inigualável, e cada escolha que você fizer moldará o destino do seu personagem.",
        click: true,
        link: "https://docs.google.com/document/d/1A4ojlRQrGWAfnfwq84Bv6AGVr5Ne1g5na9hX0MHhs1c/preview"
    },
]

export const Annuncement = () =>{
    const swiperElRef = useRef(null);
    const swiperEl2Ref = useRef(null);
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const navigate = useNavigate();

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
                {
                    banners.reverse().map((banner, index) => {
                        return (
                            <swiper-slide key={index}>
                                <AnnouncementComponent 
                                    onClick={
                                        banner.click ? 
                                        banner.link ? 
                                        () => {
                                            window.open(banner.link, "_blank")
                                        } : 
                                        () => {
                                            navigate(banner.route)
                                        }
                                        : null
                                    }
                                    imageName={banner.imageName} 
                                    title={banner.title}
                                    description={banner.description}
                                />
                            </swiper-slide>
                        )
                    })
                }
           
            </swiper-container>
            <swiper-container 
                init="false"
                ref={swiperEl2Ref}
                id={"mySwiper"}
            >
                {
                    banners.map((banner, index) => {
                        return (
                            <swiper-slide key={index}> <img src={`/img/${banner.imageName}`} /></swiper-slide>
                        )
                    })
                }
            
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
        background-color: #110000;

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
        color: #ffffff;
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
        stroke: #ffffff;
        fill: none;
        stroke-dashoffset: calc(125.6px * (1 - var(--progress)));
        stroke-dasharray: 125.6;
        transform: rotate(-90deg);
    }

`

const StyledContainerImg = styled.div`

`