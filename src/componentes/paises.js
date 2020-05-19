import React, { Component } from 'react';
import '../App.css';
import TablaPaises from './tablaPaises';
import Region from '../clases/region';
import ComboRegiones from './comboRegiones';

class Paises extends Component {

  state = {
    paises : [],
    paisesFiltrado: [],
    regiones:[]
  };

  componentDidMount() {
    this.apiPaises()
  }

  apiPaises = async () => {
    try { 
      const datos = await fetch('https://restcountries.eu/rest/v2/all', {method: 'GET'})
      const paises = await datos.json()
      const regiones = this.getRegiones( paises )
      this.setState( { paises : paises, paisesFiltrado: paises, regiones: regiones  } )
    } catch (err) {
      alert("Se produjo el siguiente error: " + err)
      this.setState( { paises : [], paisesFiltrado: [], regiones: []  } )
    }
  }

  getRegiones = (paises) => {
    const fnReduce = (regionInstance, each) => regionInstance.addRegion(each);
    const regiones = paises.reduce( fnReduce, new Region());
    return regiones.getRegiones()
  }

  eventoCombo = (e) => {
    if (e.target.value ==='0') {
      this.setState( { paisesFiltrado: this.state.paises} )
    }
    else {
      const paisesFiltrado = this.state.paises.filter(
        p=>p.region === e.target.value
      )
      this.setState( { paisesFiltrado: paisesFiltrado} )
    }
  }


  render() {

    const {paisesFiltrado, regiones } = this.state;

    return (
    <div className="App">
      <ComboRegiones regiones= {regiones} handerCombo={this.eventoCombo}/>
      <TablaPaises listaPaises = {paisesFiltrado} tituloTabla="Listado de Paises"/>
    </div>
    );
  };
}

export default Paises;
