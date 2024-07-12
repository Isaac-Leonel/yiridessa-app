import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { JobCard } from "./components/jobCard";
import { OriginalImgPosition } from "../../components/navigator";
import { JobModal } from "./components/jobModal";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { register } from "swiper/element";
import { Pagination, EffectCoverflow, Mousewheel } from 'swiper/modules';

const jobs = [
    {
        jobName: 'Alquimista',
        url: 'alquimista_prf.jpg',
        text: `&emsp;&emsp;<span class="first-letter">A</span> jornada pelo misticismo é irrevogável. Uma vez que se experimenta o poder esotérico nas mãos, torna-se impossível se desvincular dele. É uma sensação libertadora, desprovida de inibições. Estar em sintonia com o mundo espiritual é uma experiência comum para os alquimistas, que se destacam especialmente em compreender as dinâmicas entre as raças. Dominar a solução de desafios provenientes do mundo sobrenatural é, essencialmente, sua área de especialização.
            <br><br>
            &emsp;&emsp;<span class="first-letter">O</span>s alquimistas ganham notoriedade por suas habilidades místicas e maestria na criação de poções. São, em essência, considerados a essência do continente, trazendo consigo o conhecimento do misticismo e facilitando o acesso desses poderes aos demais habitantes. Além disso, os alquimistas assumem a responsabilidade de comercializar uma variedade de produtos resultantes de suas práticas, tais como óleos, fogaço, bases alquímicas, piche misterioso e bases para outras criações com suas Orbes da Natureza, entre outros, produzidos em seus caldeirões e bancadas.`
    },
    {
        jobName: 'Carpinteiro',
        url: 'carpinteiro_prf.png',
        text: `&emsp;&emsp;<span class="first-letter">A</span> perícia de um carpinteiro é facilmente perceptível a olho nu. Toda a beleza do continente frequentemente reflete o toque primoroso do carpinteiro, seja através de estruturas impecáveis, decorações meticulosas ou contribuições valiosas para projetos de construção. Nos reinos, a presença de um carpinteiro é essencial para a edificação de novos castelos, tornando-se uma peça fundamental na composição de qualquer organização de destaque.<br><br>
            &emsp;&emsp;<span class="first-letter">A</span> atuação dos carpinteiros não se limita à manipulação da madeira, uma vez que determinadas decorações demandam detalhes com outros materiais. A marcenaria é uma arte que os carpinteiros dominam com maestria, permitindo-lhes criar móveis e decorações de diversos estilos, sendo essa uma habilidade exclusiva de sua competência. Além disso, os carpinteiros assumem a responsabilidade pela forja de armas de longa distância, como arcos e flechas, ou bestas, contribuindo assim para o arsenal da comunidade. Adicionalmente, os carpinteiros desempenham um papel crucial ao fornecer matérias-primas, como madeiras moldadas, essenciais para a formação de peças estruturais na construção.`
    },
    {
        jobName: 'Ferreiro',
        url: 'ferreiro_prf.png',
        text: `&emsp;&emsp;<span class="first-letter">O</span> papel desempenhado pelos ferreiros é crucial para a sobrevivência no continente, especialmente diante das constantes ameaças representadas por criaturas malignas. Manipular as forjas é uma tarefa desafiadora, porém, os mestres ferreiros conseguem executá-la com maestria, contanto que disponham dos materiais adequados. Embora não se dediquem à confecção de armaduras, a habilidade dos ferreiros reside precisamente na criação de armas capazes de perfurá-las. <br><br>
            &emsp;&emsp;<span class="first-letter">O</span>s ferreiros assumem a responsabilidade pela fabricação de uma ampla variedade de armas, incluindo lâminas, martelos e lanças, excluindo, no entanto, a expertise na criação de arcos. Suas habilidades abrangem a produção de armas que refletem diferentes eras e facilitam sua comercialização entre os habitantes do continente.`
    },
    {
        jobName: 'Minerador',
        url: 'minerador_prf.jpg',
        text: `&emsp;&emsp;<span class="first-letter">S</span>ão, efetivamente, os precursores do continente. Os mineradores assumem a crucial responsabilidade de abastecer os recursos minerais essenciais para os castelos e os comerciantes. Encarregados da coleta e produção de diversos minérios, como pedras, barras, enxofre, vidro e outros, além de se dedicarem à extração e lapidação de gemas preciosas.<br><br>
            &emsp;&emsp;<span class="first-letter">C</span>ontrariando concepções equivocadas, a importância dos mineradores no continente é extraordinária, destacando-se especialmente em suas interações com ferreiros e armadureiros. Unicamente eles detêm a capacidade de manipular materiais preciosos, refinando-os para utilizações excepcionais, tais como barras de ferro, aço, metal das estrelas, obsidiana, entre outros. Além disso, a responsabilidade dos mineradores se estende à comercialização de vidro e cristais. São eles, igualmente, os encarregados da transação de prata, barras de ouro, e outros recursos afins.`
    },
    {
        jobName: 'Armadureiro',
        url: 'armadureiro_prf.jpg',
        text: `&emsp;&emsp;<span class="first-letter">O</span> papel do protetor divino é verdadeiramente essencial para a sobrevivência no continente, diante do formidável poder dos inimigos. Adequar-se devidamente torna-se imperativo, seja para enfrentar desafios com elegância ou para adotar a robustez das armaduras pesadas, característica dos guerreiros Asagarthianos. Os Mestres em Armaduras são responsáveis por tudo relacionado à proteção.
            <br><br>
            &emsp;&emsp;<span class="first-letter">A</span>lém da criação e comercialização de uma vasta gama de armaduras, os Armadureiros também dominam a confecção de armas de impacto, como os escudos. Eles têm a habilidade de produzir e vender qualquer tipo de armadura, desde as pesadas até aquelas confeccionadas com tecidos delicados, como os de seda. Vale ressaltar que, embora façam uso da seda em suas criações, os Armadureiros não têm a capacidade de produzi-la.`
    },
    {
        jobName: 'Domador',
        url: 'mestre_prf.jpg',
        text: `&emsp;&emsp;<span class="first-letter">O</span> Mestre de Bestas, também conhecido como Escravista, desempenha um papel abrangente na manipulação e subjugação de criaturas. Ele é responsável pela captura e treinamento de lacaios, empregando uma variedade de métodos, desde o ensino e cuidado carinhoso até práticas cruéis, como a tortura, para subjugar os lacaios de maneira agressiva e sanguinária.
            <br><br>
            &emsp;&emsp;<span class="first-letter">O</span>s Mestres de Bestas, além de lidar com a criação e treinamento de lacaios, são os principais comerciantes de escravos corrompidos no reino.  Além disso, os Mestres de Bestas, como especialistas no reino animal, são hábeis na criação e comércio de cavalos, seguidores ferozes e selas para animais.`
    },
    {
        jobName: 'Taverneiro',
        url: 'taverneiro_prf.jpg',
        text: `&emsp;&emsp;<span class="first-letter">E</span>ncarregados de proporcionar a alimentação e entretenimento na taverna, os taverneiros destacam-se pela habilidade em preparar as melhores receitas. Seja revitalizando seus aliados com saborosas sopas e carnes, aquecendo com bebidas vigorosas ou refrescando com sucos requintados, esses profissionais executam suas tarefas com maestria. Além disso, têm a capacidade de atrair os mais talentosos artistas para animar a taverna e asseguram que nenhum espírito negativo ou impuro encontre morada em seus recintos.
            <br><br>
            &emsp;&emsp;<span class="first-letter">C</span>omo únicos responsáveis pela coleta e comercialização de ícor e óleo, os taverneiros também detêm o monopólio das caixas de preservação, essenciais para conservar alimentos em estoque. Para além das atividades gastronômicas, os taverneiros frequentemente recebem chamados para liderar expedições, reunindo os mais habilidosos heróis e líderes natos caçadores para tal empreitada, além de poderem aumentar seu alvará com o reino, tornando sua taverna uma casa de apostas, uma casa de banho, teatros, apostas de equinos, arenas, entre outras atividades. Adicionalmente, são encarregados de divulgar eventos e novidades pelo continente.`
    },
    {
        jobName: 'Caçador',
        url: 'cacador_prf.jpg',
        text: `&emsp;&emsp;<span class="first-letter">O</span> espírito da caçada flui nas veias do verdadeiro caçador, cuja emoção é expressa nitidamente em seus olhos. Ao lidar com criaturas indomáveis, os caçadores se destacam como verdadeiros aniquiladores destas. Quando a ordem dos caçadores é proclamada, é garantido que nenhuma criatura listada permanecerá para contar sua história.
            <br><br>
            &emsp;&emsp;<span class="first-letter">O</span>s caçadores são figuras incontornáveis quando se trata de aventuras, sendo os responsáveis pelas expedições e condução dos exilados a locais perigosos, cavernas e equipes destinadas a enfrentar os monstros mais formidáveis. Detêm a exclusividade na produção de equipamentos lendários únicos, sendo peças fundamentais para as expedições das tavernas.
            <br><br>
            &emsp;&emsp;<span class="first-letter">A</span>demais, os caçadores desempenham um papel crucial na coleta e produção de seda em suas bancadas, bem como no processamento de alimentos crus destinados à venda nas tavernas. São também encarregados da produção de couro através do aproveitamento das couraças dos animais, consolidando, assim, sua posição central nas atividades de exploração e comércio do reino.`
    }
]

export const Jobs = () => {
    const swiperElRef = useRef(null);
    const [modalOpen, setModalOpen] = useState(false)
    const [slide, setSlide] = useState(0)

    useEffect(() => { 
        const asyncFunction = async () => {
            // Object with parameters
            const params = {
                direction: "vertical",
                effect: "coverflow",
                centeredSlides: true,
                slidesPerView: 6,
                mousewheel: true,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 1,
                    slideShadows: false,
                },
                pagination: false,
                keyboard: false,
                modules: [EffectCoverflow, Pagination, Mousewheel],
                on: {
                    init(s) {
                        setSlide(s.activeIndex)
                    },
                    slideChange(s) {
                        setSlide(s.activeIndex)
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

        const img = document.getElementById('yiridessaLogo')
        if (!img) return
        img.style.top = OriginalImgPosition.top
        img.style.left = OriginalImgPosition.left
        img.style.width = OriginalImgPosition.width

    }, []);

    return (
        <StyledSection>
            <StyledJobsContainer>
                <StyledArrow src="/img/arrow_scroll.svg"></StyledArrow>
                <swiper-container
                    init="false" 
                    ref={swiperElRef}
                    id={"mySwiper"}
                >
                    {
                        jobs.map((job, index) => {
                            return (
                                <swiper-slide key={index}>
                                    <JobCard 
                                        url={job.url} 
                                        jobName={job.jobName}
                                        active={slide == index} 
                                    />
                                </swiper-slide>
                               
                            )
                        })
                    }
                </swiper-container>
                <JobModal 
                    jobName={jobs[slide].jobName ?? ""} 
                    text={jobs[slide].text ?? ""} 
                    url={jobs[slide].url ?? ""} 
                    open={modalOpen}
                    onHide={() => setModalOpen(false)}
                />
            </StyledJobsContainer>
        </StyledSection>
    )
}

const StyledJobsContainer = styled.div`
    width: 100%;
    height: 80vh;
    margin-top: 15vh;
    padding: 0px 0% 0px 02%;
    display: flex;
    flex-direction: row;

    swiper-container {
        width: 280px;
    }
`

const StyledSection = styled.section`
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    display: flex;
    overflow-x: hidden;
    justify-content: center;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-shadow: inset 0px 0px 15vw 15vw rgb(0, 0, 0);
    font-family: FireFlight;
    background-image: url('/img/jobs_background.jpg');
`

const StyledArrow = styled.img`
    width: 01.5%;
    margin-bottom: 3vh;
    margin-right: 30px;
`