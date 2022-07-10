import {useNavigate} from "react-router";
import "./HeaderCSS.css";


export function Header(){
    let navigate = useNavigate();
    const changePage = (path:string) =>{
        navigate(path);
    }
    return(
        <>
            <div className="header-name">
                <p className="header-name-text">
                    Nathaniel Worrel
                </p>
            </div>
            <div className="header-button">
                <button className="header-button-text"
                        onClick={()=>{changePage('/')}}>
                    Overview
                </button>
                <button className="header-button-text"
                        onClick={()=>{changePage('/AboutMe')}}>
                    About Me
                </button>
                <button className="header-button-text"
                        onClick={()=>{changePage('/Projects')}}>
                    Projects
                </button>
                <button className="header-button-text"
                        onClick={()=>{changePage('/WorkExperience')}}>
                    Work Experience
                </button>
                <button className="header-button-text"
                        onClick={()=>{changePage('/ContactMe')}}>
                    Contact Me
                </button>
            </div></>
    )

}