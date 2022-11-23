import { Route, redirect } from 'react-router-dom';
import NotFound from '~/pages/NotFound';

function PrivateRoute({ isLogin, children }) {
    return isLogin ? children : <NotFound />;
}

export default PrivateRoute;
