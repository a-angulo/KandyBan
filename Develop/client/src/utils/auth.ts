import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    const token = this.getToken();
    return token ? jwtDecode<JwtPayload>(token) : null;
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (!decoded.exp) return true;

      const currentTime = Date.now() / 1000;
      return decoded.exp < currentTime;
    } catch (err) {
      console.error("Failed to decode token:", err);
      return true;
    }
  }

  getToken(): string {
    // TODO: return the token
    return localStorage.getItem('jwt_token') || '';
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    localStorage.setItem('jwt_token', idToken);

    // TODO: redirect to the home page
    window.location.assign('/');
  }

  logout() {
    // TODO: remove the token from localStorage
    localStorage.removeItem('jwt_token');

    // TODO: redirect to the login page
    window.location.assign('/login');
  }
}

export default new AuthService();
