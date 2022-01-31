import { Route, Routes } from 'react-router-dom';
import './App.css';
import { SignUp } from './pages/SignUp';
import { ThemeProvider } from '@mui/material';
import { theme } from './Theme';
import SignIn from './pages/SignIn';
// import { Home } from '@mui/icons-material';
import Home from './pages/Home';
import { Header } from './components/Header';
import useToken from './components/useToken';
// import { useState } from 'react';
// import { AuthProvider } from './components/AuthProvider';

function App() {
  const { setToken } = useToken();

  // const handleLogin = async () => {
  //   setToken(token);
  // };

  // const handleLogout = () => {
  //   setToken(null);
  // };

  return (
    <ThemeProvider theme={theme}>
      {/* <AuthProvider> */}

      <Header />

      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' index element={<SignIn />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>

      {/* </AuthProvider> */}
    </ThemeProvider>
  );
}

export default App;
