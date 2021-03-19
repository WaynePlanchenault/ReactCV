import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby"><i className="fas fa-running"></i><span> Sport</span></li>
                <li className="hobby"><i className="fas fa-hiking"></i><span> Sensations fortes</span></li>
                <li className="hobby"><i className="fas fa-plane-departure"></i><span> Voyages</span></li>
                <li className="hobby"><i className="fab fa-bitcoin"></i><span> Crypto-monnaies</span></li>
                <li className="hobby"><i className="fas fa-fire"></i><span> Danses latines</span></li>
            </ul>
        </div>
    );
};

export default Hobbies;