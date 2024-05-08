import React from 'react';
import './Gallery.css';
import img1 from "../assests/images/img1.jpg"
import img2 from "../assests/images/img2.jpg"
import img3 from "../assests/images/img3.jpg"
import img4 from "../assests/images/img4.jpg"
import img5 from "../assests/images/img5.jpg"

// Define the ImageGallery component
const Gallery = () => {
    return (
        <div>
            {/* Image Gallery Part */}
            <div className="image-part">
                <img src={img1} alt="Imag 1" />
                <img src={img2} alt="Imag 2" />
            </div>

            {/* Image Gallery Part 1 */}
            <div className="image-part1">
                <img src={img3} alt="Imag 3" />
                <img src={img4} alt="Imag 4" />
                <img src={img5} alt="Imag 5" />
            </div>
        </div>
    );
}

export default Gallery;