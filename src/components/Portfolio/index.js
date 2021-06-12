import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	PortfolioSec,
	PortfolioTitle,
	Span,
	Image,
	Overlay,
	PortfolioList,
	PortfolioItem,
	OverlaySpan,
	ImageWrapper
} from './style';
const Portolio = () => {
	const [ images, setImages ] = useState([]);
	useEffect(() => {
		axios.get('json/data.json').then((res) => {
			setImages(res.data.portfolio);
		});
	}, []);
	const porftfolioImages = images.map((item) => {
		return (
			<ImageWrapper key={item.id}>
				<Image src={item.image} />
				<Overlay>
					<OverlaySpan>Show Image</OverlaySpan>
				</Overlay>
			</ImageWrapper>
		);
	});
	return (
		<PortfolioSec>
			<PortfolioTitle>
				<Span>My</Span>Portfolio
			</PortfolioTitle>
			<PortfolioList>
				<PortfolioItem active>All</PortfolioItem>
				<PortfolioItem>HTML</PortfolioItem>
				<PortfolioItem>Photoshop</PortfolioItem>
				<PortfolioItem>Wordpress</PortfolioItem>
				<PortfolioItem>Mobile</PortfolioItem>
			</PortfolioList>
			<div className="box">{porftfolioImages}</div>
		</PortfolioSec>
	);
};
export default Portolio;
