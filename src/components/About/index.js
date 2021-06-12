import React from 'react';
import './about.sass';
import { AboutSection, AboutInfo, InfoTitle, TitleSpan, InfoDir, InfoDesc, DescLink } from './style';
const About = () => {
	return (
		<AboutSection>
			<div className="container">
				<AboutInfo>
					<InfoTitle>
						<TitleSpan>This is</TitleSpan> Me
					</InfoTitle>
					<InfoDir>Frontend Developer</InfoDir>
					<InfoDesc>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est{' '}
						<DescLink href="#">explicabo</DescLink> maxime quibusdam quaerat nihil aliquid aperiam deleniti,
						repellendus dolorum. Possimus nisi cupiditate ad veritatis?
					</InfoDesc>
					<InfoDesc>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam
						quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad
						veritatis?
					</InfoDesc>
				</AboutInfo>
			</div>
		</AboutSection>
	);
};
export default About;
