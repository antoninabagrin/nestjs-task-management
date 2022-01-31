import { Route, Routes } from 'react-router-dom';
import './App.css';
import { SignUp } from './pages/SignUp';
import { ThemeProvider } from '@mui/material';
import { theme } from './Theme';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import { Header } from './components/Header';
import { useEffect, useState } from 'react';
import Dashboard from './pages/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    let token = localStorage.getItem('jwt');
    token && JSON.parse(token)
      ? setIsAuthenticated(true)
      : setIsAuthenticated(false);
  }, []);

  useEffect(() => {
    localStorage.setItem('jwt', isAuthenticated);
  }, [isAuthenticated]);

  // const handleLogin = async () => {
  //   setIsAuthenticated(isAuthenticated);
  // };

  // const handleLogout = () => {
  //   setIsAuthenticated(null);
  // };

  return (
    <ThemeProvider theme={theme}>
      <Header isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/signin"
          index
          element={<SignIn setIsAuthenticated={setIsAuthenticated} />}
        />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
