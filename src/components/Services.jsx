import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: lightcyan;
    align-items: center;
    float: right;
    width: 79%;
    height: 500px;
`

const Body = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    float: right;
    background-color: lightcyan;
    width: 100%;
    height: 375px;    
`

const CenterServices = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

const Img = styled.img`
    max-width: 250px;
    max-height: 250px;
`

const SeeMore = styled.div`
    float: right;
    background-color: lightcyan;
    display: flex;
    justify-content: center;
`

class Services extends Component {
    render() {
        return (
            <Container>
                <h1>Services</h1>
                <Body>
                    <CenterServices>
                        <Img src="https://i.imgur.com/wEnCfHw.png" alt="" />
                        <p>Dentistry</p>
                    </CenterServices>
                    <CenterServices>
                        <Img src="https://i.imgur.com/zwjUIvu.png" alt="" />
                        <p>Boarding</p>
                    </CenterServices>
                    <CenterServices>
                        <Img src="https://i.imgur.com/xgwZwbN.png" alt="" />
                        <p>Surgery</p>
                    </CenterServices>

                </Body>
                <SeeMore>
                    <a href="">See more</a>
                </SeeMore>
            </Container>
        );
    }
}

export default Services;