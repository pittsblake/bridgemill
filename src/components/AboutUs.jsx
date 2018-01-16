import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    float: right;
    width: 79%;
    height: 500px;
`

const Body = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    float: right;
    background-color: white;
    margin-left: 200px;
    margin-right: 200px;
    max-width: 100%;
    font-size: 20px   
`

class AboutUs extends Component {
    render() {
        return (
            <Container>
                <h1>About Us</h1>
                <Body>
                    <p>
                        BridgeMill Animal Hospital is a well-established, full-service, small animal veterinary hospital providing comprehensive medical, surgical and dental care. We provide a broad spectrum of diagnostic procedures through in-house testing and the use of external laboratories. We also work closely with local practices when special diagnostic procedures are required. The facility includes a well-stocked pharmacy, in-hospital surgery suite, in-house x-ray capabilities, a closely supervised hospitalization area, and indoor boarding kennels with outdoor walking areas.

                        BridgeMill Animal Hospital strives to offer sound advice along with the best veterinary care possible. This allows you to enjoy your companion for the longest time possible. Our job is not only to treat your pet when he or she isn't feeling well, but also to help you learn how to keep your best friend happy and healthy.

                    </p>
                </Body>
            </Container>
        );
    }
}

export default AboutUs;