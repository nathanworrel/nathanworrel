import {Header} from "../generalComponents/header/Header";
import {Footer} from "../generalComponents/footer/Footer";
import "./ContactMeCSS.css";
import emailjs from '@emailjs/browser';

function ContactMe() {
    let info = {firstName:"",lastName:"",email:"",subject:"",message:""};
    const sendEmail = () =>{
        if(info.firstName ===""){
            alert("Missing a First Name")
        }else if(info.lastName ===""){
            alert("Missing a Last Name")
        }else if(info.email ===""){
            alert("Missing an Email")
        }else if(info.subject ===""){
            alert("Missing a Subject")
        }else if(info.message ===""){
            alert("Missing a message")
        }
        else{
            emailjs.send('service_05e5doa', 'template_q26zpin', info, 'SBR1uBSozNTsCCE5J')
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert("Successfully sent");
                }, function (error) {
                    console.log('FAILED...', error);
                });
        }
    }
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
                <button id="contact-submit-button" onClick={()=>{sendEmail()}}>Submit</button>
            </div>
            <Footer/>
        </main>
    )
}

export default ContactMe;