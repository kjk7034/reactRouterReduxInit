import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import './index.css';

class App extends Component {
    render() {
        return (
            <div>
                <section className="">
                    <h1>'react-router'의 Link를 이용한 예제 (nav)</h1>
                    <nav>
                        <ul>
                            <li><Link to="/home">Home Component</Link></li>
                            <li><Link to="/Page1">Page1 Component</Link></li>
                            <li><Link to="/Page2">Page2 Component</Link></li>
                            <li><Link to="/error">Error Component</Link></li>
                        </ul>
                    </nav>
                </section>
                <section className="">
                    <h1>browserHistory.push 예제</h1>
                    <button onClick={() => browserHistory.push('/Page1')}>Go to /Page1</button>
                </section>
                <section className="">
                    {this.props.children}
                </section>
            </div>
        );
    }
}

export default App;
