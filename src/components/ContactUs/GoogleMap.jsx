"use client";

import React from "react";

const GoogleMap = () => {
	return (
		<>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.4111281667365!2d-73.9537809104218!3d40.6208143694799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c244bab84376e9%3A0xd3099d02b0568054!2s1234%20E%2027th%20St%2C%20Brooklyn%2C%20NY%2011210%2C%20USA!5e0!3m2!1sen!2sbd!4v1697020985776!5m2!1sen!2sbd"
				width="100%"
				height="500"
				style={{ border: "0" }}
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</>
	);
};

export default GoogleMap;
