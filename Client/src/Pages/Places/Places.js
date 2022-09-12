import React from 'react'
import { FaSearch } from 'react-icons/fa';
import img from '../../test_img/img.webp';
import download from '../../test_img/download.jpg';


function Places({ data }) {
    console.log(data);

    return (
        <div className="places-container">
            <div className="form-container">
                <input type="text" className='find-place' placeholder='Search Your Place' />

                <button className='search-btn'><FaSearch size={20} className='search-img' /></button>
            </div>
            <div className="place-card-container">
                {/* <div className="place-card">
                    <img className='image' src={download} alt="" />
                    <div className="overlay">
                        <div className="text">Black Hole</div>
                    </div>
                </div> */}
                {data && data.places.map((item) => {
                    const { name, discription, image_link } = item;
                    console.log(image_link);
                    return (
                        <div className="place-card">
                            <img className='image' src={image_link} alt={name} />
                            <div className="overlay">
                                <div className="text">
                                    {name}
                                </div>
                                <p className="discription">
                                    {discription}
                                </p>
                            </div>
                        </div>
                    )
                })
                }
            </div>

        </div>
    )
}

export default Places