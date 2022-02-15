import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';


function Navbar({ toggle }) {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">BancoTech </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">Sobre</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover">Descobrir</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Serviços</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup">Entrar</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Registrar</NavBtnLink>
                </NavBtn>
               
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar