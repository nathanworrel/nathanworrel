import {Header} from "../generalComponents/header/Header";
import {Footer} from "../generalComponents/footer/Footer";

function Welcome() {
    return(
        <>
            <Header/>
            <h1 id="welcome">
                Welcome!!
            </h1>
            <div id="welcome-information">
                <div id={"welcome-image"}>
                    <p>Put Image Here</p>
                </div>
                <div id="welcome-text">
                    <p>
                        Hello!! I'm Nathaniel Worrel a Senior at the University of Michigan studying computer science.
                        I made this website to show help showcase who I am and what I am capiable of.
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Welcome;