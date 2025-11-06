import { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

export function requireAuth<P extends object>(Component: ComponentType<P>) {
  return function AuthenticatedComponent(props: P) {
    const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

    if (!isAuthenticated) {
      return <Navigate to="/" replace />;
    }

    return <Component {...props} />;
  };
}
