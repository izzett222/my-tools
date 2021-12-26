import client from "./utils/api-client"

export const getToken = () => {
    return window.localStorage.getItem('token');
}

export const handleResponse = ({ data }) => {
    window.localStorage.setItem('token', data.token);
    return data;
}
export const login = (username, password) => {
    return client('auth/login', { data: { username, password} }).then(handleResponse);
}
export const signup = (username, password) => {
    return client('auth/signup', { data: { username, password} }).then(handleResponse);
}
export const logout = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('default-list');

}
