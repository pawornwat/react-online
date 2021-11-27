import React from "react";
import PropTypes from 'prop-types';



const Footer = ({title,website,address,postcode,isOpen}) =>{
    return(
        <div>
            <h3>{title} &copy; {new Date().getFullYear()}</h3>
            <p>{website} {address} {postcode} {isOpen.toString()} </p>
        </div>
    )
}
    
Footer.propTypes = {
    title: PropTypes.string,
    website: PropTypes.string,
    address: PropTypes.string,
    isOpen:PropTypes.bool,
    postcode:PropTypes.number
};

export default Footer