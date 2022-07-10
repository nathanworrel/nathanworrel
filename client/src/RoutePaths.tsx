import {BrowserRouter as Router} from "react-router-dom";
import {Route, Routes} from "react-router";
import Welcome from "./welcomePage/Welcome";
import AboutMe from "./aboutMePage/AboutMe";
import Projects from "./projectsPage/Projects";
import WorkExperience from "./workExperiencePage/WorkExperience";
import ContactMe from "./contactMePage/ContactMe";

function RoutePaths() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/AboutMe" element={<AboutMe/>}/>
                <Route path="/Projects" element={<Projects/>}/>
                <Route path="/WorkExperience" element={<WorkExperience/>}/>
                <Route path="/ContactMe" element={<ContactMe/>}/>
            </Routes>
        </Router>
    );
}

export default RoutePaths;