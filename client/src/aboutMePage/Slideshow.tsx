import React from 'react';
import { Slide } from 'react-slideshow-image';
import "./SlideshowCss.css";
import photo from "./FacePhoto.jpg";

const slideImages = [
    {
        url: photo,
        caption: 'Slide 1'
    },
    {
        url: photo,
        caption: 'Slide 2'
    },
    {
        url: photo,
        caption: 'Slide 3'
    },
];

export const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div className="each-slide" key={index}>
                        <img className={"each-image"} src={slideImage.url} alt={slideImage.caption}></img>
                        <label>
                            {slideImage.caption}
                        </label>
                    </div>
                ))}
            </Slide>
        </div>
    )
}