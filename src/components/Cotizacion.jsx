import React from 'react'
const Cotizacion = ({resultado}) => {
    //si el objeto retorna vacio no devuelve nada
    if(Object.keys(resultado).length === 0) return null;
    console.log(resultado)
    return ( 
        <div>
            <p>El precio es: <span>{resultado.PRICE}</span></p>
            <p>Precio mas alto del dia es: <span>{resultado.HIGHDAY}</span></p>
            <p>Precio mas bajo del dia  es: <span>{resultado.LOWDAY}</span></p>
            <p>Variacion ultimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></p>
            <p>Ultima actualizacion: <span>{resultado.LASTUPDATE}</span></p>
        </div>

     );
}
 
export default Cotizacion;