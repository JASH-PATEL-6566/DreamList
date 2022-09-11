import React from 'react'

function PopupForm() {
    return (
        <div className="popup_form">
            <h1>Add New Place</h1>
            <hr />
            <label htmlFor="place_name">Place Name :</label>
            <input type="text" id='place_name' />
            <label htmlFor="place_dis">Place Discription :</label>
            <textarea name="description" id='place_dis' cols="20" rows="5" />
            <label htmlFor="place_img">Place Image</label>
            <input type="file" name="place_img" id="place_img" />
            <button className='btn-add-place'>Add Place</button>
        </div >
    )
}

export default PopupForm;