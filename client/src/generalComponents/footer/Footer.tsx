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
                <a href={"https://docs.google.com/document/d/1eixjJxHcj45tm1ZxuSuhg-qNQQAtQseBNF61OXAVGNM/edit?usp=sharing"}>
                    <FontAwesomeIcon className={"icon"}
                                 icon={faFile}
                                 onClick={() => {
                                 }}
                    />
                </a>
                <a href={"https://www.linkedin.com/in/nathaniel-worrel-832bb5208/"}>
                    <FontAwesomeIcon className={"icon"}
                                 icon={faLinkedin}
                    />
                </a>
            </div>
        </div>
    )
}