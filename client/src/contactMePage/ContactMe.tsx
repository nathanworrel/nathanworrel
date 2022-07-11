import {Header} from "../generalComponents/header/Header";
import {Footer} from "../generalComponents/footer/Footer";
import "./ContactMeCSS.css";

function ContactMe() {
    return(
        <main>
            <Header/>
            <div className="title-info">
                <h1>Contact Me</h1>
                <h3>Have something you would like to contact me about? Like to know more about a project?</h3>
            </div>
            <div className="contact-input-section">
                <label>Name *</label>
                <div id="contact-input-name-holder">
                    <input type="text" className="contact-input-name"></input>
                    <input type="text" className="contact-input-name"></input>
                    <label>First Name</label>
                    <label>Last Name</label>
                </div>
                <label>Email Address *</label>
                <input type="text"></input>
                <label>Subject *</label>
                <input type="text"></input>
                <label>Message *</label>
                <input type="text"></input>
                <button>Submit</button>
            </div>
            <Footer/>
        </main>
    )
}

export default ContactMe;