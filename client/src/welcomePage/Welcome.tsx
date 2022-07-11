import {Header} from "../generalComponents/header/Header";
import {Footer} from "../generalComponents/footer/Footer";
import React from 'react';
import picture from './FacePhoto.jpg';
import "./WelcomeCSS.css"

function Welcome() {
    return(
        <main>
            <Header/>
            <div>
                <div className="center">
                    <h1 id="welcome">
                        Welcome!!
                    </h1>
                </div>
                <div id="welcome-information" className="center">
                    <div>
                        <img src={picture}
                             alt="Photo of Nathaniel Worrel in a suit."
                             id={"welcome-image"}/>
                    </div>
                    <div id="welcome-text">
                        <p>
                            Hello!! I'm Nathaniel Worrel a Senior at the University of Michigan studying computer science.
                            I made this website to show help showcase who I am and what I am capiable of.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    )
}

export default Welcome;