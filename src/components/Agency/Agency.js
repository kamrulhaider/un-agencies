import React from 'react';
import './Agency.css'

const Agency = (props) => {

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
            <button onClick={() => props.donateOnClick(props.data)} className="donate-btn">Donate</button>
        </div>
    );
};

export default Agency;