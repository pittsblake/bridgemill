import React, { Component } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    background-color: lightcyan;
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    float: right;
    height: 300px;
    width: 79%;
    
`
const IconContainer = styled.div`
    display: flex;
    justify-content: space-around;
    
`

const Icon = styled.h1`
    font-size: 52px;
    padding-right: 30px;
    margin: 10px 0px 0px 0px;
    border-bottom: none;
    background-color: lightcyan;
`

const Hours = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 50px;
    background-color: lightcyan;
`
const Address = styled.div`
    margin-left: 50px;
    background-color: lightcyan;
`

class Footer extends Component {
    render() {
        return (
            <Container className='footer'>
                <Address>
                    <p>
                        BridgeMill Animal Hospital
                        <br/>
                        770.479.2200
                        <br/>
                        9560 Bells Ferry Road 
                        <br/>
                        Canton, GA 30114 
                    </p>
                </Address>
                <Hours>
                    <IconContainer>
                        <a href="https://www.facebook.com/bridgemillanimalhospital/" target="_blank"><Icon><i class="fa fa-facebook-official" aria-hidden="true"></i></Icon></a>
                        <a href="https://www.yelp.com/biz/bridgemill-animal-hospital-canton" target="_blank"><Icon><i class="fa fa-yelp" aria-hidden="true"></i></Icon></a>
                    </IconContainer>
                    <p>
                        Office hours:
                        <br />
                        Mon - Fri: 7:30am – 6:00pm
                        <br />
                        Sat: 8:00am – 12:00pm
                        <br />
                        Sun: CLOSED
                    </p>
                </Hours>
            </Container>
        );
    }
}

export default Footer;