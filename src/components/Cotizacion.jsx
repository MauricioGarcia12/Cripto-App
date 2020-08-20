import React from 'react'
import styled from '@emotion/styled'

const ResultadoDiv = styled.div`
margin-top:2rem;
color:black;
background:white;
border-radius:10px;
width:100%;
padding:.4rem;
text-align:center;
font-family:'Bebas Neue';

`;

const P = styled.p`
    font-size:28px;
    span{
        font-weight:bold;
    }

`;

const Precio= styled.p`
font-size:30px;
`;



const Cotizacion = ({resultado}) => {
    //si el objeto retorna vacio no devuelve nada
    if(Object.keys(resultado).length === 0) return null;
    console.log(resultado)
    return ( 
        <ResultadoDiv>
            <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
            <P>Precio mas alto del dia es: <span>{resultado.HIGHDAY}</span></P>
            <P>Precio mas bajo del dia  es: <span>{resultado.LOWDAY}</span></P>
            <P>Variacion ultimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></P>
            <P>Ultima actualizacion: <span>{resultado.LASTUPDATE}</span></P>
        </ResultadoDiv>

     );
}
 
export default Cotizacion;