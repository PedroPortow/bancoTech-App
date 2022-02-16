import React from 'react'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'
import {FaInstagram, FaGithub} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'

function Footer() {
    const toggleHome = function(){
        scroll.scrollToTop();
    }
  return (
    <FooterContainer>
        <FooterWrap>
             <FooterLinksContainer>
                 <FooterLinksWrapper>
                     <FooterLinkItems>
                         <FooterLinkTitle>About Us a</FooterLinkTitle>
                             <FooterLink to="/">About us</FooterLink>
                             <FooterLink to="/">How it works</FooterLink>
                             <FooterLink to="/">About us</FooterLink>
                             <FooterLink to="/">About us</FooterLink>
                             <FooterLink to="/">About us</FooterLink>
                         
                     </FooterLinkItems>
                     <FooterLinkItems>
                         <FooterLinkTitle>About Us a</FooterLinkTitle>
                             <FooterLink to="/">About us</FooterLink>
                             <FooterLink to="/">How it works</FooterLink>
                             <FooterLink to="/">About us</FooterLink>
                             <FooterLink to="/">About us</FooterLink>
                             <FooterLink to="/">About us</FooterLink>
                         
                     </FooterLinkItems>
                 </FooterLinksWrapper>
                 <FooterLinksWrapper>
                     <FooterLinkItems>
                         <FooterLinkTitle>About Us a</FooterLinkTitle>
                             <FooterLink to="/">About us</FooterLink>
                             <FooterLink to="/">How it works</FooterLink>
                             <FooterLink to="/">About us</FooterLink>
                             <FooterLink to="/">About us</FooterLink>
                             <FooterLink to="/">About us</FooterLink>
                         
                     </FooterLinkItems>
                     <FooterLinkItems>
                         <FooterLinkTitle>About Us a</FooterLinkTitle>
                             <FooterLink to="/">About us</FooterLink>
                             <FooterLink to="/">How it works</FooterLink>
                             <FooterLink to="/">About us</FooterLink>
                             <FooterLink to="/">About us</FooterLink>
                             <FooterLink to="/">About us</FooterLink>
                         
                     </FooterLinkItems>
                 </FooterLinksWrapper>
             </FooterLinksContainer>
             <SocialMedia>
                 <SocialMediWrap>
                     <SocialLogo to="/" onClick={toggleHome}>BancoTech</SocialLogo>
                     <WebsiteRights>BancoTech © {new Date().getFullYear()} Todos direitos reservados.</WebsiteRights>
                     <SocialIcons>
                         <SocialIconLink href="//www.instagram.com/pedro.portow/" target="_blank" aria-label="Instagram">
                             <FaInstagram />
                         </SocialIconLink>
                         <SocialIconLink href="//www.github.com/PedroPortow" target="_blank" aria-label="Github">
                             <FaGithub />
                         </SocialIconLink>
                         
                        
                     </SocialIcons>
                 </SocialMediWrap>
             </SocialMedia>
        </FooterWrap>


    </FooterContainer>
  )
}

export default Footer