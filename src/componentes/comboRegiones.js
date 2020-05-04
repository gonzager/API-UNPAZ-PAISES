import React, { Component } from "react";

class ComboRegiones extends Component {

    render(){

        const {regiones, handerCombo } = this.props;

        const regionesOption = regiones.map( 
            r => (
                <option key={r.id} value={r.nombre}>{r.nombre}</option>   
            )
        )

        return (
            <div>
                <select onChange = {handerCombo}> 
                    <option key={0} value={0}>Seleccione una Region...</option>
                    {regionesOption}
                </select>
            </div>
        )
    }

}

export default ComboRegiones;