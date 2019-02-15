import React, { Component } from "react";
import Comanda from "../comandas/Comanda";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";

class Menu extends Component {
  state = {
    entradas: {
      francesa: 0,
      curly: 0,
      cebolla: 0,
      nachos: 0,
      queso: 0
    },
    platosFuertes: {
      hamburguesa: 0,
      dog: 0,
      burrito: 0,
      pizza: 0,
      tacos: 0
    },
    postres: {
      flan: 0,
      chocolate: 0,
      tresLeches: 0,
      gelatina: 0
    },
    bebidas: {
      refresco: 0,
      agua: 0,
      jugo: 0,
      cafe: 0
    },
    active: "1"
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  addEntrada = e => {
    let { entradas } = this.state;
    let name = e.target.name;

    if(entradas[name]>=2)return alert(`Haz alcanzado el maximo número de platillos para este tipo`)

    entradas[name]++;

    this.setState({ entradas: entradas });
  };

  addFuerte = e => {
    let { platosFuertes } = this.state;
    let name = e.target.name;

    if(platosFuertes[name]>=2)return alert(`Haz alcanzado el maximo número de platillos para este tipo`)

    platosFuertes[name]++;

    this.setState({ platosFuertes: platosFuertes });
  };

  addPostre = e => {
    let { postres } = this.state;
    let name = e.target.name;

    if(postres[name]>=2)return alert(`Haz alcanzado el maximo número de platillos para este tipo`)

    postres[name]++;

    this.setState({ postres: postres });
  };

  addBebida = e => {
    let { bebidas } = this.state;
    let name = e.target.name;

    if(bebidas[name]>=2)return alert(`Haz alcanzado el maximo número de platillos para este tipo`)

    bebidas[name]++;

    this.setState({ bebidas: bebidas });
  };

  render() {
    let { entradas } = this.state;
    let { platosFuertes } = this.state;
    let { postres } = this.state;
    let { bebidas } = this.state;

    return (
      <div className="comandaMenu">
        <div className="menu">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                Entradas
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                Platos Fuertes
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "3" })}
                onClick={() => {
                  this.toggle("3");
                }}
              >
                Postres
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "4" })}
                onClick={() => {
                  this.toggle("4");
                }}
              >
                Bebidas
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <button
                  className='buttonFrancesa'
                    onClick={this.addEntrada}
                    name="francesa"
                  >Papas a la francesa
                  </button>

                  <button 
                  className='buttonCurly'
                  onClick={this.addEntrada} name="curly">
                    Papas Curly
                  </button>

                  <button className='buttonCebolla' onClick={this.addEntrada} name="cebolla">
                    Aros de Cebolla
                  </button>

                  <button className='buttonNachos' onClick={this.addEntrada} name="nachos">
                    Nachos
                  </button>

                  <button className='buttonQueso' onClick={this.addEntrada} name="queso">
                    Palitos de Queso
                  </button>
                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  
                      <button className='buttonHamburguesa' onClick={this.addFuerte} name="hamburguesa">
                        Hamburguesa
                      </button>
                   
                      <button className='buttonDog' onClick={this.addFuerte} name="dog">
                        Hot Dog
                      </button>
                   
                      <button className='buttonBurrito' onClick={this.addFuerte} name="burrito">
                        Burrito
                      </button>
                   
                      <button className='buttonPizza' onClick={this.addFuerte} name="pizza">
                        Pizza
                      </button>
                   
                      <button className='buttonTacos' onClick={this.addFuerte} name="tacos">
                        Tacos
                      </button>
                   
                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="3">
              <Row>
                <Col sm="12">
                 
                      <button className='buttonFlan' onClick={this.addPostre} name="flan">
                        Flan
                      </button>
                    
                      <button className='buttonChocolate' onClick={this.addPostre} name="chocolate">
                        Pastel de chocolate
                      </button>
                    
                      <button className='button3Leches' onClick={this.addPostre} name="tresLeches">
                        Pastel 3 Leches
                      </button>
                    
                      <button className='buttonGelatina' onClick={this.addPostre} name="gelatina">
                        Gelatina de perrito
                      </button>
                   
                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="4">
              <Row>
                <Col sm="12">
                  
                      <button className='buttonRefresco' onClick={this.addBebida} name="refresco">
                        Refresco
                      </button>
                    
                      <button className='buttonAgua' onClick={this.addBebida} name="agua">
                        Agua
                      </button>
                    
                      <button className='buttonJugo' onClick={this.addBebida} name="jugo">
                        Jugo
                      </button>
                    
                      <button className='buttonCafe' onClick={this.addBebida} name="cafe">
                        Café
                      </button>
                   
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>

        <div className="comanda">
          <Comanda
            entradas={entradas}
            platosFuertes={platosFuertes}
            postres={postres}
            bebidas={bebidas}
          />
        </div>
      </div>
    );
  }
}

export default Menu;
