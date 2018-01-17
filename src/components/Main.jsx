import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar'
import Footer from './Footer'
import Services from './Services'
import Modal from 'react-modal'
//import AppointmentForm from './AppointmentForm'
import Doctors from './Doctors'
import AboutUs from './AboutUs'
import Promotions from './Promotions'


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
    align-items: flex-start;
    background-image: url("https://i.imgur.com/hP5vKOX.jpg"); 
    min-height: 700px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const Appointment = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    background-color: #77f9f4;
    padding: 25px;
    color: white;
    max-height: 200px;
    border-radius: 15px 0px 0px 15px;
    font-size: 24px;
`

const CallUs = styled.div`
    padding-bottom: 30px;
    color: black;
    font-family: 'Playfair Display', serif;
`

const Phone = styled.div`
    font-size: 32px;
    color: black;
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
            <Container className="home">

                <NavBar />

                <div>
                    <Parallax>

                        <Appointment>
                            <CallUs>
                                Call Us To Schedule An Appointment:
                            </CallUs>
                            <Phone>
                                770.479.2200
                            </Phone>
                        </Appointment>

                        {/* {
                            this.state.isOpen ? <AppointmentForm isOpen={this.state.isOpen} openModal={this.openModal} closeModal={this.closeModal}/> : null
                        } */}

                    </Parallax>

                    <Services />
                    <AboutUs />
                    <Doctors />
                    <Promotions />
                    <Footer />
                </div>
            </Container>
        );
    }
}

export default Main;