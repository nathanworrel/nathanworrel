import {BrowserRouter as Router} from "react-router-dom";
import {Route, Routes} from "react-router";
import WelcomePage from "./welcomePage/WelcomePage";


function RoutePaths() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage/>}/>
            </Routes>
        </Router>
    );
}

export default RoutePaths;