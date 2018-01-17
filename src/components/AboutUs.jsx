import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffe0e0;
    align-items: center;
    float: right;
    width: 79%;
    height: 550px;
`

const Body = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    float: right;
    background-color: #ffe0e0;
    /* margin-left: 200px;
    margin-right: 200px; */
    max-width: 100%;

    img {
        margin-left: 90px;
        max-width: 400px;
        max-height: 400px;
    }
`
const Paragraph = styled.div`
    margin: 0px 40px 0px 100px;
    p {
        background-color: #ffe0e0;
        font-size: 18px;
        margin-top: 0px;
    }
`


class AboutUs extends Component {
    render() {
        return (
            <Container className="aboutUs">
                <h1>About Us</h1>
                <Body>
                    <div>
                        <img src="https://i.imgur.com/xziCgY6.jpg" alt="" />
                    </div>
                    <Paragraph>
                        <p>
                            BridgeMill Animal Hospital is a well-established, full-service, small animal veterinary hospital providing comprehensive medical, surgical and dental care. We provide a broad spectrum of diagnostic procedures through in-house testing and the use of external laboratories. We also work closely with local practices when special diagnostic procedures are required. The facility includes a well-stocked pharmacy, in-hospital surgery suite, in-house x-ray capabilities, a closely supervised hospitalization area, and indoor boarding kennels with outdoor walking areas.

                        BridgeMill Animal Hospital strives to offer sound advice along with the best veterinary care possible. This allows you to enjoy your companion for the longest time possible. Our job is not only to treat your pet when he or she isn't feeling well, but also to help you learn how to keep your best friend happy and healthy.

                        </p>
                    </Paragraph>
                </Body>
            </Container>
        );
    }
}

export default AboutUs;