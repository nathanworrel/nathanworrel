import {Header} from "../generalComponents/header/Header";
import {Footer} from "../generalComponents/footer/Footer";
import "./ProjectsCSS.css";

function Projects() {
    return(
        <main>
            <Header/>
            <h1>Projects</h1>
            <div>
                <h3>I need another Project</h3>
                <h3>Ford Survey Creator/Taker</h3>
                <h3>Chat Room Project</h3>
                <h3>Minesweeper Reinforement Project</h3>
                <h3>This Website</h3>
            </div>
            <Footer/>
        </main>
    )
}

export default Projects;