import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

function SharedLayout({ user }) {
    return (
        <>
            <Navbar user={user} />
            <Outlet />
        </>
    )
}

export default SharedLayout;