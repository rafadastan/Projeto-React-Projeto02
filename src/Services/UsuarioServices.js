import axios from 'axios';

const apiUrl = "http://localhost:53849/api/usuarios";

export const post = (usuario) =>{
    return axios.post(apiUrl, usuario)
    .then(
        response => { return response.data; }
    );

}