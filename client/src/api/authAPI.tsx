import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      let message = 'Login failed!';
      try {
        const errorResponse = await response.json();
        message = errorResponse.message || message;
      } catch {
        // Non-JSON response fallback
      }
      throw new Error(message);
    }

    return await response.json();
  } catch (err) {
    console.error('Login error:', err);
    throw err;
  }
};

export { login };