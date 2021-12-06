import styled from 'styled-components';
import { Grid, Avatar, Typography, Card, TextareaAutosize} from '@mui/material'


export const LiMenu = styled.li`
    display: inline-block;
    padding: 5px 20px;
    margin: 2px;
    color: white;
    font-size: 20px;
    align-items:center;
    cursor: pointer;
    border-bottom: 2px solid transparent;

    &:hover{
        border-bottom: 2px solid green;
    }

    @media only screen and (max-width: 500px){
        display: none;
    }
`

export const GridMenu = styled(Grid)`
    background-color: #0F0E17;
    padding: 30px 20px ;
`;

export const SpanM = styled.span`
    padding:10px;
    display: none;

    @media only screen and (max-width: 500px){
        display: inline;
    }

`;

export const AvatarMenu = styled(Avatar)`
    padding: 10px;
`;

export const GridAvatar = styled(Grid)`
    
    @media only screen and (max-width: 500px){
        display: none;
    }
`;

export const GridInicio = styled(Grid)`
    background-color: #0F0E17;
    min-height: 100%;
    padding: 60px 40px 40px;
`;


export const ImgInicio = styled.img`
    width: 90%;
    height: 450px;
    object-fit: cover;
    @media only screen and (max-width: 500px){
        padding: 20px;
    }
`;

export const TituInicio = styled.p`
    color:white;
    font-size: 50px;
    padding: 10px 5px;
    @media only screen and (max-width: 500px){
        padding: 2px 5px 10px 5px;
        font-size: 30px;
    }
`;

export const PInicio = styled.p`
    padding: 40px 30px 10px 5px;
    font-size: 28px;
    color: rgb(220,220,220);
    @media only screen and (max-width: 500px){
        padding: 20px 5px 20px 5px;
        font-size: 20px;
    }
`;

export const BotonFlecha = styled.div`
    margin-top: -80px;
    margin-left: 20px;
`;

export const GridProyecto = styled(Grid)`
    background-color: white;
    margin-bottom: 60px;
`;

export const Pproyecto = styled(Grid)`
    padding: 80px 80px 10px 50px;
    font-size: 28px;
    color: black;
    @media only screen and (max-width: 500px){
        padding: 20px 25px;
        font-size: 20px;
    }
`;

export const TituloProyec = styled.p`
    padding: 80px 80px 80px 50px;
    font-size: 40px;
    @media only screen and (max-width: 500px){
        padding: 30px 35px;
        font-size: 30px;
        font-weight: bold;
    }

`;

export const ContenedorImg = styled.div`
    margin: 20px auto;
    width: 85%;
`;

export const ImgProyect = styled.img`
    width: 100%;
    object-fit: cover;
`;

export const TituServicios = styled(Typography)`
    padding: 40px;
`;

export const GridServicio = styled(Grid)`
    background: linear-gradient(to left, #EA5455, #FEB692);
    padding: 10px 20px 30px;
`;

export const GridSer = styled(Grid)`
    padding: 10px 20px;
`;

export const TypoServi = styled(Typography)`
    padding: 10px 20px;
`;

export const BotonVer = styled.div`
    margin: 30px 20px;
`;

export const TituTesti = styled(Typography)`
    color: white;
    padding: 30px;
`;

export const DivTesti = styled.div`
    background-color: #0F0E17;
    padding-bottom: 40px;
`;

export const GridTesti = styled(Grid)`
    padding: 0px 20px 30px;
`;

export const CardTest = styled(Card)`
    height: 220px;
`;

export const GridForm = styled(Grid)`
    background: linear-gradient(to left, #EA5455, #FEB692);
    padding: 40px;
`;


export const FormDatos = styled.form`
    background-color: white;
    padding: 40px;
    max-width: 320px;
    margin: auto;
    @media only screen and (max-width: 500px){
        width: 300px;
        padding: 20px;

    }
`;

export const AreaDatos = styled(TextareaAutosize)`
    width: 93%;
    resize: none;
    padding: 10px;
    font-size: 17px;
`;

export const TituForm = styled(Typography)`
    padding-bottom: 20px;
`;

export const PFooter = styled.p`
    color: white;
    margin: 20px 0px;
    font-size: 18px;
    text-align: center;
`;

export const BotonRedes = styled.div`
    margin: 10px;
    display: inline-block;
    @media only screen and (max-width: 500px){
        justify-content: center;
        padding: 20px;
    }
`;

export const GridFooter = styled(Grid)`
    width: 100%;
    text-align: center;
    justify-content: center;
`;

export const AvatarFooter = styled(Avatar)`
    margin: 10px auto;
    padding: 10px;
`;