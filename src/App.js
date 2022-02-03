import { Route, Routes } from 'react-router-dom';
import './App.css';
import { SignUp } from './pages/SignUp';
import { ThemeProvider } from '@mui/material';
import { theme } from './Theme';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import { Header } from './components/Header';
import { useEffect, useState } from 'react';
import { RequireAuth } from './components/RequireAuth';
import GetAllTasks from './pages/GetAllTasks';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwt');

    token && token.length > 0
      ? setIsAuthenticated(true)
      : setIsAuthenticated(false);
  }, []);

  const handleLogin = async (accesToken) => {
    setIsAuthenticated(true);
    localStorage.setItem('jwt', accesToken);
  };

  const handleLogout = async () => {
    setIsAuthenticated(false);
    localStorage.removeItem('jwt');
  };

  console.log('status', isAuthenticated);

  return (
    <ThemeProvider theme={theme}>
      <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/protected"
          element={
            <RequireAuth isAuthenticated={isAuthenticated}>
              <GetAllTasks />
            </RequireAuth>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn handleLogin={handleLogin} />} />
        {/* <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/signin"} />} /> */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
