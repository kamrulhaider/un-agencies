import React, { useEffect, useState } from 'react';
import Agency from '../Agency/Agency';
import Donation from '../Donation/Donation';
import './Agencies.css';

const Agencies = () => {
    // state declaration
    const [agencies, setAgencies] = useState([]);
    const [donate, setDonate] = useState([]);

    // fetching data from public folder
    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setAgencies(data))
    }, []);

    // event handler
    const donateOnClick = (data) => {
        const newDonate = [...donate, data];
        setDonate(newDonate);
    }
    return (
        <div className="agencies-container">
            <div>
                <div className="agencies">
                    {
                        agencies.map(agency => <Agency
                            key={agency.key}
                            data={agency}
                            donateOnClick={donateOnClick}
                        ></Agency>)
                    }
                </div>
            </div>
            <div className="count-panel">
                <Donation
                    donate={donate}
                ></Donation>
            </div>
        </div>
    );
};

export default Agencies;