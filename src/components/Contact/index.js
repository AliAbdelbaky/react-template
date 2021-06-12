import React, { Fragment } from 'react';
import Footer from '../Footer/index';
import {
	ContactSection,
	DropTitle,
	DropTitleSpan,
	ContactForm,
	InputContainer,
	InputText,
	InputEmail,
	InputSup,
	TextArea,
	InputSupmit
} from './style.js';
const Contact = () => {
	return (
		<Fragment>
			<ContactSection>
				<div className="container">
					<DropTitle>
						<DropTitleSpan>Say </DropTitleSpan>Hello
					</DropTitle>
					<ContactForm action="">
						<InputContainer>
							<InputText type="text" placeholder="Your Name" />
							<InputEmail type="email" placeholder="Your Email" />
						</InputContainer>
						<InputSup type="text" className="sub" placeholder="Your Subject" />
						<TextArea cols="30" rows="10" placeholder="Your Message" />
						<InputSupmit type="submit" value="Send Message" />
					</ContactForm>
				</div>
			</ContactSection>
			<Footer />
		</Fragment>
	);
};
export default Contact;
