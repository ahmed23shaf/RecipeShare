import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './SocialIcons.css';

function SocialIcons() {
    return (
        <div className="social-icons">
            <a href="https://github.com/ahmed23shaf" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
            <a href="https://linkedin.com/in/ahmedshaf" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
        </div>
    );
}

export default SocialIcons;
