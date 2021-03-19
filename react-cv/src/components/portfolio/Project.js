import React, { Component } from 'react';

class project extends Component {

    state = {
        showInfo: false
    }

    handleInfo = () => {
        //permet d'inverser la valeur de showInfo quelle qu'elle soit 
        this.setState({
            showInfo:!this.state.showInfo
        })
    }

    render() {
        //console.log(this.props); 
        let {name, languagesIcons, source, info, picture} = this.props.item;
        //name deviens this.props.item.name, item est la map d'un seul élément 

        return (
            <div className="project">
                <div className="icons">
                    {languagesIcons.map(icon => 
                        <i className={icon} keu={icon}></i>
                        )}
                </div>
                <h3>{name}</h3>
                <img src={picture} alt="" onClick={this.handleInfo} />
                <span className="infos" onClick={this.handleInfo}>
                    <i className="fas fa-plus-circle"></i>
                </span>

                {
                    this.state.showInfo && (
                        //si showInfo est true alors il affiche le JSX 
                        <div className="showInfos">
                            <div className="infosContent">
                                <div className="head">
                                    <h2>{name}</h2>
                                    <div className="sourceCode">
                                        <a href={source} rel="noopener noreferrer" className="button" target="_blank">Code source</a>
                                    </div>
                                </div>

                                <p className="text">{info}</p>

                                <div className="button return" onClick={this.handleInfo} >Retourner sur la page</div>
                            </div>
                        </div>
                    )
                }

            </div>
        );
    }
}

export default project;