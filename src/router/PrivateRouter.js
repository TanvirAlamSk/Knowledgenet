import React, { useContext } from 'react';
import { AuthContext } from '../context/UserContext/UserContext';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../component/Loader/Loader';

const PrivateRouter = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()
    if (loader) {
        return <Loader></Loader>
    }
    if (user) {
        return children;
    }
    else {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
};

export default PrivateRouter;