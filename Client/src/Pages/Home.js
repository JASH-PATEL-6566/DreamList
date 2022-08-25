import React from 'react';
import Places from './Places/Places'
import Popup from '../Components/popup/Popup';
import { useAuth } from '../Context/AuthContext';

function Home({ user }) {
    const { currentUser } = useAuth();
    return (
        <div className="container-home">
            {!currentUser &&
                <h1 className='not-log'>Please, Login First</h1>
            }
            {currentUser &&
                <>
                    <div className="log">
                        <Places />
                    </div>
                    <Popup />
                </>
            }
        </div>
    )
}

export default Home