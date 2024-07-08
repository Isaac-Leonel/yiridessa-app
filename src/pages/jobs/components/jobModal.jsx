import React from 'react'
import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal';

export const JobModal = ({ url, jobName, text, open, onHide }) => {
    return (
        <Modal
            style={{
                color: "#bbb"
            }}
            show={open}
            onHide={onHide}
            size="lg"
            centered
            animation={true}
        >
            <StyledModalHeader>
                <Modal.Title style={{ fontSize: "35px" }}>
                    {jobName}
                </Modal.Title>
                <i class="fas fa-times" onClick={onHide}></i>
            </StyledModalHeader>
            <Modal.Body style={{ backgroundColor: "#1f1f1f" }}>
                <BodyDiv>
                    <StyledImg url={url} />
                    <StyledTextDiv dangerouslySetInnerHTML={{__html: text}} />
                </BodyDiv>
            </Modal.Body>
        </Modal>
    )
}

const StyledModalHeader = styled(Modal.Header)`
    background-color: #1f1f1f;
    display: flex;
    justify-content: space-between;
    font-family: FireFlight;

    i {
        cursor: pointer;
        font-size: larger;

        &:hover {
            color: #cecdcd;
        }
    }
`

const BodyDiv = styled.div`
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: .9rem;

    .first-letter {
        line-height: normal;
        font-family: FireFlight;
        font-size: 30px;
    }
`

const StyledTextDiv = styled.div`
    text-align: justify;
`

const StyledImg = styled.div`
    min-width: 250px;
    height: 400px;
    margin: 30px;
    border: none;

    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props => '/img/'+props.url});
`