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
                <div className="center">
                    <input type="text" className="contact-input-name"></input>
                    <input type="text" className="contact-input-name"></input>
                </div>
                <div id="contact-text-name-holder">
                    <label id="contact-first">First Name</label>
                    <label id="contact-last">Last Name</label>
                </div>
                <label>Email Address *</label>
                <div className="center">
                    <input type="text" id="contact-email-input"></input>
                </div>
                <label>Subject *</label>
                <div className="center">
                    <input type="text" id="contact-subject-input"></input>
                </div>
                <label>Message *</label>
                <div className="center">
                    <textarea id="contact-message-input"></textarea>
                </div>
                <button id="contact-submit-button">Submit</button>
            </div>
            <Footer/>
        </main>
    )
}

export default ContactMe;