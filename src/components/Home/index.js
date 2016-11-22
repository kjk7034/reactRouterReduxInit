import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import './index.css';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.startNum = 0
    }
    componentDidMount() {
        const location = this.props.location;
        // history.back
        if (this.props.data && location.action === "POP") {
            this.startNum = this.props.data.length
        }
        // 최초 진입시 또는 다른 페이지에서 nav를 클릭하고 왔을 때
        if (!this.props.data || (!location.state && location.action === "PUSH")) {
            this.getFetch(0, 10, "init")
            return false
        }
        // Detail에서 온경우
        if (location.state && location.action === "PUSH") {
            this.startNum = location.state.size - 10
            this.getFetch(0, location.state.size, "init")
            window.scroll(0, location.state.scrollTop)
            return false
        }
    }
    getFetch(startNum, size = 10, state) {
        this.props.fetch({ size: size, startNum: startNum, state })
        this.startNum += 10
    }
    goDetail(e, idx) {
        e.preventDefault();
        // scrollTop 을 Detail 페이지와 주고 받아 이전버튼 처리
        browserHistory.push({ pathname: '/Detail', query: { id: idx }, state: { size: this.startNum, scrollTop: (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop } })
    }
    render() {
        return (
            <article className="Home">
                <h1>Home</h1>
                {
                    this.props.data && <div>
                        <ul>
                            {
                                this.props.data.map((items, idx) => {
                                    return <li key={idx} id={`data-${idx}`}><a href="#" onClick={(e) => this.goDetail(e, idx)}> {`이름 : ${items.name}, 닉네임 : ${items.nickname}, 메일 : ${items.mail}`}</a></li>
                                })
                            }
                        </ul>
                        <p>해당 내용을 더 가져오고 싶은 경우...</p>
                        <button type="button" onClick={() => this.getFetch(this.startNum)}>더보기</button>
                    </div>
                }
            </article>
        );
    }
}

