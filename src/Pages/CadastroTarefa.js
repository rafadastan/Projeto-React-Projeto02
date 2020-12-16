import React from 'react';

class CadastroTarefa extends React.Component {

    //construtor
    constructor(props) {
        super(props);

        //declarando o state do componente..
        this.state = {
            formCadastro_nome: '', errors_nome: [],
            formCadastro_descricao: '', errors_descricao: [],
            formCadastro_dataInicio: '', errors_dataInicio: [],
            formCadastro_horaInicio: '', errors_horaInicio: [],
            formCadastro_dataFim: '', errors_dataFim: [],
            formCadastro_horaFim: '', errors_horaFim: [],
            mensagem: ''
        };

        //declarando as funções que irão manipular o state..
        this.setNome = this.setNome.bind(this);
        this.setDescricao = this.setDescricao.bind(this);
        this.setDataInicio = this.setDataInicio.bind(this);
        this.setHoraInicio = this.setHoraInicio.bind(this);
        this.setDataFim = this.setDataFim.bind(this);
        this.setHoraFim = this.setHoraFim.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setNome(e) {
        this.setState({ formCadastro_nome: e.target.value });
    }

    setDescricao(e) {
        this.setState({ formCadastro_descricao: e.target.value });
    }

    setDataInicio(e) {
        this.setState({ formCadastro_dataInicio: e.target.value });
    }

    setHoraInicio(e) {
        this.setState({ formCadastro_horaInicio: e.target.value });
    }

    setDataFim(e) {
        this.setState({ formCadastro_dataFim: e.target.value });
    }

    setHoraFim(e) {
        this.setState({ formCadastro_horaFim: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h5>Cadastro de tarefas</h5>
                Preencha o formulário abaixo:
                <br />
                <br />

                <form method="post" onSubmit={this.handleSubmit}>

                    <div className="row">
                        <div className="col-md-6">

                            <div className="form-group">
                                <label>Nome da Tarefa:</label>
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
                                <label>Descrição:</label>
                                <textarea className="form-control"
                                    placeholder="Digite aqui"
                                    onChange={this.setDescricao}
                                    value={this.state.formCadastro_descricao}
                                ></textarea>
                                <ul className="text-danger">
                                    {
                                        this.state.errors_descricao.map(
                                            function (item, i) {
                                                return (
                                                    <li key={i}>{item}</li>
                                                )
                                            }
                                        )
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6">

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Data de Início:</label>
                                        <input type="date" className="form-control"
                                            placeholder="Digite aqui"
                                            onChange={this.setDataInicio}
                                            value={this.state.formCadastro_dataInicio}
                                        />
                                        <ul className="text-danger">
                                            {
                                                this.state.errors_dataInicio.map(
                                                    function (item, i) {
                                                        return (
                                                            <li key={i}>{item}</li>
                                                        )
                                                    }
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Hora de Início:</label>
                                        <input type="text" className="form-control"
                                            placeholder="00:00"
                                            onChange={this.setHoraInicio}
                                            value={this.state.formCadastro_horaInicio}
                                        />
                                        <ul className="text-danger">
                                            {
                                                this.state.errors_horaInicio.map(
                                                    function (item, i) {
                                                        return (
                                                            <li key={i}>{item}</li>
                                                        )
                                                    }
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Data de Términio:</label>
                                        <input type="date" className="form-control"
                                            placeholder="Digite aqui"
                                            onChange={this.setDataFim}
                                            value={this.state.formCadastro_dataFim}
                                        />
                                        <ul className="text-danger">
                                            {
                                                this.state.errors_dataFim.map(
                                                    function (item, i) {
                                                        return (
                                                            <li key={i}>{item}</li>
                                                        )
                                                    }
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Hora de Término:</label>
                                        <input type="text" className="form-control"
                                            placeholder="00:00"
                                            onChange={this.setHoraFim}
                                            value={this.state.formCadastro_horaFim}
                                        />
                                        <ul className="text-danger">
                                            {
                                                this.state.errors_horaFim.map(
                                                    function (item, i) {
                                                        return (
                                                            <li key={i}>{item}</li>
                                                        )
                                                    }
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="submit" value="Realizar Cadastro"
                                    className="btn btn-success" />
                            </div>
                        </div>
                    </div>

                </form>

            </div>
        )
    }

}

export default CadastroTarefa;