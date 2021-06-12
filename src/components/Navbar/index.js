import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.sass';
const Navbar = () => {
	return (
		<div className="Navbar">
			<div className="container">
				<div className="logo">
					<svg
						className="logo-svg"
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 902.63 746.39"
					>
						<path
							d="M655.76,691.72l-122-359.11h99.67l77.52,234.77,14.64,54.53ZM1138,392.07,1030.1,407l25.24-74.34h103ZM903.63,1079H787.34L681.84,768.44,750.28,700,804,858.62c14.38,45.41,26.57,90.81,37.64,135.12h2.22c11.07-43.2,22.15-87.49,38.75-136.22l73.09-214.83,21.26-79.22,35.63-104.89,107.86-14.86Z"
							transform="translate(-533.75 -332.61)"
						/>
						<path
							d="M909,618.67,811.8,332.61h99.67l45,136.24ZM1421.92,375l-105.53,7.69,17-50.1h103Zm-240.23,704H1065.4l-56-164.65,49.36-124.28L1082,858.62c14.4,45.41,26.57,90.81,37.65,135.12h2.21c11.07-43.2,22.15-87.49,38.76-136.22l73.08-214.83L1255,563.47l44.37-130.62,105.44-7.69Z"
							transform="translate(-533.75 -332.61)"
						/>
					</svg>
				</div>
				<ul className="nav-list">
					<li className="nav-item">
						<Link to="/home">Home</Link>
					</li>
					<li className="nav-item">
						<Link to="#">Work</Link>
					</li>
					<li className="nav-item">
						<Link to="#">Portfolio</Link>
					</li>
					<li className="nav-item">
						<Link to="#">Resume</Link>
					</li>
					<li className="nav-item">
						<Link to="#">About</Link>
					</li>
					<li className="nav-item">
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Navbar;
