import React, { Component } from 'react';
import styled from 'styled-components';
import AllServices from './AllServices'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: lightcyan;
    align-items: center;
    float: right;
    width: 79%;
    height: 550px;

    
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

const Button = styled.button`
    border: none;
    background-color: lightcyan;
    border-bottom: thin solid;
    &&:hover {
        cursor: pointer;
        font-size: 14px;
    }
`

class Services extends Component {

    state = {
        showMore: false,
        hideButton: false,
    }

    handleClick = () => {
        this.setState({
            showMore: !this.state.showMore,
            hideButton: !this.state.hideButton
        })
    }

    render() {
        return (
            <div>
                <Container className="services">
                    <h1>Services</h1> <section className="Services" ref={(section) => { this.Services = section; }}></section>
                    <Body>
                        <CenterServices>
                            <Img src="https://i.imgur.com/zwjUIvu.png" alt="" />
                            <p>Boarding</p>
                        </CenterServices>
                        <CenterServices>
                            <Img src="https://i.imgur.com/wEnCfHw.png" alt="" />
                            <p>Dentistry</p>
                        </CenterServices>
                        <CenterServices>
                            <Img src="https://i.imgur.com/xgwZwbN.png" alt="" />
                            <p>Surgery</p>
                        </CenterServices>

                    </Body>
                    {
                        this.state.hideButton ? <Button onClick={this.handleClick}>Hide</Button> :
                            <SeeMore>
                                <Button onClick={this.handleClick}>See more</Button>

                            </SeeMore>
                    }

                </Container>
                {
                    this.state.showMore ? <AllServices /> : null
                }
            </div>
        );
    }
}

export default Services;