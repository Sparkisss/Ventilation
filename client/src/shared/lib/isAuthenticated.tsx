import React from 'react';
import { Navigate } from 'react-router'; // Используйте react-router-dom вместо react-router
const isAuthenticated = (flag: boolean) => flag;

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return isAuthenticated(true) ? <>{children}</> : <Navigate to="/" replace />;
};
