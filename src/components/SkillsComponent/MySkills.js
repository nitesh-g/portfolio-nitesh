import React, { Component } from 'react'

import './MySkills.css'

export default class MySkills extends Component {
    render() {
        return(
        <div className="container">
            <h3 className="skill-title">My {this.props.title}</h3>
            <div className="row">
                <div className="col-xs-12 col-md-6 idea-tab">
                    
                </div>
                <div className="col-xs-12 col-md-6 code-tab">
                    Hello code tab
                </div>
            </div>
        </div>
        );
    }
}