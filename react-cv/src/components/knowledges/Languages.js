import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {

    state = {
        languages: [
            {id: 1, value: "Javascript", xp:1.8},
            {id: 2, value: "Css", xp:2},
            {id: 3, value: "PHP", xp:0.7},
            {id: 4, value: "Python", xp:0.4},
        ],

        frameworks: [
            {id: 1, value: "React", xp:1.4},
            {id: 2, value: "Bootstrap", xp:2},
            {id: 3, value: "Sass", xp:1.5},
            {id: 4, value: "Material UI", xp:0.5},
        ],

    }
    render() {

        let {languages, frameworks} = this.state;
        //correspond au state contenu dans la class via le this 

        return (
            <div className="languagesFrameworks">

                <ProgressBar 
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />

                <ProgressBar 
                    languages={frameworks}
                    className="frameworksDisplay"
                    title="frameworks & bibliothèques"
                />
            </div>
        );
    }
}

export default Languages;