//função para armazenar o TOKEN do usuário em sessão
export const setAccessToken = (accessToken) => {
    //gravando o token em uma localStorage
    window.localStorage.setItem("ACCESS_TOKEN", accessToken);
}

//função para armazenar todos os dados do usuario
export const setUserData = (userData) => {
    //gravando os dados em uma localStorage
    window.localStorage.setItem("USER_DATA", userData);
}

//função para ler o valor do token do usuário
export const getAccessToken = () => {
    return window.localStorage.getItem("ACCESS_TOKEN");
}

//função para ler os dados do usuário
export const getUserData = () => {
    return window.localStorage.getItem("USER_DATA");
}

//função para apagar o conteudo do token
export const removeAccesToken = () => {
    window.localStorage.removeItem("ACCESS_TOKEN");
}

//função para apagar o registro do usuario
export const removeUserData = () => {
    window.localStorage.removeItem("USER_DATA");
}

//função para redirecionar para a página da area restrita
export const redirectToAdmin = () => {
    window.location.href = "/admin";
}

//função para redirecionar de volta para a página de autenticação
export const redirectToLogin = () => {
    window.location.href = "/#/login";
}