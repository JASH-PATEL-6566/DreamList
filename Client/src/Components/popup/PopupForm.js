import React, { useRef, useState } from 'react'
import axios from 'axios';
import { useAuth } from '../../Context/AuthContext';

function PopupForm() {
    const [data, setData] = useState({
        name: '',
        discription: '',
        image_link: ''
    })
    const [image, setImage] = useState();
    const { currentUser } = useAuth();
    const input_image = useRef();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        const formData = new FormData();
        formData.append("file", image);
        formData.append('upload_preset', "fj9qtg5s");

        axios.post('https://api.cloudinary.com/v1_1/dreamlist/image/upload', formData)
            .then(res => {
                // console.log(res.data.secure_url);
                setData({ ...data, image_link: res.data.secure_url })
                axios.post("http://localhost:9002/", { data, message: 'ADD_PLACE', userId: currentUser.uid })
                    .then(res => console.log(res))
                setData({ name: '', discription: '', image_link: '' })
                input_image.current.value = '';
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
                alert('something went wrong.....please try again')
            })
    }

    return (
        <div className="popup_form">
            <form onSubmit={handleSubmit}>
                <h1>Add New Place</h1>
                <hr />
                <label htmlFor="place_name">Place Name :</label>
                <input required type="text" id='place_name' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />

                <label htmlFor="place_dis">Place Discription :</label>
                <textarea required name="description" id='place_dis' cols="20" rows="5" value={data.discription} onChange={(e) => setData({ ...data, discription: e.target.value })} />

                <label htmlFor="place_img">Place Image</label>
                <input required ref={input_image} type="file" name="place_img" id="place_img" accept=".jpg , .jpeg , .jfif , .pjpeg , .pjp,.png,.svg" onChange={(e) => setImage(e.target.files[0])} />

                <button className='btn-add-place' type='submit'>
                    {!loading ? "Add Place" : "Loading...."}
                </button>
            </form>
        </div >
    )
}

export default PopupForm;