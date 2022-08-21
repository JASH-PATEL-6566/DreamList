import React from 'react'
import { FaSearch } from 'react-icons/fa';
import img from '../../test_img/img.webp';

function Places() {
    return (
        <div className="places-container">
            <div className="form-container">
                <input type="text" className='find-place' placeholder='Search Your Place' />

                <button className='search-btn'><FaSearch size={20} className='search-img' /></button>
            </div>
            <div className="place-card-container">
                <div className="place-card">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Places