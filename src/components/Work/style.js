import styled from 'styled-components';
export const WorkPart = styled.div`
	width: 30%;
	margin-left: 5%;
	border: 1px solid #ddd;
	text-align: center;
	float: left;
	padding: 4rem 1rem;
	margin-left: ${(props) => (props.first === 1 ? '0%' : '5%')};
`;
export const Icon = styled.i`
	color: #888;
	margin-bottom: 20px;
`;
export const TitlePart = styled.h4`
	color: #eb5242;
	font-size: 24px;
`;
export const Line = styled.hr`
	width: 60%;
	margin: 2rem auto;
`;
export const DescPart = styled.p`color: #5a5555;`;
