import React, { useEffect, useState } from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll'

function Navbar({ toggle }) {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = function(){
        scroll.scrollToTop();
    }

  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>BancoTech </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Sobre</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover" 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Descobrir</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services" 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Serviços</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup" smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Entrar</NavLinks>
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