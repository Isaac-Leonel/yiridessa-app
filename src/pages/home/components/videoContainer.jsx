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
                    <div>
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/h-uocRRgas4?si=73lyOiv8_o_d2UwA" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                        />
                    </div>
                </div>
                <svg height="0px" width="0px" fill="none" >
                    <defs>
                        <clipPath id="svgPath">
                            <g filter="url(#filter0_i_86_6)">
                                <path d="M703.904 46.876A57.89 57.89 0 0 0 676 8.331a59.25 59.25 0 0 0 -54.792 -2.163l-28.87 13.649a117.63 117.63 0 0 1 -73.662 8.938l-74.349 -15.079a162.2 162.2 0 0 0 -74.187 2.284l-70.315 18.828a162.2 162.2 0 0 1 -70.45 2.996L70.664 9.455a60 60 0 0 0 -36.094 4.776C7.419 27.004 -6.126 57.867 2.854 86.497l24.964 79.59a155.6 155.6 0 0 1 2.276 85.138L4.75 350.275a105.14 105.14 0 0 0 16.122 86.92c23.086 32.522 62.584 49.182 101.987 43.018l127.487 -19.945a162.2 162.2 0 0 1 58.59 1.553l162.338 34.296a162.2 162.2 0 0 0 67.099 -0.012l53.687 -11.362c77.664 -16.433 129.735 -89.683 119.741 -168.432a152.7 152.7 0 0 1 0.865 -44.296l11.853 -71.058a162.2 162.2 0 0 0 -1.122 -59.374z" fill="#2F0D0D"/>
                            </g>
                            <path d="M723.083 141.649 703.59 46.94a57.55 57.55 0 0 0 -27.75 -38.331 58.93 58.93 0 0 0 -54.495 -2.152l-28.869 13.649a117.95 117.95 0 0 1 -73.862 8.963L444.263 13.99a161.86 161.86 0 0 0 -74.04 2.279l-70.315 18.83a162.5 162.5 0 0 1 -70.589 3.003L70.608 9.771a59.7 59.7 0 0 0 -35.901 4.75C7.701 27.226 -5.772 57.925 3.16 86.402l24.964 79.591a155.9 155.9 0 0 1 2.28 85.313L5.061 350.354a104.81 104.81 0 0 0 16.074 86.655c23.014 32.423 62.392 49.033 101.675 42.887l127.487 -19.945a162.5 162.5 0 0 1 58.706 1.556l162.339 34.296a161.9 161.9 0 0 0 66.967 -0.011l53.687 -11.362c77.499 -16.4 129.46 -89.496 119.492 -168.08a152.9 152.9 0 0 1 0.865 -44.388l11.853 -71.057a161.9 161.9 0 0 0 -1.122 -59.256Z" stroke="#FF2626" stroke-width="0.6410255731922399"/>
                        </clipPath>
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

    @media only screen and (max-width: 600px) {
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
    
    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`

const StyledVideoDiv = styled.div`
    width: 65%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    @media only screen and (max-width: 600px) {
        width: 100%;
        height: 100%;
    }

    .video {
        min-width: 560px;
        min-height: 500px;
        z-index: 1;
        top: 70%;
        left: 64%;
        width: 100%;
        height: 100%;
        transform: translate(-50%, -50%);
        clip-path: url(#svgPath);
        position: absolute;

        @media only screen and (max-width: 600px) {
            width: 65%;
            min-width: 0px;
        }

        > div {
            position: absolute;
            top: -10px;
            min-height: 500px;
            min-width: 760px;
            height: 500px; 
            width: 760px;
        }
    }
`