import Carro from '../../images/carreira.svg'
// import Carteira from '../../images/undraw_wallet_aym5.svg'
import check from '../../images/check.svg'
import pig from '../../images/pig.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Banco Premium ',
    headLine: 'Transições ilimitadas sem juros ou taxas extras',
    description: 
    'Baixe nosso App exclusivo que permite que você faça transações ilimitadas sem cobrança alguma',
    buttonLabel: 'Me tornar BancoTech',
    imgStart: false,
    img: Carro,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,
}


export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Acesso Ilimitado',
    headLine: 'Transições ilimitadas sem juros ou taxas extras',
    description: 
    'Baixe nosso App exclusivo que permite que você faça transações ilimitadas sem cobrança alguma',
    buttonLabel: 'Me tornar BancoTech',
    imgStart: true,
    img: pig,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true,
}


export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Venha fazer parte do nosso time',
    headLine: 'Criar uma conta é muito fácil',
    description: 
    'Em menos de 10 minutos você pode fazer parte do BancoTech. Tudo que precisamos é de algumas informações e você já pode usufruir dos benefícios do melhor banco digital do Brasil',
    buttonLabel: 'Me tornar BancoTech',
    imgStart: false,
    img: check,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true,
}