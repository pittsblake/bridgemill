import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar'
import Footer from './Footer'
import Services from './Services'
import Modal from 'react-modal'
import AppointmentForm from './AppointmentForm'
import Doctors from './Doctors'
import AboutUs from './AboutUs'


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

const Appointment = styled.button`
    margin-right: 40px;
    background-color: #8DB4E2;
    padding: 25px;
    color: white;
    border-radius: 25px;
    font-size: 24px;
    &&:hover {
        cursor: pointer;
        font-size: 25px;
        padding:26px;
    }
`


class Main extends Component {

    state = {
        isOpen: false,
    }


    openModal = () => {
        this.setState({
            isOpen: true,
        })
    }

    closeModal = () => {
        this.setState({
            isOpen: false
        })
    }

    render() {
        return (
            <Container>

                <NavBar />

                <div>
                    <Parallax>
                        
                        <Appointment onClick={this.openModal}>MAKE AN APPOINTMENT</Appointment>

                        {
                            this.state.isOpen ? <AppointmentForm isOpen={this.state.isOpen} openModal={this.openModal} closeModal={this.closeModal}/> : null
                        }
                        
                    </Parallax>

                    <Services />
                    <AboutUs />
                    <Doctors />

                    <Footer />
                </div>
            </Container>
        );
    }
}

export default Main;