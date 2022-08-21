import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

function SharedLayout({ user, setUser }) {
    return (
        <>
            <Navbar user={user} setUser={setUser} />
            <Outlet user={user} />
        </>
    )
}

export default SharedLayout;