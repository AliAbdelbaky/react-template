import React from 'react';
//- Home Component
import Home from './../Home/index';
//---------
//- Work Component
import Work from './../Work/index';
//---------
//- Portfolio Component
import Portfolio from './../Portfolio/index';
//---------
//- Profile Component
import Profile from './../Profile/index';
//---------
//- About Component
import About from './../About/index';
//---------
//- Social Component
import SocialMedia from './../SocialMedia/index';
//---------
//- Footer Component
import Footer from './../Footer/index';
//---------
const Main = () => {
	return (
		<div className="Main">
			<Home />
			<Work />
			<Portfolio />
			<Profile />
			<About />
			<SocialMedia />
			<Footer />
		</div>
	);
};
export default Main;
