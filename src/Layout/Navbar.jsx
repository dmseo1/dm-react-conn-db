import React, { Component } from 'react';
import styled from 'styled-components';

class Navbar extends Component {
    render() {
        return(
            <Nav>
                <NavList>
                    <NavItem>소개</NavItem>
                    <NavItem>게시판</NavItem>
                    <NavItem>연락</NavItem>
                    <NavItem>메뉴1</NavItem>
                    <NavItem>메뉴2</NavItem>
                    <NavItem>메뉴3</NavItem>
                </NavList>
            </Nav>
        );
    }
}

export default Navbar;

const Nav = styled.div`
    text-align:center;
    display:flex;
    margin-top:19px;
    width:100%;
    background-color:#000000;
    color:#ffffff;
    border-bottom: 1px solid #1e90ff;
`

const NavList = styled.ul`
    display : flex;
    width: 100%;
`

const NavItem = styled.li`
    display:flex;
    width:60px;
    width:100%;
    justify-content: space-around;
`