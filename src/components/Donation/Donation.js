import React from 'react';
import './Donation.css'

const Donation = (props) => {
    const { donate } = props;

    // total ammount
    let total = 0;
    for (const ammount of donate) {
        total = total + ammount.donate;
    }
    return (
        <div className="donation-count">
            <h3>Total Donation: {donate.length}</h3>
            <h3>Total Amount: ${total}</h3>
            {
                donate.map(agency => <h3
                    className="name-style"
                    key={agency.key}
                >{agency.name}</h3>)
            }
        </div>
    );
};

export default Donation;