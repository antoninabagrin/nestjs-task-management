import { useLocation, Navigate } from 'react-router-dom';

export function RequireAuth({ isAuthenticated, children }) {
  const location = useLocation();

  console.log(isAuthenticated);
  console.log(children);
  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
}
