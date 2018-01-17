import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffe0e0;
    align-items: center;
    float: right;
    width: 79%;
    height: 600px;
`

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    float: right;
    background-color:  #ffe0e0;
    /* margin-left: 200px;
    margin-right: 200px; */
    width: 70%;
`

const Promo = styled.div`
    width: 100%;
    background-color: #77f9f4;
    text-align: center;
    border-radius: 15px;
    height: 200px;

    h2 {
        font-size: 42px;
        color: black;
        font-family: 'sans serif'
    }

    p {
        font-size: 20px;
        color: black
    }
`

class Promotions extends Component {
    render() {
        return (
            <Container className="promotions">
                <h1>Promotions</h1>
                <Body>
                    <Promo>
                        <h2>$25 off</h2>
                        <p> Your first Exam as a New Client</p>
                    </Promo>
                    <br/>
                    <Promo>
                        <h2>$12 off</h2>
                        <p>When you buy 12 doses of HeartGuard</p>
                    </Promo>
                </Body>

            </Container>
        );
    }
}

export default Promotions;