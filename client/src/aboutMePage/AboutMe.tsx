import {Header} from "../generalComponents/header/Header";
import {Footer} from "../generalComponents/footer/Footer";
import {Slideshow} from "./Slideshow";

function AboutMe() {
    return(
        <main>
            <Header/>
            <h1>About Me:)</h1>
            <div>
                <Slideshow/>
            </div>
            <Footer/>
        </main>
    )
}

export default AboutMe;