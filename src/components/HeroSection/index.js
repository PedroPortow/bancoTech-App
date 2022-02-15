import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElement'


const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
            <HeroH1>O Melhor Banco Virtual</HeroH1> 
            <HeroP>
                Registre-se hoje e ganhe 200R$ de créditos no primeiro mês.
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup"
                 onMouseEnter={onHover} 
                 onMouseLeave={onHover}
                 primary='true'
                 dark='true'
                 >
                    Quero ser BancoTech {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>

    </HeroContainer>
  )
}

export default HeroSection;