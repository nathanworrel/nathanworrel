import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
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
                        <img src={slideImage.url}></img>
                    </div>
                ))}
            </Slide>
        </div>
    )
}