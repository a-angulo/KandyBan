import { useState, FormEvent, ChangeEvent } from 'react';
import Auth from '../utils/auth';
import { login } from '../api/authAPI';
import { UserLogin } from '../interfaces/UserLogin';

const Login = () => {
  const [loginData, setLoginData] = useState<UserLogin>({
    username: '',
    password: ''
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const data = await login(loginData);
      Auth.login(data.token);
    } catch (err: any) {
      setError(err.message || 'Failed to login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6"
        autoComplete="off"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800">Login</h1>

        <div>
          <label htmlFor="username" className="block mb-1 text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={loginData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
            autoComplete="username"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1 text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            placeholder="••••••••"
            required
            autoComplete="new-password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
        >
          Sign In
        </button>

        {error && <p className="text-red-500 text-center text-sm mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
