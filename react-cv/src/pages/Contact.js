import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                    <div className="contactBox">
                        <h1>Contactez-moi</h1>
                        <ul>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Paris</span>
                            </li>
                            <li>
                                <i className="fas fa-mobile-alt"></i>
                                <CopyToClipboard text="+33647729629">
                                    <span 
                                    className="clickInput" 
                                    onClick={() => {alert('Téléphone copié !'); }}> +33 6 47 72 96 29</span>
                                </CopyToClipboard>
                            </li>
                            <li>
                                <i className="far fa-envelope"></i>
                                <CopyToClipboard text="planchenaultw@hotmail.fr">
                                    <span 
                                    className="clickInput" 
                                    onClick={() => {alert('Email copié !'); }}> planchenaultw@hotmail.fr </span>
                                </CopyToClipboard>
                            </li>
                        </ul>
                    </div>
                
                <div className="socialNetwork">
                    <ul>
                            <a href="https://www.linkedin.com/in/wayne-planchenault/" target="_blank" rel="noopener noreferrer">
                                <h4>Linkedin</h4>
                                <i className="fab fa-linkedin"></i>
                            </a>                        
                            <a href="https://github.com/WaynePlanchenault" target="_blank" rel="noopener noreferrer">
                                <h4>Github</h4>
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.instagram.com/wayne_pht/" target="_blank" rel="noopener noreferrer">
                                <h4>Instagram</h4>
                                <i className="fab fa-instagram"></i>
                            </a>                                              
                            <a href="https://codepen.io/Wayne_Planchenault" target="_blank" rel="noopener noreferrer">
                                <h4>Codepen</h4>
                                <i className="fab fa-codepen"></i>
                            </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;