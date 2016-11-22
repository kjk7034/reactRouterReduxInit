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
            <div className="Page2">
                <h1>Page2</h1>
                {
                    this.props.data && <ul>
                        {
                            this.props.data.map((items, idx) => {
                                return <li key={idx}>{`${idx} - ${items.name}`}</li>
                            })
                        }
                    </ul>
                }
            </div>
        );
    }
}

