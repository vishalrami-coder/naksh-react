import React from "react";
import '../assets/css/ContactInfoCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ContactInfoCard = ({ icon, title, content, link, linkText }) => {
    return (
        <div className="icon_box_05 ib5_left">
            <i>{icon}</i>
            <div className="ib5_inner">
                <h3>{title}</h3>
                <p>{content}</p>
                <a href={link}>{linkText}</a>
            </div>
        </div>
    );
};

export default ContactInfoCard;