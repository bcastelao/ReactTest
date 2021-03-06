import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

//function App() {
  class App extends React.Component {
    /*
    manejo cambio estado en componentes tipo clase
    constructor(){
      super();
      this.state = {
          titulo : "Titulo de la Tienda enviado por props"
      }
    }
    cambiarTitulo =() =>{
      this.setState({ titulo: "Nuevo"  })
    }
    dentro del click llamamos a la funcion con this.cambiarTitulo
    <ItemListContainer titulo={this.state.titulo}/>
    */
    constructor(){
      super();
      this.state = {
          titulo : "Titulo de la Tienda enviado por props"
      }
    }
  render(){  
    return(
      <BrowserRouter>
      <main>
      <NavBar/>
      <Switch>

        <Route path="/" exact>
          <ItemListContainer titulo={this.state.titulo}/>
        </Route>

        <Route path="/item/:id">
            <ItemDetailContainer/>
        </Route>

        </Switch>
      </main>
      </BrowserRouter>
    );
  }  
}
export default App;