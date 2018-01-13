import React, { Component } from 'react';
import styled from 'styled-components'

const Nav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 21%;
    height: 100%;
    background-color: #8DB4E2; 
    position: fixed;
`
const Logo = styled.img`
    width: 82%;
    height: 15%;
    margin-top: 30px;
    
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
        font-size: 22px;
    }
`

class NavBar extends Component {
    render() {
        return (
            <Nav>

                <Logo src="http://bridgemillmo.evetsites.net/sites/site-5731/images/logo.png" alt="BridgeMill Animal Hospital" />

                <MenuItems>
                    <Ulist>
                        <List>Services</List>
                        <List>About</List>
                        <List>Contact</List>
                        <List>Hours</List>
                    </Ulist>

                </MenuItems>
            </Nav>
        );
    }
}

export default NavBar;