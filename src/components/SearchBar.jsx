import React, { useState } from 'react';
import estilos from './Search.module.css';

export default function SearchBar({onSearch}) {
  //creo un estado,hago un destructuring
  const [city, setCity]= useState('');//va a ser igual a la ejecucion useState que ya importé arriba, y como argumento le paso el valor inicial que quiero que tenga mi estado(city),que en un comienzo va a ser un string vacio
  //city:el nombre que quiero que tenga mi estado, setCity:el nombre que quiero q tenga la funcion que va a saber como moficicar el estado
  return (
    <form className={estilos.contenedor}
      onSubmit={(e) => {//parecido al onClick, onChange,estoy agregando un eventListener, cuando este formulario sea submitiado vas a ejcutar lo que te digo ahi abajo que ejecutes
      e.preventDefault();//event.ejecuta un metodo que se usa en los formularios,xq por defecto el formul me actualiza la pag,y yo estoy tratando de capturar un evento me lo borra
      onSearch(/*"Cairns"*/ city);//como no quiero eso hago que prevenga el comportamiento por default,es decir no refresques la pagina,xq siempre nos vamos a esatr manejando cona estados
      //cuando apretamos el boton ejecutamos el onSearch,que lo que hace es crear un objeto ciudad y lo agregaba al estado cities de App
      //ahora en vez de ir "cairns" pongo city,le paso a onSearch lo que escribió el usuario
      }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}//yo quiero en el estado city ir guardando lo que se escribe en el input,en principio el value va a ser el estado city,en este caso un str vacio
        onChange={e=> setCity(e.target.value)}//lo que hace el onChange es ir guardano el estado cuando el usuario escribe algo o borre en el input
        //le paso el argumento e(event,que va a ser el argumento por defecto que va agarrar cualquier evenListener,en este caso onChange
        //le paso la funcion setCity que va a ser el que va a modificar el estado city,lo que va entre parentesis es el valor que quiero que vaya guardando mi estado,que sería lo que escribe el usuario
        //para eso debo acceder al input(e.target,ahi estoy parado en el input, y si quiero lo que esta escrito en el input pongo.value)
      />
      <input className={estilos.btn} type="submit" value="Agregar" />
      {/*aqui sucede un evento cuando hago click al boton,estoy enviando el formulario a algun lado(submitiando) */}
     </form>
  );
} 










/* export default function SearchBar(props) {
  // acá va tu código
  return (<div className={estilos.contenedor}>
      <input placeholder='Ciudad...'></input>
      <button className={estilos.btn}>Search</button>
  </div>)
}; */