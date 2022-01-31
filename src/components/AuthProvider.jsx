// import { useState } from 'react';
// import { createContext } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AuthContext = createContext(null);

// async function userLogin(credentials) {
//   console.log(credentials);
//   return fetch('http://localhost:3000/auth/signin', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(credentials),
//   }).then((data) => data.json());
// }

// export function AuthProvider(children) {
//   const [token, setToken] = useState(null);
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     const token = await userLogin();

//     setToken(token);
//     navigate('/home');
//   };

//   const handleLogout = () => {
//     setToken(null);
//   };

//   const value = {
//     token,
//     onLogin: handleLogin,
//     onLogout: handleLogout,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }
