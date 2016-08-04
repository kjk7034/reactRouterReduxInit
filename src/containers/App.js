import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import './App.css';

class App extends Component {
    render() {
        return (
            <div style={{height:100 + "%"}}>
                <nav>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/page1">Page1</Link></li>
                        <li><Link to="/error">Error</Link></li>
                    </ul>
                </nav>
                <button onClick={() => browserHistory.push('/page1')}>Go to /Page1</button>
                {this.props.children}
            </div>
        );
    }
}

export default App;
