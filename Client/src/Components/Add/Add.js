import React from 'react'
import { BsPlusLg } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function Add({ setPopup, popup }) {
    return (
        <div className='btn-add' onClick={() => setPopup(!popup)}>
            <BsPlusLg className={`plus-img ${popup ? 'btn-add-rotated' : ''}`} size={35} />
        </div>
    )
}

export default Add