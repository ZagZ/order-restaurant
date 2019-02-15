import React, { Component } from "react";
import { Button } from 'reactstrap';

class Bebidas extends Component {
  state = {
    bebidas: {}
  };

  componentDidMount() {
    const { bebidas } = this.props;
    this.setState({ bebidas: bebidas });
  }

  borrar = e => {
    let elemento = e.target.value
    this.props.borrarBebida(elemento)
  };

  render() {
    let { refresco, agua, jugo, cafe} = this.state.bebidas;

    let tituloBebidas =()=>{ if((refresco+agua+jugo+cafe) > 0){  return <h3> Bebidas </h3> }}

    return (
      <div>
      
        {tituloBebidas()}
        {refresco ? (
          <div className='platilloDiv'>
            <p>Refrescos : <strong>{refresco}</strong></p>
            <Button color='danger' value="refresco" onClick={this.borrar}>
              -
            </Button>
          </div>
        ) : null}
        {agua ? (
          <div className='platilloDiv'>
            <p>Agua : <strong>{agua}</strong></p>
            <Button color='danger' value="agua" onClick={this.borrar}>
              -
            </Button>
          </div>
        ) : null}
        {jugo ? (
          <div className='platilloDiv'>
            <p>Jugo : <strong>{jugo}</strong></p>
            <Button color='danger' value="jugo" onClick={this.borrar}>
              -
            </Button>
          </div>
        ) : null}
        {cafe ? (
          <div className='platilloDiv'>
            <p>Café : <strong>{cafe}</strong></p>
            <Button color='danger' value="cafe" onClick={this.borrar}>
              -
            </Button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Bebidas;
