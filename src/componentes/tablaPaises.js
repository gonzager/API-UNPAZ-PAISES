import React, { Component } from "react";

class TablaPaises extends Component {

    render() {

        const {listaPaises, tituloTabla} = this.props;

        const datosPaises = listaPaises.map(
            p=> (
                <tr key={p.alpha3Code}>
                    <td>{p.alpha3Code}</td>
                    <td>{p.name}</td>
                    <td>{p.capital}</td>
                    <td>{p.region}</td>
                    <td>{p.subregion}</td>
                    <td><img src={p.flag} height={35}/></td>
                </tr>
            )
        )


        return (
            <div>
                <table>
                    <caption>{tituloTabla}</caption>
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Pais</th>
                            <th>Capital</th>
                            <th>Region</th>
                            <th>SubRegion</th>
                            <th>Bandera</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datosPaises}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default TablaPaises;