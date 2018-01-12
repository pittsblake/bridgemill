import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar'
import Footer from './Footer'
import Services from './Services'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
`
const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Parallax = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-image: url("https://i.imgur.com/hP5vKOX.jpg"); 
    /* width: 80%;  */
    min-height: 700px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`   

const Appointment = styled.div`
    margin-right: 40px;
    background-color: #8DB4E2;
    padding: 15px;
    color: white;
    border-radius: 25px;
`


class Main extends Component {
    render() {
        return (
            <Container>

                <NavBar />

                <div>
                    <Parallax>
                        
                        <Appointment href="">MAKE AN APPOINTMENT</Appointment>
                        
                    </Parallax>

                    <Services />

                    <Footer />
                </div>
            </Container>
        );
    }
}

export default Main;