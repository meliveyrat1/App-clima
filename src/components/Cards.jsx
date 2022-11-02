import React from 'react';
import Card from './Card.jsx';
import estilos from './Cards.module.css'

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  if(cities){
  return (<div className={estilos.contenedor}>
{
     cities.map(city=>(
      <Card //aqui le paso todo lo que esta en el componente App(el principal) y le cambio Cairns por city,xq despues a Cairns yo le paso x parametro(valor carcodeado)
      max={city.max}
      min={city.min}
      name={city.name}
      img={city.img}
      onClose={() => onClose(city.id)}
      id={city.id}
     />
     ))
    }
  </div>)
  }else {
    return(
      <div>Sin ciudades</div>
    );
  }
};