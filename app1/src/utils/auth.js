import auth from 'auth0-js';
import history from './history';

export default class Auth {

    auth0 = new auth.WebAuth({
        domain: 'dev-d0cjxte5.auth0.com',
        clientID: 'RUAF4X4M1TNPCyvmzv6AnNSJc1AbEwui',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid profile email'
    });

    userProfile = {};

    login = () => {
        this.auth0.authorize()
    }

    handleAuth = () => {
        this.auth0.parseHash((err, authResult) => {
            if (authResult) {
                localStorage.setItem('access_token', authResult.accessToken);
                localStorage.setItem('id_token', authResult.idToken);

                let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
                localStorage.setItem('expiresAt', expiresAt);
                this.getProfile();
                setTimeout(() => {
                    history.replace('/authCheck')
                }, 200);
            } else {
                console.warn('handleAuth error: ', err);
            }
        });
    }

    logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expiresAt');
        this.auth0.logout();
        history.replace('/authCheck')
    };

    getProfile = () => {
        let accessToken = this.getAcessToken();
        if (accessToken) {
            this.auth0.client.userInfo(accessToken, (err, profile) => {
                if (profile) {
                    this.userProfile = {profile};
                }
            });
        }
    }

    getAcessToken = () => {
        if (localStorage.getItem('access_token')) {
            const accessToken = localStorage.getItem('access_token');
            return accessToken;
        }

        return null
    }

    isAuthenticated = () => {
        let expiresAt = JSON.parse(localStorage.getItem('expiresAt'));
        return new Date().getTime() < expiresAt;
    }
}