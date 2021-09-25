import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faDonate } from '@fortawesome/free-solid-svg-icons'
import './Agency.css'

const Agency = (props) => {

    // font awesome 
    const element = <FontAwesomeIcon icon={faDonate} />

    // distructuring object
    const { img, name, elaboration, headquater, birth, donate } = props.data;

    return (
        <div className="agency">
            <img className="agency-img" src={img} alt="" />
            <h2>{name}</h2>
            <p>{elaboration}</p>
            <p>Headquater: {headquater}</p>
            <p>Stablished in: {birth}</p>
            <h3>Donate: ${donate}</h3>
            <button onClick={() => props.donateOnClick(props.data)} className="donate-btn">{element} Donate</button>
        </div>
    );
};

export default Agency;