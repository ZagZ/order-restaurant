import React, { Component } from "react";
import { Button } from 'reactstrap';

class Entradas extends Component {
  state = {
    entradas: {}
  };

  componentDidMount() {
    const { entradas } = this.props;
    this.setState({ entradas: entradas });
  }

  borrar = e => {
    let elemento = e.target.value
    this.props.borrarEntrada(elemento)
  };



  render() {
    let { francesa, curly, cebolla, nachos, queso } = this.state.entradas;

    let tituloEntrada =()=>{ if((francesa+curly+cebolla+nachos+queso) > 0){  return <h3> Entradas </h3> }}

    return (
      <div>
      
       {tituloEntrada()}

        {francesa ? (
          <div className='platilloDiv' >
            <p>P. Francesas   : <strong>{francesa}</strong> </p>
            <Button color='danger' value="francesa" onClick={this.borrar}>
              -
            </Button>
          </div>
        ) : null}
        {curly ? (
          <div className='platilloDiv'>
            <p>P. Curly : <strong>{curly}</strong> </p>
            <Button color='danger' value="curly" onClick={this.borrar}>
              -
            </Button>
          </div>
        ) : null}
        {cebolla ? (
          <div className='platilloDiv'>
            <p>Aros de Cebolla : <strong>{cebolla}</strong></p>
            <Button color='danger' value="cebolla" onClick={this.borrar}>
              -
            </Button>
          </div>
        ) : null}
        {nachos ? (
          <div className='platilloDiv'>
            <p>Nachos : <strong>{nachos}</strong></p>
            <Button color='danger' value="nachos" onClick={this.borrar}>
              -
            </Button>
          </div>
        ) : null}
        {queso ? (
          <div className='platilloDiv'>
            <p>Dedos Queso : <strong>{queso}</strong></p>
            <Button color='danger' value="queso" onClick={this.borrar}>
              -
            </Button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Entradas;
