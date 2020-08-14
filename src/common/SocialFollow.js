import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./SocialFollow.css";

export default function SocialFollow() {
  return (
    <div>
        <a href="https://www.linkedin.com/in/melissa-ahn/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin">
                <FontAwesomeIcon icon={['fab', 'linkedin']} size="4x" />
            </a>
        <a href="https://github.com/ahnmelis"
            target="_blank"
            rel="noopener noreferrer"
            className="github">
                <FontAwesomeIcon icon={['fab', 'github']} size="4x" />
            </a>
    </div>
  );
}