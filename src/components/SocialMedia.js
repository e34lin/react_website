import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithubAlt,
    faInstagram,
    faLinkedinIn
  } from "@fortawesome/free-brands-svg-icons";


export default function SocialFollow() {
    
    return (
        <div class='social-container'>

            <a href="https://www.linkedin.com/in/e34lin/" target='_blank' rel="noopener noreferrer" className="linkedin social">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>

            <a href="https://github.com/e34lin" target='_blank' rel="noopener noreferrer" className="github social">
                <FontAwesomeIcon icon={faGithubAlt}/>
            </a>

            <a href="https://www.instagram.com/_lizzy.foodie" target='_blank' rel="noopener noreferrer" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} />
            </a>

        </div>
    )
}