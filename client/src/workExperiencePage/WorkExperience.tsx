import {Header} from "../generalComponents/header/Header";
import {Footer} from "../generalComponents/footer/Footer";
import "./WorkExperienceCSS.css";
import CommunityCenter from "../images/troy-community-center.jpeg";
import React from "react";
import RobotPhoto from "../images/HomeCareRobot.png";
import chip from "../images/chipotleBHouse.jpeg";
import CHWOTd from "../images/CHWOTD.png";
import Dealer from "../images/DealerSurvey.png";
import Lawn from "../images/lawnAeration.jpeg";
import PCSupply from "../images/PCSupply.jpeg";

function WorkExperience() {
    return(
        <main>
            <Header/>
            <h1 className="title-info">Work Experience</h1>
            <div id="work-experience-info">
                <div className="experience-box">
                    <h3>Ford Software Engineer Intern</h3>
                    <div>
                        <span>Image</span>
                        <p>
                            This is the information.
                        </p>
                    </div>
                </div>
                <span>&nbsp;&nbsp;</span>
                <div className="experience-box">
                    <h3>MindHome Product Designer/Software Engineer</h3>
                    <div>
                        <img src={RobotPhoto}
                             alt="Troy Community Center"
                             id={"welcome-image"}/>
                        <p>
                            This is the information.
                        </p>
                    </div>
                </div>
                <span>&nbsp;&nbsp;</span>
                <div className="experience-box">
                    <h3>Chipotle Back Of House Trainer</h3>
                    <div>
                        <span>Image</span>
                        <p>
                            This is the information.
                        </p>
                    </div>
                </div>
                <span>&nbsp;&nbsp;</span>
                <div className="experience-box">
                    <h3>PC Supply Computer Repair Technician</h3>
                    <div>
                        <span>Image</span>
                        <p>
                            This is the information.
                        </p>
                    </div>
                </div>
                <span>&nbsp;&nbsp;</span>
                <div className="experience-box">
                    <h3>Down to Earth Aerator Technician</h3>
                    <div>
                        <span>Image</span>
                        <p>
                            This is the information.
                        </p>
                    </div>
                </div>
                <span>&nbsp;&nbsp;</span>
                <div className="experience-box">
                    <h3>Ski Supervisor</h3>
                    <div>
                        <img src={CommunityCenter}
                             alt="Troy Community Center"
                             id={"welcome-image"}/>
                        <p>
                            Worked at the Troy Community Center as a Ski Supervisor for elemetry schoolers.<br></br>
                            In this job I had to monitor a group of 5-7 middle schoolers for an entire day as we went down
                            different sections of the hill at mount holly. This also included taking them to ski class and reinforcing
                            the skills taught at ski class.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    )
}

export default WorkExperience;