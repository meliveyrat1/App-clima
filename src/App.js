/* import React from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';


function App() {
  return (
    <div className="App">
      {/* <div>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div> *//*}*/
/*       <hr />
      <div>
        <Cards
          cities={data}
          
        />
      </div>
      <hr />
      <div>
        <SearchBar 
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
    </div>
  );
}

export default App;
  */

import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
 
export default function App() {
  const [cities, setCities] = useState([]); //el estado es cities,la funcion que cambia el estado es setCities, el valor inicial de mi estado cities va a ser vacio
                                             //hasta que le pasen info(ciudades) en useState
  const apiKey = "c0efa53af1c76f491089abf7378ce55d"                      
  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };//aqui esta usando una funcion que sabe como modificar el estado
          setCities((oldCities)=> [...oldCities, ciudad]);//el estado va a valer ...(lo que tenia antes)mas la ciudad ejemplo, como era un arreglo vacio, mi estado cities me quedaria con la ciudad ejemplo guardada
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }
  

    function onClose(id) {
      setCities((oldCities) => oldCities.filter((c)=> c.id !== id));
    }
  return (                                 
    <div className="App">
       <Nav onSearch={onSearch}/> {/*le paso esta funcion de App a nav y de nav a searchBar, voy haciendo un pasamano de funciones a los componentes hijos como props. Esos hijos pueden modificar el estado del App que sería el padre */}
       {/*props onSearch={funcion onSearch} */}
        <Cards cities={cities} onClose={onClose} />
    </div>
  );
}
