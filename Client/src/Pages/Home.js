import React from 'react';
import Places from './Places/Places'

function Home({ user }) {
    return (
        <div className="container-home">
            {!user &&
                <h1 className='not-log'>Please, Login First</h1>
            }
            {user &&
                <div className="log">
                    <Places />
                </div>
            }
        </div>
    )
}

export default Home