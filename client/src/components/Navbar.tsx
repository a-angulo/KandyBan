import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

const Navbar = () => {
  const [loginCheck, setLoginCheck] = useState(auth.loggedIn());

  // Optional: Sync login status on route changes or manual checks
  useEffect(() => {
    const handleLoginStatus = () => {
      setLoginCheck(auth.loggedIn());
    };
    handleLoginStatus();
  }, []);

  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-white shadow fixed top-0 z-50">
      <Link
  to="/"
  className="text-2xl font-semibold hover:underline"
  style={{ color: '#e16262' }}
>
           </Link>
      <ul className="flex gap-4">
        {!loginCheck ? (
          <li>
            <Link to="/login">
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                Login
              </button>
            </Link>
          </li>
        ) : (
          <li>
            <button
              onClick={() => {
                auth.logout();
                setLoginCheck(false); // Force UI update
              }}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
