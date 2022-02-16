import React from 'react'
import icon1 from '../../images/icon1.svg'
import icon2 from '../../images/icon2.svg'
import icon3 from '../../images/icon3.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'

function Services() {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Serviços</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={icon1} />
                <ServicesH2>Despesas reduzidas</ServicesH2>
                <ServicesP>Nós ajudamos você a reduzir despesas e aumentar seu lucro</ServicesP>
            
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={icon2} />
                <ServicesH2>Acesso Virtual</ServicesH2>
                <ServicesP>Você pode acessar nossa plataforma de qualquer lugar no mundo</ServicesP>
            
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={icon3} />
                <ServicesH2>Beneficios Premium</ServicesH2>
                <ServicesP>Desbloqueie nossa parceria Premium e receba 5% de cashback</ServicesP>
            
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services