import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import "./FooterCSS.css";
import React from "react";

export function Footer() {
    return (
        <div className="footer">
            <p>
                Phone Number: 248-901-6571
            </p>
            <p>
                Email: ncworrel@gmail.com
            </p>
            <p>
                links:
            </p>
            <div> Resume:
                <FontAwesomeIcon className={"icon"}
                                 icon={faFile}
                                 onClick={() => {
                                 }}
                />
                <FontAwesomeIcon className={"icon"}
                                 icon={faLinkedin}
                                 onClick={() => {
                                 }}
                />
            </div>
        </div>
    )
}