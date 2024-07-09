import React from 'react'
import styled from 'styled-components'

export const VideoContainer = () => {
    return (
        <StyledVideoContainer>
            <StyledText>
                Desvende segredos ancestrais em um reino onde lendas são <br/>forjadas!
            </StyledText>
            <StyledVideoDiv>
                <div className='video'>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/h-uocRRgas4?si=73lyOiv8_o_d2UwA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <svg width="1134" height="780" viewBox="0 0 1134 780" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_i_86_6)">
                        <path d="M1098.09 73.126C1092.87 47.7689 1077.02 25.8719 1054.56 12.9962V12.9962C1028.34 -2.03874 996.414 -3.29911 969.085 9.62125L924.048 30.9126C888.251 47.8355 847.942 52.7271 809.136 44.857L693.15 21.3337C654.816 13.5591 615.202 14.7786 577.419 24.8965L467.727 54.2705C431.879 63.8701 394.359 65.4658 357.825 58.9446L110.236 14.7499C91.148 11.3428 71.4735 13.9459 53.9288 22.1998V22.1998C11.573 42.1261 -9.55737 90.2726 4.45162 134.936L43.3956 259.097C56.9079 302.177 58.1374 348.172 46.9458 391.913L7.41064 546.429C-4.53778 593.127 4.66057 642.717 32.5618 682.024V682.024C68.5745 732.758 130.192 758.748 191.661 749.132L390.541 718.018C420.902 713.268 451.874 714.089 481.941 720.441L735.189 773.943C769.701 781.234 805.355 781.228 839.864 773.925L923.616 756.201C1044.77 730.563 1126 616.293 1110.41 493.445V493.445C1107.5 470.468 1107.95 447.189 1111.76 424.344L1130.25 313.494C1135.37 282.775 1134.78 251.375 1128.5 220.871L1098.09 73.126Z" fill="#2F0D0D"/>
                    </g>
                    <path d="M1128.01 220.972L1097.6 73.2268C1092.41 48.0101 1076.65 26.2344 1054.31 13.43C1028.23 -1.52364 996.48 -2.77719 969.298 10.0733L924.262 31.3646C888.368 48.3337 847.948 53.2385 809.037 45.347L693.051 21.8237C654.793 14.0645 615.256 15.2816 577.548 25.3795L467.856 54.7534C431.938 64.372 394.343 65.9709 357.737 59.4368L110.148 15.2421C91.1621 11.8532 71.5927 14.4424 54.1417 22.6522C12.012 42.4721 -9.00549 90.3615 4.92871 134.786L43.8727 258.948C57.4128 302.117 58.6449 348.206 47.4302 392.037L7.89502 546.553C-4.01697 593.109 5.15332 642.548 32.9696 681.734C68.8724 732.314 130.302 758.225 191.583 748.638L390.463 717.524C420.884 712.764 451.918 713.587 482.044 719.952L735.293 773.453C769.736 780.73 805.32 780.724 839.761 773.436L923.512 755.712C1044.41 730.128 1125.47 616.098 1109.92 493.507C1107 470.483 1107.45 447.155 1111.27 424.261L1129.76 313.412C1134.87 282.754 1134.28 251.415 1128.01 220.972Z" stroke="#FF2626"/>
                    <defs>
                        <filter id="filter0_i_86_6" x="0.14563" y="0.753418" width="1151.55" height="787.653" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="18" dy="9"/>
                        <feGaussianBlur stdDeviation="15.3"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_86_6"/>
                        </filter>
                    </defs>
                </svg>
            </StyledVideoDiv>
        </StyledVideoContainer>
    )
}

const StyledVideoContainer = styled.div`
    display: flex;
    height: 80vh;
    width: 90vw;

    @media screen and (min-width: 600px) {
        padding-top: 20px;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }

    @media screen and (min-width: 768px) {
        padding-top: 20px;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
`

const StyledText = styled.div`
    display: flex;
    align-items: center;
    width: 35%;
    color: white;
    font-weight: lighter;
    font-size: 35px;
    text-align: left;
    line-height: 60px;
    padding-left: 20px;
    
    @media screen and (min-width: 600px) {
        width: 100%;
    }

    @media screen and (min-width: 768px) {
        width: 100%;
    }
`

const StyledVideoDiv = styled.div`
    width: 65%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 600px) {
        width: 100%;
        height: 100%;
    }

    @media screen and (min-width: 768px) {
        width: 100%;
        height: 100%;
    }

    svg {
        width: 100%;
        height: 100%;
        min-width: 700px;
        left: 0;
        position: absolute;
        top: 0;
        z-index: 0;
    }

    .video {
        height: 50%;
        width: 85%;
        min-width: 560px;
        z-index: 1;
    }
`