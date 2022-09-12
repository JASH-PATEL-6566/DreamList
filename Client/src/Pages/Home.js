import React, { useRef, useState } from 'react';
import Places from './Places/Places'
import Popup from '../Components/popup/Popup';
import { useAuth } from '../Context/AuthContext';
import Add from '../Components/Add/Add';

function Home({ user, data }) {
    const { currentUser } = useAuth();
    const add = useRef();
    const [popup, setPopup] = useState(false);

    return (
        <div className="container-home">
            {!currentUser &&
                <h1 className='not-log'>Please, Login First</h1>
            }
            {currentUser &&
                <>
                    <div className="log">
                        <Places data={data} />
                    </div>
                    <Add add={add} setPopup={setPopup} popup={popup} />
                    <Popup popup={popup} />
                </>
            }
        </div>
    )
}

export default Home