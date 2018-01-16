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

const Img = styled.img`
    width: 250px;
    height: 320px;
    border-radius: 50%;
`

const SeeMore = styled.div`
    float: right;
    background-color: lightcyan;
    display: flex;
    justify-content: center;
`


class Doctors extends Component {
    render() {
        return (
            <Container>
                <h1>Our Doctors</h1>
                <Body>
                    <Img src="https://i.imgur.com/GNqlJCu.jpg"></Img>
                    <Img src="https://i.imgur.com/hIW2BPx.jpg"></Img>
                </Body>
                <SeeMore>
                    <button>See the rest of our staff</button>
                </SeeMore>
            </Container>

        );
    }
}

export default Doctors;