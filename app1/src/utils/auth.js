import auth from 'auth0-js';

export default class Auth {

    auth0 = new auth.WebAuth({
        domain: 'dev-d0cjxte5.auth0.com',
        clientID: 'RUAF4X4M1TNPCyvmzv6AnNSJc1AbEwui',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid profile email'
    });


    login = () => {
        this.auth0.authorize()
    }
}