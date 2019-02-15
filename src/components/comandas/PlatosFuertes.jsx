import React, { Component } from "react";
import { Button } from 'reactstrap';

class PlatosFuertes extends Component {
  state = {
    platosFuertes: {}
  };

  componentDidMount() {
    const { platosFuertes } = this.props;
    this.setState({ platosFuertes: platosFuertes });
  }

  borrar = e => {
    let elemento = e.target.value
    this.props.borrarPlatoFuerte(elemento)
  };

  render() {
    let { hamburguesa, dog, burrito, pizza, tacos } = this.state.platosFuertes;

    let tituloPlato =()=>{ if((hamburguesa+dog+burrito+pizza+tacos) > 0){  return <h3> Platos Fuertes </h3> }}

    return (
      <div>
      
        {tituloPlato()}
        {hamburguesa ? (
          <div className='platilloDiv'>
            <p>Hamburguesas : <strong>{hamburguesa}</strong></p>
            <Button color='danger' value="hamburguesa" onClick={this.borrar}>
              -
            </Button>
          </div>
        ) : null}
        {dog ? (
          <div className='platilloDiv'>
            <p>Hot Dog : <strong>{dog}</strong></p>
            <Button color='danger' value="dog" onClick={this.borrar}>
              -
            </Button>
          </div>
        ) : null}
        {burrito ? (
          <div className='platilloDiv'>
            <p>Burritos : <strong>{burrito}</strong></p>
            <Button color='danger' value="burrito" onClick={this.borrar}>
              -
            </Button>
          </div>
        ) : null}
        {pizza ? (
          <div className='platilloDiv'>
            <p>Pizza : <strong>{pizza}</strong></p>
            <Button color='danger' value="pizza" onClick={this.borrar}>
              -
            </Button>
          </div>
        ) : null}
        {tacos ? (
          <div className='platilloDiv'>
            <p>Tacos : <strong>{tacos}</strong></p>
            <Button color='danger' value="tacos" onClick={this.borrar}>
              -
            </Button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default PlatosFuertes;
