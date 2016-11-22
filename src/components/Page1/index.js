import React, { Component } from 'react'
import './index.css';
export default class Page2 extends Component {
    componentDidMount() {
        if (!this.props.data) {
            this.props.fetch()
        }
    }
    render() {
        return (
            <div className="Page1">
                <h1>Page1</h1>
                {
                    this.props.data && <ul>
                        {
                            this.props.data.map((items, idx) => {
                                return <li key={idx}>{`${idx} - ${items.count}`}</li>
                            })
                        }
                    </ul>
                }
            </div>
        );
    }
}

