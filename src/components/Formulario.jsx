import React,{useEffect,useState} from 'react';
import styled from '@emotion/styled'
import useMoneda from '../hooks/useMoneda'
import useCriptomoneda from '../hooks/useCriptomoneda'
import Axios from 'axios';
import Error from './Error'


const Boton=styled.input`

    margin-top:20px;
    font-weight:bold;
    font-size:20px;
    padding:10px;
    background:#66a2fe;
    border:none;
    width:100%;
    border-radius:10px;
    color:white;
    transition:background-color .3s ease;
    &:hover{
        background:#326ac0;
        cursor:pointer;

    }
`;

const Formulario = ({guardarCriptomoneda,guardarMoneda}) => {
    //state del listado de criptomonedas
    const [listaCripto,guardarCriptomonedas]=useState([]);
    const [error,guardarError]=useState(false);


    //Arreglo de monedas

    const MONEDAS = [
        {codigo:'USD',nombre:'Dolar de Estados Unidos'},
        {codigo:'MXN',nombre:'Peso Mexicano'},
        {codigo:'EUR',nombre:'Euro'},
        {codigo:'GBP',nombre:'Libra Esterlina'}
    ]
    //Utilizar useMoneda
    const [moneda,SelectMonedas]=useMoneda('Elige tu moneda','',MONEDAS);

    //usar useCriptomoneda
    const [criptomoneda,SelectCripto]=useCriptomoneda('Elige tu Criptomoneda','',listaCripto)
   
    //EJECUTAR LLAMANDO A LA API
    useEffect(() => {
        const consultarAPI = async () => {
            const url ='https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado =await Axios.get(url)
            guardarCriptomonedas(resultado.data.Data)
        }
        consultarAPI();
    }, [])

    const cotizarMoneda = e =>{
        e.preventDefault();

        //validar si ambos campos estan llenos
        if(moneda ==='' || criptomoneda===''){
            guardarError(true)
            return;
        }
        //pasar los datos al componente principal
        guardarError(false);
        guardarCriptomoneda(criptomoneda);
        guardarMoneda(moneda);

    }

    return ( 
        <form
        
            onSubmit={cotizarMoneda}
        >
            {error ? <Error mensaje='Todos los campos son obligatorios'/> :null}

            <SelectMonedas/>
            <SelectCripto
                key={listaCripto}
            />
            <Boton
                type='submit'
                value='Calcular'
            />
        </form>
     );
}
 
export default Formulario;