import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth();
    return currentUser ? <Outlet /> : <Navigate to="/login" />

}
