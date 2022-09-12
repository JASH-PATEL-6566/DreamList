import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

function SharedLayout({ user, data }) {
    return (
        <div className='shared'>
            <Navbar user={user} data={data} />
            <Outlet />
        </div>
    )
}

export default SharedLayout;