import React, { Component } from 'react'
import './Page1.css'
import { Component1, Component2 } from './../components'
export default class Page1 extends Component {
    render() {
        return (
            <div className="Page1">
                <h1>Page1</h1>
                <Component1 />
                <Component2 />
            </div>
        );
    }
}

