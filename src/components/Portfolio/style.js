import styled from 'styled-components';
export const PortfolioSec = styled.div`
	background-color: #f8f8f8;
	padding-top: 20px;
	overflow: hidden;
`;
export const PortfolioTitle = styled.div`
	text-align: center;
	font-size: 35px;
`;
export const Span = styled.span`font-weight: normal;`;
export const Image = styled.img`width: 100%;`;
export const Overlay = styled.div`
	position: absolute;
	top: 0%;
	bottom: 0%;
	left: 0%;
	right: 0%;
	background: rgba(235, 84, 36, 0.5);
	font-size: 15px;
	opacity: 0;
`;
export const PortfolioList = styled.ul`
	list-style: none;
	text-align: center;
	margin: 20px 0px;
	display: flex;
	justify-content: space-evenly;
`;
export const PortfolioItem = styled.li`
	display: inline-block;
	width: 100%;
	padding: 10px;
	cursor: pointer;
	background: ${(props) => (props.active ? '#eb5424' : '')};
	color: ${(props) => (props.active ? '#fff' : '#000')};
`;
export const OverlaySpan = styled.span`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: #fff;
	display: block;
	padding: 10px 20px;
	cursor: pointer;
	border: 2px solid #eb5424;
`;
export const ImageWrapper = styled.div`
	width: 25%;
	float: left;
	font-size: 0px;
	position: relative;
	&:hover > div {
		opacity: 1;
	}
`;
