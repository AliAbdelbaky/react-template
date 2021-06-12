import React from 'react';
import './home.sass';
// import '../../../public/images/Home/home-bg.jpg';
const Home = () => {
	return (
		<div className="home">
			<div className="container">
				<div className="home-info">
					<h2 className="home-title">Ali Abdelbaky</h2>
					<h4 className="jop-disc">Web Developer</h4>
					<p className="home-disc">
						"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
						<br />
						"There is no one who loves pain itself, who seeks after it and wants to have it, simply because
						it is pain..."
					</p>
					<button className="home-btn">Let's Begin</button>
				</div>
			</div>
		</div>
	);
};
export default Home;
