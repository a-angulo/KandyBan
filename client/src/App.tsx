import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="container">
      {/* Global navigation bar */}
      <Navbar />

      {/* Main content rendered by the router */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
