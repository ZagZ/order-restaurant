import React, { Component } from "react";
import { Button } from 'reactstrap';

class Postres extends Component {
  state = {
    postres: {}
  };

  componentDidMount() {
    const { postres } = this.props;
    this.setState({ postres: postres });
  }

  borrar = e => {
    let elemento = e.target.value
    this.props.borrarPostres(elemento)
  };

  render() {
    let { flan, chocolate, tresLeches, gelatina} = this.state.postres;

    let tituloPostres =()=>{ if((flan+chocolate+tresLeches+gelatina) > 0){  return <h3> Postres </h3> }}

    return (
      <div>
      
        {tituloPostres()}
        {flan ? (
          <div className='platilloDiv'>
            <p>Flan : <strong>{flan}</strong></p>
            <Button color='danger' value="flan" onClick={this.borrar}>
              -
            </Button>
          </div>
        ) : null}
        {chocolate ? (
          <div className='platilloDiv'>
            <p>P. Chocolate : <strong>{chocolate}</strong></p>
            <Button color='danger' value="chocolate" onClick={this.borrar}>
              -
            </Button>
          </div>
        ) : null}
        {tresLeches ? (
          <div className='platilloDiv'>
            <p>P. 3 Leches : <strong>{tresLeches}</strong></p>
            <Button color='danger' value="tresLeches" onClick={this.borrar}>
              -
            </Button>
          </div>
        ) : null}
        {gelatina ? (
          <div className='platilloDiv'>
            <p>Gelatina : <strong>{gelatina}</strong></p>
            <Button color='danger' value="gelatina" onClick={this.borrar}>
              -
            </Button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Postres;
