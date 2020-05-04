export default class Region {
    constructor(){
      this._regiones = [];
    }
    addRegion(pais) {
      if(!this._regiones.includes(this._regiones.find(r => r.nombre === pais.region))) {
        const region ={"id":this._regiones.length + 1, "nombre": pais.region }
        this._regiones.push(region)
      } 
      return this;
    }
    getRegiones() { return this._regiones}
}

