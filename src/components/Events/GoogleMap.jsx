"use client";

import React from "react";

const GoogleMap = () => {
	return (
		<>
			<div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79433.37566167457!2d-0.2336510307490122!3d51.5261857668152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b7645295e3b%3A0x3600713c8382cf90!2sEmirates%20Stadium!5e0!3m2!1sen!2sbd!4v1696923302269!5m2!1sen!2sbd"
					width="100%"
					height="400"
					style={{ border: "0" }}
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</>
	);
};

export default GoogleMap;
