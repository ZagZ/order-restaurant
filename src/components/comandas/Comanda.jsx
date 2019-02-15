import React, { Component } from "react";
import Entradas from "./Entradas";
import PlatosFuertes from "./PlatosFuertes";
import Postres from "./Postres";
import Bebidas from "./Bebidas";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Comanda extends Component {
  state = {
    entradas: this.props.entradas,
    platosFuertes: this.props.platosFuertes,
    postres: this.props.postres,
    bebidas: this.props.bebidas,
    comandasGeneradas: [],
    modal: false,
    actualComanda: {},
    index: ""
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  borrarEntrada = elemento => {
    let { entradas } = this.state;
    entradas[elemento]--;
    this.setState({ entradas: entradas });
    console.log(this.state.entradas);
  };

  borrarPlatoFuerte = elemento => {
    let { platosFuertes } = this.state;
    platosFuertes[elemento]--;
    this.setState({ platosFuertes: platosFuertes });
  };

  borrarPostre = elemento => {
    let { postres } = this.state;
    postres[elemento]--;
    this.setState({ postres: postres });
  };

  borrarBebida = elemento => {
    let { bebidas } = this.state;
    bebidas[elemento]--;
    this.setState({ bebidas: bebidas });
  };

  generarComanda = () => {
    let { entradas, platosFuertes, postres, bebidas } = this.state;

    let { comandasGeneradas } = this.state;

    let comandaGenerada = {
      entradas: entradas,
      platosFuertes: platosFuertes,
      postres: postres,
      bebidas: bebidas
    };
    comandasGeneradas.push(comandaGenerada)
    this.setState({
      comandasGeneradas
      //comandasGeneradas:[...comandasGeneradas,{comandaGenerada}]
    })
    console.log("generando comanda");
    console.log(comandasGeneradas);
    /* this.setState({ comandasGeneradas: comandasGeneradas });
    this.setState({
      entradas:{
        francesa:0,
        curly:0,
        cebolla:0,
        nachos:0,
        queso:0
      },
      platosFuertes:{}
    })
    delete this.state.entradas
    delete this.state.platosFuertes
    delete this.state.postres
    delete this.state.bebidas */
   
    console.log(this.state);
  };

  showComanda = (e, index) => {
    let actualComanda = this.state.comandasGeneradas[index];
    console.log(`index:${index}`);
    this.setState({ actualComanda: actualComanda });

    this.setState({ index: index });
    this.toggle();
    console.log("show comanda");
    console.log(actualComanda);
  };

  render() {
    let { entradas } = this.props;
    let { platosFuertes } = this.props;
    let { postres } = this.props;
    let { bebidas } = this.props;
    let { comandasGeneradas } = this.state;
    let { showComanda } = this;
    let { actualComanda } = this.state;

    return (
      <div>
        <div className='listaDeComandas'>
          <h3>Comandas pendientes: {comandasGeneradas.length} </h3>
          <Button color='warning'> Show </Button>
        </div>

        <div className="comandaActual">
          <h2 className="tituloComanda">Comanda Actual</h2>

          {entradas ? (
            <Entradas entradas={entradas} borrarEntrada={this.borrarEntrada} />
          ) : null}
          {platosFuertes ? (
            <PlatosFuertes
              platosFuertes={platosFuertes}
              borrarPlatoFuerte={this.borrarPlatoFuerte}
            />
          ) : null}
          {postres ? (
            <Postres postres={postres} borrarPostre={this.borrarPostre} />
          ) : null}
          {bebidas ? (
            <Bebidas bebidas={bebidas} borrarBebida={this.borrarBebida} />
          ) : null}

          <div>
            <Button color="success" onClick={this.generarComanda}>
              Generar Comanda
            </Button>
          </div>
        </div>

        <div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>
              {" "}
              Comanda No. {this.state.index}{" "}
            </ModalHeader>
            <ModalBody>
              {/* ENTRADAS */}
              {() => {
                if (actualComanda.entradas) {
                  if (
                    actualComanda.entradas.francesa > 0 ||
                    actualComanda.entradas.curly > 0 ||
                    actualComanda.entradas.cebolla > 0 ||
                    actualComanda.entradas.nachos > 0 ||
                    actualComanda.entradas.queso > 0
                  ) {
                    return <h1>Entradas</h1>;
                  }
                }
              }}
              {actualComanda.entradas ? (
                actualComanda.entradas.francesa ? (
                  <div>
                    {" "}
                    Francesa: {this.state.actualComanda.entradas.francesa}{" "}
                  </div>
                ) : null
              ) : null}
              {actualComanda.entradas ? (
                actualComanda.entradas.curly ? (
                  <div> Curly: {this.state.actualComanda.entradas.curly} </div>
                ) : null
              ) : null}
              {actualComanda.entradas ? (
                actualComanda.entradas.cebolla ? (
                  <div>
                    {" "}
                    Cebolla: {this.state.actualComanda.entradas.cebolla}{" "}
                  </div>
                ) : null
              ) : null}
              {actualComanda.entradas ? (
                actualComanda.entradas.nachos ? (
                  <div>
                    {" "}
                    Nachos: {this.state.actualComanda.entradas.nachos}{" "}
                  </div>
                ) : null
              ) : null}
              {actualComanda.entradas ? (
                actualComanda.entradas.queso ? (
                  <div> Queso: {this.state.actualComanda.entradas.queso} </div>
                ) : null
              ) : null}
              {/* PLATOS FUERTES */}
              {actualComanda.platosFuertes ? (
                actualComanda.platosFuertes.hamburguesa ? (
                  actualComanda.platosFuertes.dog ? (
                    actualComanda.platosFuertes.burritos ? (
                      actualComanda.platosFuertes.pizza ? (
                        actualComanda.platosFuertes.tacos ? (
                          <h2>Platos Fuertes</h2>
                        ) : null
                      ) : null
                    ) : null
                  ) : null
                ) : null
              ) : null}
              {actualComanda.platosFuertes ? (
                actualComanda.platosFuertes.hamburguesa ? (
                  <div>
                    {" "}
                    hamburguesa:{" "}
                    {this.state.actualComanda.platosFuertes.hamburguesa}{" "}
                  </div>
                ) : null
              ) : null}
              {actualComanda.platosFuertes ? (
                actualComanda.platosFuertes.dog ? (
                  <div> dog: {this.state.actualComanda.platosFuertes.dog} </div>
                ) : null
              ) : null}
              {actualComanda.platosFuertes ? (
                actualComanda.platosFuertes.burritos ? (
                  <div>
                    {" "}
                    burritos: {
                      this.state.actualComanda.platosFuertes.burritos
                    }{" "}
                  </div>
                ) : null
              ) : null}
              {actualComanda.platosFuertes ? (
                actualComanda.platosFuertes.pizza ? (
                  <div>
                    {" "}
                    pizza: {this.state.actualComanda.platosFuertes.pizza}{" "}
                  </div>
                ) : null
              ) : null}
              {actualComanda.platosFuertes ? (
                actualComanda.platosFuertes.tacos ? (
                  <div>
                    {" "}
                    tacos: {this.state.actualComanda.platosFuertes.tacos}{" "}
                  </div>
                ) : null
              ) : null}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>
                Cancelar
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Finalizar Comanda
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Comanda;
