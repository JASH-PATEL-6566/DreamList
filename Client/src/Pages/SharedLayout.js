import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

function SharedLayout({ user }) {
    return (
        <div className='shared'>
            <Navbar user={user} />
            <Outlet />
        </div>
    )
}

export default SharedLayout;