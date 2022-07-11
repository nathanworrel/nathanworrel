import {useNavigate} from "react-router";
import "./HeaderCSS.css";


export function Header(){
    let navigate = useNavigate();
    const changePage = (path:string) =>{
        navigate(path);
    }
    return(
        <>
            <header className="header-name">
                <p className="header-name-text">
                    Nathaniel Worrel
                </p>
            </header>
            <div className="header-button">
                <span>
                    <button className="header-button-text"
                            onClick={()=>{changePage('/')}}>
                        Overview
                    </button>
                </span>
                <span>
                    <button className="header-button-text"
                            onClick={()=>{changePage('/AboutMe')}}>
                        About Me
                    </button>
                </span>
                <span>
                    <button className="header-button-text"
                            onClick={()=>{changePage('/Projects')}}>
                        Projects
                    </button>
                </span>
                <span>
                    <button className="header-button-text"
                            onClick={()=>{changePage('/WorkExperience')}}>
                        Work Experience
                    </button>
                </span>
                <span>
                    <button className="header-button-text"
                            onClick={()=>{changePage('/ContactMe')}}>
                        Contact Me
                    </button>
                </span>
            </div></>
    )

}