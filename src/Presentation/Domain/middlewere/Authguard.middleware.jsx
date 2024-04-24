import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const AuthGuardMiddleware = ({ isLogin }) => {
    const token = localStorage.getItem('token')
    if(token) {
        return<Outlet />;
    } else {
        return<Navigate to="/" />
    }
}

export default AuthGuardMiddleware
