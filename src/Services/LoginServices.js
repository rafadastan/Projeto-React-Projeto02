import axios from 'axios';

//mapeando a URL da API..
const apiUrl = "http://localhost:59348/api/login";

//função para fazer a chamada do serviço POST da API..
export const post = (model) => {
    return axios.post(apiUrl, model)
        .then(
            response => { return response.data; }
        );
}

