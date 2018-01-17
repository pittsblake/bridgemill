import React, { Component } from 'react';
import styled from 'styled-components';
import scrollToComponent from 'react-scroll-to-component';
import Services from './Services'

const Nav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 21%;
    height: 100%;
    background-color: #49a0ae; 
    position: fixed;
`
const Logo = styled.img`
    width: 290px;
    height: 100px;
    margin-top: 30px;
    &&:hover {
        cursor: pointer;
    }
    
`

const MenuItems = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 50%;
    width: 100%;
    margin-left: none;
    
`

const Ulist = styled.ul` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    list-style-type: none;
    width: 100%;
    padding-left: 0px;
    position: absolute;
`

const List = styled.li`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: white;
    padding: 15px 35px 15px 0px;
    width: 100%;
    font-size: 20px;
    &&:hover {
        background-color: black;
        cursor: pointer;
    }
`



class NavBar extends Component {

    render() {
        return (
            <Nav>

                <Logo className='top' src="../../logo.png" alt="BridgeMill Animal Hospital" />

                <MenuItems>
                    <Ulist>
                        <List className="serviceButton">Services</List>
                        <List className="aboutButton">About</List>
                        <List className="staffButton">Staff</List>
                        <List className="promotionButton">Promotions</List>
                        <List className="footerButton">Contact</List>
                        <List className="footerButton">Hours</List>
                    </Ulist>
                </MenuItems>
            </Nav>
        );
    }
}

export default NavBar;