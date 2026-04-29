import { Navigate } from 'react-router-dom';
import AuthRequests from '../../fetch/AuthRequests';

interface ProtectedRouteProps {
    element: React.ReactElement;
}

function ProtectedRoute({ element }: ProtectedRouteProps) {
    const isAuthenticated = localStorage.getItem('isAuth') === 'true';
    const tokenIsValid = AuthRequests.checkTokenExpiry();

    // Se não está autenticado ou token expirou, redireciona para login
    if (!isAuthenticated || !tokenIsValid) {
        return <Navigate to="/login" replace />;
    }

    // Se está autenticado, renderiza o componente
    return element;
}

export default ProtectedRoute;
