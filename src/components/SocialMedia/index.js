import React, { Component } from 'react';
import axios from 'axios';
import './social-media.sass';
import { SocialSection, SocialDiv, SocialIcon, SocialDesc, DescSpan, DescSpan2 } from './style';
class Social extends Component {
	state = {
		social: []
	};
	componentDidMount() {
		axios.get('json/data.json').then((res) => {
			this.setState({ social: res.data.social });
		});
	}
	render() {
		const { social } = this.state;
		const SocialList = social.map((item) => {
			return (
				<SocialDiv key={item.id} item={item.id}>
					<SocialIcon className={item.icon} />
					<SocialDesc>
						<DescSpan>{item.title}</DescSpan>
						<DescSpan2>{item.body}</DescSpan2>
					</SocialDesc>
				</SocialDiv>
			);
		});
		return <SocialSection>{SocialList}</SocialSection>;
	}
}
export default Social;
