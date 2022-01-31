// import { useAuth } from '../components/useAuth';
import SignIn from './SignIn';
import useToken from '../components/useToken';

export function Home() {
  // const { token } = useAuth();
  const { token, setToken } = useToken();

  if (!token) {
    return <SignIn setToken={setToken} />;
  }

  return <h1>Home</h1>;
}
