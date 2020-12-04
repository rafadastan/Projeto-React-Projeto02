import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

import Login from './Pages/Login';
import Register from './Pages/Register';

class App extends React.Component {

  //função que irá renderizar o conteudo HTML do componente..
  render() {
    return (

      <HashRouter>

        <div className="container mt-4">
          <ul>
            <li><NavLink to="/login">Autenticar Usuários</NavLink></li>
            <li><NavLink to="/register">Criar conta de Usuário</NavLink></li>
          </ul>
          
          <hr />

          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>

        </div>

      </HashRouter>
    )
  }

}

export default App;