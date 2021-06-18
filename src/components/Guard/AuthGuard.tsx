import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'src/context/authContext';

const AuthGuard = ({ children }: { children: ReactNode }) => {
  const {
    authState: { isAuthenticated },
  } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to='/' replace={true} />;
  }

  return <>{children}</>;
};

export default AuthGuard;
