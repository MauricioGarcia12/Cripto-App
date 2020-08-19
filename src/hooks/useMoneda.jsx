import React, {Fragment, useState} from 'react'

const useMoneda = () => {
    //sTATE DE NUESTRO CUSTOM HOOK
    const [state,actualizarState]=useState('');

    //Lo que se muestra en pantalla
    const Seleccionar = () => (
        <Fragment>
            <label>Moneda</label>
            <select>
                <option value="MXN">Peso Mexicano</option>
            </select>
        </Fragment>
    )

    //Retornar state, interfaz y func que modifica el state
    return [state,Seleccionar,actualizarState];

}
export default useMoneda;