import React, { Component } from 'react';
import regulations from '../documents/regulations.pdf'

export default class Regulations extends Component {
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <a href={regulations}>Click here for regulations!</a>
            </div>
        )
    }
}



