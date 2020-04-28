import React, { Component } from 'react';
import './App.css';
import TablaPaises from './componentes/tablaPaises';

class App extends Component {

  state = {
    paises : []
  };

  componentDidMount() {
    this.apiPaises()
  }

  apiPaises = async () => {
    try { 
      const datos = await fetch('https://restcountries.eu/rest/v2/all', {method: 'GET'})
      const paises = await datos.json()
      this.setState( { paises : paises } )
    } catch (err) {
      alert("Se produjo el siguiente error: " + err)
      this.setState( { paises : [] } )
    }
  }


  render() {

    const {paises} = this.state;

    return (
    <div className="App">
      <select id>Region</select>
      <select id>SubRegion</select>
      <TablaPaises listaPaises = {paises} tituloTabla="Listado de Paises"/>
    </div>
    );
  };
}

export default App;
