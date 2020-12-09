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

          <NavLink to="/login" className="btn btn-light btn-sm mr-1">Autenticar Usuários</NavLink>
          <NavLink to="/register" className="btn btn-light btn-sm">Criar conta de Usuário</NavLink>

          <hr />

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

        </div>

      </HashRouter>
    )
  }

}

export default App;