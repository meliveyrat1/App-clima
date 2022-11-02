import React from 'react';
import SearchBar from './SearchBar.jsx';
//import './Nav.css';

function Nav({onSearch}) {
  return (
    <div>
      <span>Henry Weather App</span>
        <SearchBar onSearch={onSearch} /> {/*aqui lo mismo, nav recibó la porop onSrach y su funcion y ahora se la pasamos a searchBar */}
       
    </div>
  );
};

export default Nav;