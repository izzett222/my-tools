import { logout } from "../auth";
const client = (path, { token, data, headers: customHeaders, ...customOptions}) => {
    const options = {
        method: data ? 'POST' : 'GET',
        body: data ? JSON.stringify(data) : undefined,
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined,
            'content-type': 'application/json',
            ...customHeaders
        },
        ...customOptions
    };
    return window.fetch(`http://localhost:3005/${path}`, options).then(async response => {
        // when user doesn't have the right authorization we will reject the promise and reload the page
        const data = await response.json();
        if(response.status === 401) {
            logout();
            window.location.assign(window.location)
            return Promise.reject({message: 'Please re-authenticate.'})
        }
        if(response.ok) {
            return data
        } else {
            return Promise.reject(data);
        }

    });
}
export default client