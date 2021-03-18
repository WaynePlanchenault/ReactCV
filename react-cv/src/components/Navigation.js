import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/photo_de_profil.jpg" alt="Photo de profil"/>
                    <h3>Wayne Planchenault</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to ="/" activeClassName="navActive">  {/* on met une classe que quand le lien est actif */}
                            <i className="fas fa-home"></i> {/* le petit icon */}
                            <span>Acceuil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to ="/competences" activeClassName="navActive">  
                            <i className="fas fa-mountain"></i> 
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to ="/portfolio" activeClassName="navActive">  
                            <i className="fas fa-images"></i> 
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to ="/contact" activeClassName="navActive">  
                            <i className="fas fa-address-book"></i> 
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>

                <div className="socialNetwork">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/wayne-planchenault/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a href="https://github.com/WaynePlanchenault" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/wayne_pht/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href="https://codepen.io/Wayne_Planchenault" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
                        </li>
                    </ul>

                    <div className="signature">
                        <p>Wayne Planchenault - 2021</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;