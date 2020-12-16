import React from 'react';

class ConsultaTarefa extends React.Component {

    //construtor
    constructor(props) {
        super(props);

        //declarando o state do componente..
        this.state = {
            formCadastro_dataInicio: '', errors_dataInicio: [],
            formCadastro_dataFim: '', errors_dataFim: [],
            mensagem: ''
        };

        //declarando as funções que irão manipular o state..
        this.setDataInicio = this.setDataInicio.bind(this);
        this.setDataFim = this.setDataFim.bind(this);
    }

    setDataInicio(e) {
        this.setState({ formCadastro_dataInicio: e.target.value });
    }

    setDataFim(e) {
        this.setState({ formCadastro_dataFim: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h5>Consulta de tarefas</h5>
                Filtrar tarefas no período
                <br />

                <form method="post" onSubmit={this.handleSubmit}>

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
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="submit" value="Pesquisar Tarefas"
                                    className="btn btn-success" />
                            </div>
                        </div>
                    </div>

                </form>

                <div className="mt-3">

                    <table className="table table-bordered table-hover table-striped">
                        <thead>
                            <tr>
                                <th>Nome da tarefa</th>
                                <th>Descrição</th>
                                <th>Data / Hora de início</th>
                                <th>Data / Hora de término</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="4">
                                    Quantidade de tarefas: 0
                                </td>
                            </tr>
                        </tfoot>
                    </table>

                </div>

            </div>
        )
    }

}

export default ConsultaTarefa;