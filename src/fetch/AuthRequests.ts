class AuthRequests {

    private serverUrl: string;
    private endpointLogin: string;

    constructor() {
        this.serverUrl = 'http://localhost:3333';
        this.endpointLogin = '/api/login';
    }


    async login(login: { email: string, senha: string }) {
        try {

      
            if (!login.email.endsWith('@adigital.com.br')) {
                throw new Error('O email deve ser do domínio @adigital.com.br');
            }

            const response = await fetch(`${this.serverUrl}${this.endpointLogin}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(login)
            });

            if (!response.ok) {
                throw new Error('Erro na autenticação');
            }

            const data = await response.json();
            console.log(data);

    
            if (data.auth) {
                this.persistToken(
                    data.token,
                    data.usuario.email,
                    data.usuario.id_usuario,
                    data.auth
                );
                return true;
            }

            return false;

        } catch (error) {
            console.error('Erro no login:', error);
            throw error;
        }
    }

    // 🔹 Salva dados no localStorage
    persistToken(token: string, email: string, idUsuario: number, isAuth: boolean) {
        localStorage.setItem('token', token);
        localStorage.setItem('email', email); 
        localStorage.setItem('idUsuario', idUsuario.toString());
        localStorage.setItem('isAuth', isAuth.toString());
    }

    // 🔹 Remove dados (logout)
    removeToken() {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('idUsuario');
        localStorage.removeItem('isAuth');

        window.location.href = '/login';
    }

    // 🔹 Verifica se o token expirou
    checkTokenExpiry() {
        const token = localStorage.getItem('token');

        if (!token) return false;

        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            const expiry = payload.exp;
            const now = Math.floor(Date.now() / 1000);

            if (expiry < now) {
                this.removeToken();
                return false;
            }

            return true;

        } catch (error) {
            console.error('Token inválido');
            this.removeToken();
            return false;
        }
    }
}

export default new AuthRequests();