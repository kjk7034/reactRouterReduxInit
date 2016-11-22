import React, { Component } from 'react'
import { Link } from 'react-router'
import './index.css';
export default class Detail extends Component {
	render() {
		const location = this.props.location;
		return (
			<div className="Detail">
				<h1>Detail</h1>
				<p>게시글 <strong>{location.query.id}번</strong> 내용 ~ 블라블라</p>
				{
					location.state && <Link to={{ pathname: '/Home', state: { size: location.state.size, id: location.query.id, scrollTop: location.state.scrollTop } }}>이전 목록가기...</Link>
				}
			</div>
		);
	}
}

