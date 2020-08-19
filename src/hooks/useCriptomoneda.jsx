import React, {Fragment, useState} from 'react'
import styled from '@emotion/styled'

const Label =styled.label`
    font-family: 'Bebas Neue', cursive;
    color:white;
    text-transform:uppercase;
    font-weight:bold;
    font-size:2.4rem;
    margin-top:2rem;
    display:block;
`;

const Select =styled.select`
    width:100%;
    display:block;
    padding:1rem;
    --webkit-appearance:none;
    border:none;
    border-radius:10px;
    font-size:1.2rem;
`;


const useCriptomoneda = (label,stateInicial,opciones) => {
    //sTATE DE NUESTRO CUSTOM HOOK
    const [state,actualizarState]=useState(stateInicial);

    //Lo que se muestra en pantalla
    const SelectCripto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => actualizarState(e.target.value)}
                value={state}
            >
                <option value="">--SELECIONE--</option>
                { }
            </Select>
        </Fragment>
    )

    //Retornar state, interfaz y func que modifica el state
    return [state,SelectCripto,actualizarState];

}
export default useCriptomoneda;