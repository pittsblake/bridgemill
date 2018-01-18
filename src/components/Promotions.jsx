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
    width: 52%;
`

const Promo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #77f9f4;
    text-align: center;
    border-radius: 15px;
    height: 200px;

    h2 {
        font-size: 72px;
        color: black;
        font-family: 'sans serif';
        margin: 0px;
    }

    p {
        font-size: 20px;
        color: black;
        margin: 0px;
    }
`

const Image = styled.img`
    max-width: 165px;
    max-height: 165px;
`

const Heart = styled.img`
    width: 148px;
    height: 135px;
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 30px;
`

class Promotions extends Component {
    render() {
        return (
            <Container className="promotions">
                <h1>Promotions</h1>
                <Body>
                    <Promo>
                        <div>
                            <Image src="https://i.imgur.com/aXOaH7E.png" alt="" />
                        </div>
                        <br />
                        <Text>
                            <h2>$25 off</h2>
                            <p> Your first Exam as a New Client</p>
                        </Text>
                    </Promo>
                    <br />
                    <Promo>
                        <div>
                            <Heart src="https://i.imgur.com/1zp8WO2.png"/>
                        </div>
                        <br/>
                        <Text>
                            <h2>$12 off</h2>
                            <p>When you buy 12 doses of HeartGuard</p>
                        </Text>
                    </Promo>
                </Body>

            </Container>
        );
    }
}

export default Promotions;