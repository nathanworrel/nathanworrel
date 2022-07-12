import {Header} from "../generalComponents/header/Header";
import {Footer} from "../generalComponents/footer/Footer";
import "./ContactMeCSS.css";

interface data{
    firstName:string;
    lastName:string;
    email:string;
    subject:string;
    message:string;
}

function ContactMe() {
    let info = {firstName:"",lastName:"",email:"",subject:"",message:""} as data;
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
                    <input type="text"
                           className="contact-input-name"
                           onChange={(e)=>{
                               info.firstName=e.target.value;
                           }}>
                    </input>
                    <input type="text"
                           className="contact-input-name"
                           onChange={(e)=>{
                               info.lastName=e.target.value;
                           }}>
                    </input>
                </div>
                <div id="contact-text-name-holder">
                    <label id="contact-first">First Name</label>
                    <label id="contact-last">Last Name</label>
                </div>
                <label>Email Address *</label>
                <div className="center">
                    <input type="text" id="contact-email-input"
                           onChange={(e)=>{
                               info.email=e.target.value;
                           }}></input>
                </div>
                <label>Subject *</label>
                <div className="center">
                    <input type="text" id="contact-subject-input"
                           onChange={(e)=>{
                               info.subject=e.target.value;
                           }}></input>
                </div>
                <label>Message *</label>
                <div className="center">
                    <textarea id="contact-message-input"
                              onChange={(e)=>{
                                  info.message=e.target.value;
                              }}></textarea>
                </div>
                <button id="contact-submit-button" onClick={()=>{console.log(info)}}>Submit</button>
            </div>
            <Footer/>
        </main>
    )
}

export default ContactMe;