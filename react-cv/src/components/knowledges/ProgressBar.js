import React from 'react';

const ProgressBar = (props) => {

    console.log(props);
    //props retourne un object content le className du composant, son title 
    // ainsi que le state de languages.js qui lui est attribué

    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className="years">
                <span>Années d'experience</span>
                <span>1 an</span>
                <span>2 ans </span>
            </div>

            <div>
                {
                    props.languages.map((item) => {
                        let xpYears = 2;
                        let progressBar = item.xp / xpYears * 100 + '%';

                        return (
                            <div key={item.id} className='languagesList'>
                                <li>{item.value}</li>
                                <div className="progressBar" style={{width:progressBar}}></div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default ProgressBar;