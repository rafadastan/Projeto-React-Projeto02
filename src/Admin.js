import React from 'react';
import * as configs from './Configs/AuthConfig';

import { Route, NavLink, HashRouter, Redirect } from 'react-router-dom';

import CadastroTarefa from './Pages/CadastroTarefa';
import ConsultaTarefa from './Pages/ConsultaTarefa';

class Admin extends React.Component {

    //função para realizar o logout do usuário
    logout() {
        if (window.confirm('Deseja realmente sair do sistema?')) {
            configs.removeAccesToken();
            configs.removeUserData();
            configs.redirectToLogin();
        }
    }

    render() {

        const usuario = JSON.parse(configs.getUserData());

        return configs.getAccessToken() && configs.getUserData() ? (

            <HashRouter>

                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-3">

                            <h5>Controle de Tarefas</h5>
                            <hr />

                            <div className="mb-2">
                                Usuário autenticado: <br />
                                <strong>{usuario.nome}</strong>
                            </div>

                            <div className="mb-2">
                                Email de acesso: <br />
                                <strong>{usuario.email}</strong>
                            </div>

                            <hr />

                            <NavLink className="btn btn-light btn-block mb-2"
                                to="/cadastro-tarefa">
                                Cadastrar Tarefas
                            </NavLink>

                            <NavLink className="btn btn-light btn-block mb-2"
                                to="/consulta-tarefa">
                                Consultar Tarefas
                            </NavLink>

                            <a href="#" className="btn btn-light btn-block"
                                onClick={() => this.logout()}>
                                Sair do Sistema
                        </a>

                        </div>
                        <div className="col-md-9">
                            <h5>Seja bem vindo ao Projeto!</h5>
                            <hr />

                            <Route path="/cadastro-tarefa"
                                component={CadastroTarefa} />

                            <Route path="/consulta-tarefa"
                                component={ConsultaTarefa} />

                        </div>
                    </div>
                </div>

            </HashRouter>

        ) : (
                <Redirect to={{ pathname: configs.redirectToLogin() }} />
            )
    }

}

export default Admin;