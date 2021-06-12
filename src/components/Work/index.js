import React, { Component } from 'react';
import './work.sass';
import { DescPart, WorkPart, Icon, TitlePart, Line } from './style';
import axios from 'axios';
class Work extends Component {
	state = {
		works: []
	};
	componentDidMount() {
		axios.get('json/data.json').then((res) => this.setState({ works: res.data.works }));
	}
	render() {
		let { works } = this.state;
		const workList = works.map((item) => {
			return (
				<WorkPart first={item.id} key={item.id}>
					<Icon className={item.icon_name} />
					<TitlePart>{item.title}</TitlePart>
					<Line />
					<DescPart>{item.body}</DescPart>
				</WorkPart>
			);
		});
		return (
			<div className="work-sec">
				<div className="container">{workList}</div>
			</div>
		);
	}
}
export default Work;
