import { useLocation, Navigate } from 'react-router-dom';
import { useState } from 'react';

export function RequireAuth({ children }) {
  const [isAuthenticated] = useState(false);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
}
