import React, { useState } from "react";
import styled from "styled-components";
import { InputYiridessa } from "../../../components/input";
import { ButtonYiridessa } from "../../../components/button";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const PreRegister = () => {

    const [email, setEmail] = useState("")
    const [discord, setDiscord] = useState("")
    const URL = 'https://yiridessabackend-production.up.railway.app/api/yiridessa/';

    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handleDiscord = (e) =>{
        setDiscord(e.target.value)
    }

    const handleClick = (e) =>{
        console.log(email, discord)
        sendPreRegister(email, discord)
    }

    const sendPreRegister = async (email, discord) =>{
        toast.success("Pré-registro enviado com sucesso!")
        // if(email.trim() == '' || discord.trim() =='') return
        // axios
        // .post(`${URL}preRegister`, {email: email, discord:discord}, {timeout: 6000})
        // .then(() => {toast.success("Pré-registro enviado com sucesso!")})
        // .catch(error => {
        //     if (error.error && error.error.message === 'O email já está registrado.') {
        //         toast.warning('Este email já está cadastrado.');
        //       } else {
        //         toast.error('Não foi possível enviar o pré-registro. Tente novamente mais tarde.');
        //       }
        // })
    }

    return(
        <StyledPreRegisterContainer>
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
                <StyledContainerInf>
                    <StyledH1>PRÉ-REGISTRO</StyledH1>
                    <StyledH2>Faça o pré-registro para jogar em nosso servidor e garanta recompensas especiais no dia do lançamento!</StyledH2>
                        <StyledContainerCenter>
                            <StyledInputContainer><InputYiridessa placeholder={"E-MAIL"} onChange={handleEmail}></InputYiridessa></StyledInputContainer>
                            <StyledInputContainer><InputYiridessa placeholder={"DISCORD"} onChange={handleDiscord}></InputYiridessa></StyledInputContainer>
                            <StyledButtonContainer><ButtonYiridessa text={"PRÉ-REGISTRO"} onClick={handleClick}></ButtonYiridessa></StyledButtonContainer>
                            <StyledP>Ao realizar o pré-registro, mais informações sobre o beta do servidor e as recompensas serão enviadas para o e-mail cadastrado. Fique atento para não perder nenhuma atualização importante!</StyledP>
                        </StyledContainerCenter>
                </StyledContainerInf>
            <StyledImg src="/img/rewards.png"></StyledImg>
        </StyledPreRegisterContainer>
    )
}

const StyledPreRegisterContainer = styled.div`
    height: 80vh;
    display: flex;
    color: white;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    text-align: left;
    width: 90vw;
    margin-top: 10vh;
    background: #470F0F;
    border-radius: 20px;
    box-shadow: 11px 6px 26px 0px rgba(0,0,0,0.4);
    -webkit-box-shadow: 11px 6px 26px 0px rgba(0,0,0,0.4);
    -moz-box-shadow: 11px 6px 26px 0px rgba(0,0,0,0.4);
`

const StyledContainerCenter = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 30vw;
`

const StyledContainerInf = styled.div`
    margin: 70px;
`

const StyledInputContainer = styled.div`
    width: 30vw;
    margin-top: 40px;
`

const StyledH1 = styled.h1`
    font-size: 02.3vw;
    letter-spacing: 0.3rem;
    font-weight: 500;
`

const StyledH2 = styled.h2`
    font-size: 01.5vw;
    letter-spacing: 0.2rem;
    font-weight: 300;
    width: 70vw;
`

const StyledButtonContainer = styled.div`
    width: 25vw;
    height: 07vh;
    margin-top: 30px;
`

const StyledP = styled.p`
    width: 30vw;
    text-align: center;
    font-weight: 100;
`

const StyledImg = styled.img`
    position: absolute;
    right: 05%;
    width: 50%;
    bottom: 05%;
`