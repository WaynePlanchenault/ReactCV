import React from 'react';
import Experience from '../components/knowledges/Experience';
import Languages from '../components/knowledges/Languages';
import OtherSkills from '../components/knowledges/OtherSkills';
import Navigation from '../components/Navigation';
import Hobbies from '../components/knowledges/Hobbies';

const Knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation />
            <div className="knowledgesContent">
                <Languages />
                <Experience />
                <OtherSkills />
                <Hobbies />
            </div>
        </div>
    );
};

export default Knowledges;