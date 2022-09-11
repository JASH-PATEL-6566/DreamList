import React from 'react'
import PopupForm from './PopupForm';

function Popup({ popup }) {

    return (
        <div className={`popup_container ${!popup ? 'display_none' : ''}`}>
            <PopupForm />
        </div>
    )
}

export default Popup;