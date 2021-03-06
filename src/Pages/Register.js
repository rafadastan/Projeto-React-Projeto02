import React from 'react';
import * as services from '../Services/UsuarioServices';

class Register extends React.Component {

    //construtor
    constructor(props) {
        super(props);

        //declarando o state do componente..
        this.state = {
            formCadastro_nome: '', errors_nome: [],
            formCadastro_email: '', errors_email: [],
            formCadastro_senha: '', errors_senha: [],
            formCadastro_senhaConfirmacao: '', errors_senhaConfirmacao: [],
            mensagem: ''
        };

        //declarando as funções que irão manipular o state..
        this.setNome = this.setNome.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setSenha = this.setSenha.bind(this);
        this.setSenhaConfirmacao = this.setSenhaConfirmacao.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //criando a função para capturar o valor do campo nome..
    setNome(e) {
        this.setState({ formCadastro_nome: e.target.value });
    }

    //criando a função para capturar o valor do campo email..
    setEmail(e) {
        this.setState({ formCadastro_email: e.target.value });
    }

    //criando a função para capturar o valor do campo senha..
    setSenha(e) {
        this.setState({ formCadastro_senha: e.target.value });
    }

    //criando a função para capturar o valor do campo senha confirmação..
    setSenhaConfirmacao(e) {
        this.setState({ formCadastro_senhaConfirmacao: e.target.value });
    }

    //criando a função para processar o evento SUBMIT do formulário
    handleSubmit(e) {
        //anular o POST do formulário
        e.preventDefault();

        //objeto JSON que será postado para a API..
        var jsonRequest = {
            nome: this.state.formCadastro_nome,
            email: this.state.formCadastro_email,
            senha: this.state.formCadastro_senha,
            senhaConfirmacao: this.state.formCadastro_senhaConfirmacao
        };

        //limpar as mensagens de erro..
        this.setState({
            errors_nome: [],
            errors_email: [],
            errors_senha: [],
            errors_senhaConfirmacao: []
        });

        //executando a requisição para a API..
        services.post(jsonRequest)
            .then(
                data => {
                    this.setState({
                        mensagem: data.message,

                        formCadastro_nome: '',
                        formCadastro_email: '',
                        formCadastro_senha: '',
                        formCadastro_senhaConfirmacao: ''
                    });
                }
            )
            .catch(
                e => {

                    var error = e.response;

                    switch (error.status) {
                        case 400:
                            const errors = error.data.errors;

                            this.setState({
                                errors_nome: errors.Nome || [],
                                errors_email: errors.Email || [],
                                errors_senha: errors.Senha || [],
                                errors_senhaConfirmacao: errors.SenhaConfirmacao || []
                            });

                            break;

                        case 500:
                            this.setState({ mensagem: error.data.message });
                            break;
                    }
                }
            );
    }

    render() {
        return (
            <div>
                <h5>Criar conta de Usuário</h5>

                <div className="row">
                    <div className="col-md-4">

                        <div className="mt-2 mb-2">
                            <strong>{this.state.mensagem}</strong>
                        </div>

                        <form method="post" onSubmit={this.handleSubmit}>

                            <div className="form-group">
                                <label>Nome do Usuário:</label>
                                <input type="text" className="form-control"
                                    placeholder="Digite aqui"
                                    onChange={this.setNome}
                                    value={this.state.formCadastro_nome}
                                />
                                <ul className="text-danger">
                                    {
                                        this.state.errors_nome.map(
                                            function (item, i) {
                                                return (
                                                    <li key={i}>{item}</li>
                                                )
                                            }
                                        )
                                    }
                                </ul>
                            </div>

                            <div className="form-group">
                                <label>Email:</label>
                                <input type="email" className="form-control"
                                    placeholder="Digite aqui"
                                    onChange={this.setEmail}
                                    value={this.state.formCadastro_email}
                                />
                                <ul className="text-danger">
                                    {
                                        this.state.errors_email.map(
                                            function (item, i) {
                                                return (
                                                    <li key={i}>{item}</li>
                                                )
                                            }
                                        )
                                    }
                                </ul>
                            </div>

                            <div className="form-group">
                                <label>Senha:</label>
                                <input type="password" className="form-control"
                                    placeholder="Digite aqui"
                                    onChange={this.setSenha}
                                    value={this.state.formCadastro_senha}
                                />
                                <ul className="text-danger">
                                    {
                                        this.state.errors_senha.map(
                                            function (item, i) {
                                                return (
                                                    <li key={i}>{item}</li>
                                                )
                                            }
                                        )
                                    }
                                </ul>
                            </div>

                            <div className="form-group">
                                <label>Confirme sua Senha:</label>
                                <input type="password" className="form-control"
                                    placeholder="Digite aqui"
                                    onChange={this.setSenhaConfirmacao}
                                    value={this.state.formCadastro_senhaConfirmacao}
                                />
                                <ul className="text-danger">
                                    {
                                        this.state.errors_senhaConfirmacao.map(
                                            function (item, i) {
                                                return (
                                                    <li key={i}>{item}</li>
                                                )
                                            }
                                        )
                                    }
                                </ul>
                            </div>

                            <div className="form-group">
                                <input type="submit" value="Realizar Cadastro"
                                    className="btn btn-success" />
                            </div>

                        </form>

                    </div>
                </div>

            </div>
        )
    }
}

export default Register;
