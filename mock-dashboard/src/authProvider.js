import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';
var validator = require("email-validator");

export default (type, params) => {
    // called when the user attempts to log in
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const request = new Request('https://mydomain.com/authenticate', {
            method: 'POST',
            body: JSON.stringify(params),
            headers: new Headers({ 'Access-Control-Allow-Origin':'https://mydomain.com','Content-Type': 'application/json'
          }),
        })

        return fetch(request, {mode:'no-cors'})
            .then(response => {
               if (response.status < 200 || response.status >= 300) {
                    return response;
                }
                return response;
            })
            .then(({ token }) => {
              if(validator.validate(username)){
                 localStorage.setItem('token', token);
              }
              else{
                  alert("Please enter valid email address as username");
                  return false;
              }
            });
    }
    // called when the user clicks on the logout button
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('token');
        return Promise.resolve();
    }
    // called when the API returns an error
    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    // called when the user navigates to a new location
    if (type === AUTH_CHECK) {
        return localStorage.getItem('token')
            ? Promise.resolve()
            : Promise.reject();
    }
    return Promise.reject('Unknown method');
};
