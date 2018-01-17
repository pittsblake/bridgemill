import React, { Component } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: lightcyan;
    align-items: center;
    float: right;
    width: 79%;
    height: 350px;
`

class AllServices extends Component {
    render() {
        return (
            <Container>
                <ul>
                    <li>Diagnostic and Therapeutic Services</li>
                    <li>Surgical Services</li>
                    <li>Anesthesia</li>
                    <li>Internal Medicine</li>
                    <li>Radiology</li>
                    <li>Electrocardiography Services</li>
                    <li>Microchip</li>
                    <li>Pharmacy</li>
                    <li>Laser Therapy</li>
                    <li>Lab Work</li>
                    <li>Behavior Counseling</li>
                    <li>Dietary Counseling</li>
                </ul>
                
            </Container>
        );
    }
}

export default AllServices;