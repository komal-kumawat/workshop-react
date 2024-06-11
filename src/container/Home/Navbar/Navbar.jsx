import React from "react";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin ,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';
const Navbar = ()=>{
    return (<div className="navbar">
        <FontAwesomeIcon icon={faFacebook}  className="facebook icons"/>
        <FontAwesomeIcon icon={faLinkedin} className="linkedin icons"/>
        <FontAwesomeIcon icon={faTwitter} className="twitter icons" style={{ color: '#1DA1F2' }}/>
        <FontAwesomeIcon icon={faInstagram} className="instagram icons" />
    </div>)
}
export default Navbar;
