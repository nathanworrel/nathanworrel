import {Header} from "../generalComponents/header/Header";
import {Footer} from "../generalComponents/footer/Footer";
import "./WorkExperienceCSS.css";

function WorkExperience() {
    return(
        <main>
            <Header/>
            <h1 className="title-info">Work Experience</h1>
            <div id="work-experience-info">
                <div className="experience-box">
                    <h3>Ford Software Designer</h3>
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
                        <span>Image</span>
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
                        <span>Image</span>
                        <p>
                            This is the information.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    )
}

export default WorkExperience;