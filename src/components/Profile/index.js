import React, { Fragment } from 'react';
import {
	ProfileSkills,
	ProfileContainer,
	ProfileTitle,
	ProfileTitleSpan,
	ProfileList,
	ProfileItem,
	ItemSpan,
	WebSpan,
	Skills,
	SkillsTitle,
	SkillsTitleSpan,
	SkillsDesc,
	SkiilsBar,
	BarTitle,
	BarPrec,
	BarParent,
	ParentSpan1,
	ParentSpan2,
	ParentSpan3
} from './style.js';
const Profile = () => {
	return (
		<Fragment>
			<ProfileSkills>
				<div className="container">
					<ProfileContainer>
						<ProfileTitle>
							<ProfileTitleSpan>My </ProfileTitleSpan>Profile
						</ProfileTitle>
						<ProfileList>
							<ProfileItem>
								<ItemSpan>Name</ItemSpan>
								Ali Abdelbaky
							</ProfileItem>
							<ProfileItem>
								<ItemSpan>Birthday</ItemSpan>
								24/4/2000
							</ProfileItem>
							<ProfileItem>
								<ItemSpan>Address</ItemSpan>
								Mansoura
							</ProfileItem>
							<ProfileItem>
								<ItemSpan>Phone</ItemSpan>
								+201066105963
							</ProfileItem>
							<ProfileItem>
								<ItemSpan>Email</ItemSpan>
								ali.abdelbaky2000@gmail.com
							</ProfileItem>
							<ProfileItem>
								<ItemSpan>Website</ItemSpan>
								<WebSpan href="https://aliabdelbaky.github.io/" target="_blank">
									Ali Abdelbaky
								</WebSpan>
							</ProfileItem>
						</ProfileList>
					</ProfileContainer>
					<Skills>
						<SkillsTitle>
							Some <SkillsTitleSpan>skills</SkillsTitleSpan>
						</SkillsTitle>
						<SkillsDesc>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse
							cupiditate, omnis similique.
						</SkillsDesc>
						<SkiilsBar>
							<BarTitle>Bootstrap</BarTitle>
							<BarPrec>100%</BarPrec>
							<BarParent>
								<ParentSpan1 />
							</BarParent>
						</SkiilsBar>
						<SkiilsBar>
							<BarTitle>CSS3</BarTitle>
							<BarPrec>90%</BarPrec>
							<BarParent>
								<ParentSpan2 />
							</BarParent>
						</SkiilsBar>
						<SkiilsBar>
							<BarTitle>Photoshop</BarTitle>
							<BarPrec>80%</BarPrec>
							<BarParent>
								<ParentSpan3 />
							</BarParent>
						</SkiilsBar>
					</Skills>
				</div>
			</ProfileSkills>
		</Fragment>
	);
};
export default Profile;
